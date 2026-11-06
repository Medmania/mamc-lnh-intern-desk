// ========== CORE HELPERS ==========
function getCoInternsNames(coSnos, userDept, selectedDate, currentSearchedSno) {
  if (!coSnos || coSnos.length === 0) return "";
  const isNightDuty = userDept && userDept.toLowerCase().includes("night");
  const currentSnoNum = Number(currentSearchedSno);
  const wardPartners = coSnos.map(sno => {
    let displayName = "";
    const isNum = !isNaN(sno);
    if (isNum) {
      const intern = interns.find(i => Number(i.sno) === Number(sno));
      displayName = intern ? `${intern.name} (S.No ${sno})` : `S.No ${sno}`;
    } else displayName = sno;
    const isCurrent = isNum && Number(sno) === currentSnoNum;
    return `<span class="partner-chip" ${isCurrent ? 'style="background:rgba(34,197,94,0.3); border-color:#22c55e;"' : ''}>${displayName}</span>`;
  }).join('');
  let resultHtml = `<div class="duty-roster-box"><div class="ward-team-card"><div class="ward-team-header">👥 Co-Interns on Duty (${coSnos.length}):</div><div class="partner-pills">${wardPartners}</div></div>`;
  if (isNightDuty && typeof burariDailyRoster !== 'undefined' && burariDailyRoster[selectedDate]) {
    const dayData = burariDailyRoster[selectedDate];
    const nightInterns = [];
    for (const [snoStr, info] of Object.entries(dayData)) {
      if (info.dept && info.dept.toLowerCase().includes("night")) {
        const isNum = !isNaN(snoStr);
        const snoNum = isNum ? Number(snoStr) : null;
        let internName = snoStr;
        if (isNum) {
          const intern = interns.find(i => Number(i.sno) === snoNum);
          internName = intern ? `${intern.name} (#${snoNum})` : `S.No ${snoNum}`;
        }
        nightInterns.push({ sno: isNum ? snoNum : snoStr, displayName: internName, dept: info.dept, isCurrent: isNum && snoNum === currentSnoNum });
      }
    }
    if (nightInterns.length > 0) {
      resultHtml += `<div class="night-roster-card"><div class="night-roster-header">🌙 Everyone on Night Duty Today (${nightInterns.length}):</div><div class="duty-grid">${nightInterns.map(item => `<div class="duty-item ${item.isCurrent ? 'active-user' : ''}"><span><strong>${item.displayName}</strong></span><span class="duty-dept-tag">${item.dept.replace(/night/i, '').trim()}</span></div>`).join('')}</div></div>`;
    }
  }
  resultHtml += `</div>`;
  return resultHtml;
}

function getPostingForSubdivision(subdiv, weekNum) {
  const weekKey = `Week${weekNum}`;
  return subdivisionRoster[subdiv]?.[weekKey] || 'General Duty';
}

function getSpecialUnitInfo(sno, dateStr) {
  if (typeof specialUnitRoster === 'undefined' || !specialUnitRoster || !dateStr || !sno) return null;
  return specialUnitRoster.find(r => Number(r.sno) === Number(sno) && dateStr >= r.start && dateStr <= r.end) || null;
}

function formatDateShort(dateStr) {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year.slice(2)}`;
}

function getBurariDutiesForWeek(sno, weekStart, weekEnd) {
  if (typeof burariDailyRoster === 'undefined' || !burariDailyRoster || !sno || !weekStart || !weekEnd) return [];
  const duties = [];
  const cur = new Date(weekStart + 'T00:00:00');
  const end = new Date(weekEnd + 'T00:00:00');
  const snoKey = String(sno);
  const snoNum = Number(sno);
  while (cur <= end) {
    const y = cur.getFullYear();
    const m = String(cur.getMonth() + 1).padStart(2, '0');
    const d = String(cur.getDate()).padStart(2, '0');
    const dateStr = `${y}-${m}-${d}`;
    const dayMap = burariDailyRoster[dateStr];
    if (dayMap) {
      const info = dayMap[snoKey] || dayMap[snoNum] || dayMap[sno];
      if (info && info.dept) duties.push({ date: dateStr, dept: info.dept, co_snos: info.co_snos || [] });
    }
    cur.setDate(cur.getDate() + 1);
  }
  return duties;
}

function renderBurariWeekBreakdown(sno, weekStart, weekEnd) {
  const duties = getBurariDutiesForWeek(sno, weekStart, weekEnd);
  if (!duties.length) return '<div class="timeline-burari-empty">Daily Burari roster not yet updated for this week</div>';
  const chips = duties.map(du => {
    const low = (du.dept || '').toLowerCase();
    let cls = 'timeline-day-chip';
    if (low.includes('night')) cls += ' night';
    else if (low.includes('pdo')) cls += ' pdo';
    return `<span class="${cls}"><span class="dlabel">${formatDateShort(du.date)}</span> ${du.dept}</span>`;
  }).join('');
  return `<div class="timeline-burari-days">${chips}</div>`;
}

function getSelectedWeek() {
  const selectedDate = document.getElementById('dutyDate')?.value || "2026-05-23";
  for (let w of weeksData) {
    if (selectedDate >= w.start && selectedDate <= w.end) return w;
  }
  return weeksData[0];
}

function setTodayDate() {
  const today = new Date().toISOString().split('T')[0];
  const dateInput = document.getElementById('dutyDate');
  if (dateInput) {
    dateInput.value = (today < "2026-05-23" || today > "2027-05-22") ? "2026-05-23" : today;
  }
  onDateOrSelectionChange();
}

window.onload = async function() {
  setTodayDate();
  renderUserHistory();
  if (typeof loadRemoteWhatsNew === 'function') await loadRemoteWhatsNew();
  if (typeof loadExtraFaqs === 'function') await loadExtraFaqs();
  if (typeof checkForSiteUpdate === 'function') checkForSiteUpdate();
};

function onDateOrSelectionChange() {
  if (!document.getElementById('roster-tab')?.classList.contains('hidden')) executeSmartSearch();
  else if (!document.getElementById('schedule-tab')?.classList.contains('hidden')) searchDeptSchedule();
  else if (!document.getElementById('lab-tab')?.classList.contains('hidden')) searchLabTests();
}

// ========== ROSTER UPLOADS & USER-SIDE NOTICES ==========
let uploadedRostersList = [];

function initUploadedRostersListener() {
  if (typeof db === 'undefined' || !db) return;
  db.collection('uploadedRosters').orderBy('createdAt', 'desc').onSnapshot(snap => {
    uploadedRostersList = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    if (document.getElementById('adminUploadedRosterList')) renderAdminUploadedRosterList();
    checkAndShowUploadedRosters();
  }, err => {
    console.warn("Uploaded rosters fetch error:", err);
  });
}

function checkAndShowUploadedRosters() {
  const container = document.getElementById('uploadedRostersContainer');
  if (!container) return;

  const selectedDate = document.getElementById('dutyDate')?.value || "";
  const deptQuery = document.getElementById('universalDeptSelect')?.value || "";

  if (!selectedDate || !uploadedRostersList || uploadedRostersList.length === 0) {
    container.innerHTML = "";
    return;
  }

  // Filter rosters that match selectedDate within FromDate..ToDate range
  const activeRosters = uploadedRostersList.filter(r => {
    const dateMatch = selectedDate >= r.fromDate && selectedDate <= r.toDate;
    const deptMatch = !deptQuery || r.dept.toLowerCase() === deptQuery.toLowerCase();
    return dateMatch && deptMatch;
  });

  if (activeRosters.length === 0) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = activeRosters.map(r => {
    const isPdf = r.fileType === 'application/pdf' || (r.fileUrl && r.fileUrl.startsWith('data:application/pdf'));
    const isImage = !isPdf;

    return `
      <div class="uploaded-roster-card">
        <div class="uploaded-roster-header">
          <div>
            <h4 class="uploaded-roster-title">📄 Official Department Roster: ${r.deptName || r.dept}</h4>
            ${r.title ? `<div style="font-size:13px;font-weight:700;color:var(--text);margin-top:2px">${r.title}</div>` : ''}
          </div>
          <span class="uploaded-roster-dates">📅 ${formatDateShort(r.fromDate)} – ${formatDateShort(r.toDate)}</span>
        </div>
        
        ${r.note ? `<div style="font-size:12.5px;color:var(--text-muted);margin-bottom:8px">💡 <em>${r.note}</em></div>` : ''}

        <div class="uploaded-roster-body">
          ${isImage ? `
            <img src="${r.fileUrl}" class="uploaded-roster-preview-img" alt="${r.title || 'Official Roster'}" onclick="openLightboxImage('${r.fileUrl}')" title="Click to view full size">
          ` : `
            <div style="background:var(--box-bg);padding:14px;border-radius:12px;border:1px solid var(--border);display:flex;align-items:center;gap:12px">
              <span style="font-size:28px">📄</span>
              <div>
                <strong style="font-size:14px;color:var(--text)">PDF Roster Document Attached</strong>
                <div style="font-size:12px;color:var(--text-muted)">Uploaded on ${r.createdAt ? new Date(r.createdAt.seconds * 1000).toLocaleDateString() : 'recent date'}</div>
              </div>
            </div>
          `}
          
          <div class="uploaded-roster-actions">
            <a href="${r.fileUrl}" target="_blank" download="Roster_${r.dept}_${r.fromDate}.pdf" class="btn-primary-sm" style="text-decoration:none;display:inline-flex;align-items:center;gap:4px">
              ${isPdf ? '📄 View / Download Official PDF' : '🔍 Open Full Resolution Image'}
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openLightboxImage(url) {
  if (typeof openLightbox === 'function') {
    const img = document.getElementById('lightboxImg');
    const dlBtn = document.getElementById('lightboxDownloadBtn');
    if (img) img.src = url;
    if (dlBtn) dlBtn.href = url;
    document.getElementById('imageLightboxModal')?.classList.remove('hidden');
  } else {
    window.open(url, '_blank');
  }
}

// ========== ADMIN ROSTER UPLOAD HANDLERS ==========
function resetAdminRosterForm() {
  document.getElementById('editingRosterId').value = '';
  document.getElementById('adminRosterDept').value = '';
  document.getElementById('adminRosterTitle').value = '';
  document.getElementById('adminRosterFromDate').value = '';
  document.getElementById('adminRosterToDate').value = '';
  document.getElementById('adminRosterFile').value = '';
  document.getElementById('adminRosterNote').value = '';
  document.getElementById('adminRosterFormTitle').textContent = '📄 Upload Official Department Roster';
  document.getElementById('adminRosterSubmitBtn').textContent = 'Upload Roster';
  document.getElementById('adminRosterCancelBtn').classList.add('hidden');
}

async function saveAdminRosterUpload() {
  if (!currentUser || !isAdmin) return alert('Admin authentication required.');

  const deptSelect = document.getElementById('adminRosterDept');
  const dept = deptSelect.value;
  const deptName = deptSelect.options[deptSelect.selectedIndex]?.text || dept;
  const title = document.getElementById('adminRosterTitle').value.trim();
  const fromDate = document.getElementById('adminRosterFromDate').value;
  const toDate = document.getElementById('adminRosterToDate').value;
  const fileInput = document.getElementById('adminRosterFile');
  const note = document.getElementById('adminRosterNote').value.trim();

  if (!dept || !fromDate || !toDate) {
    return alert('Please fill in Department, From Date, and To Date.');
  }

  if (fromDate > toDate) {
    return alert('From Date cannot be later than To Date.');
  }

  if (!fileInput || fileInput.files.length === 0) {
    return alert('Please select a roster image or PDF file to upload.');
  }

  const file = fileInput.files[0];
  const btn = document.getElementById('adminRosterSubmitBtn');
  btn.textContent = "Processing & Uploading...";
  btn.disabled = true;

  try {
    let fileUrl = "";
    if (file.type.startsWith('image/')) {
      fileUrl = await compressImage(file, 1600, 0.8);
    } else {
      fileUrl = await readFileAsDataURL(file);
    }

    await db.collection('uploadedRosters').add({
      dept,
      deptName,
      title,
      fromDate,
      toDate,
      fileUrl,
      fileType: file.type,
      fileName: file.name,
      note,
      uploadedBy: currentUser.email || 'Admin',
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    alert('Official roster uploaded successfully!');
    resetAdminRosterForm();
  } catch (e) {
    alert('Upload error: ' + e.message);
  } finally {
    btn.textContent = "Upload Roster";
    btn.disabled = false;
  }
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.onerror = err => reject(err);
    reader.readAsDataURL(file);
  });
}

function renderAdminUploadedRosterList() {
  const el = document.getElementById('adminUploadedRosterList');
  if (!el) return;

  if (uploadedRostersList.length === 0) {
    el.innerHTML = '<p style="color:var(--text-muted);font-size:13px">No official rosters uploaded yet.</p>';
    return;
  }

  el.innerHTML = uploadedRostersList.map(r => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:var(--box-bg);border-radius:10px;margin-bottom:8px;font-size:13px;border:1px solid var(--border)">
      <div style="flex:1;min-width:0;margin-right:8px">
        <strong style="color:var(--text)">${r.deptName || r.dept}</strong> ${r.title ? `— <em>${r.title}</em>` : ''}
        <div style="font-size:11.5px;color:var(--text-muted);margin-top:2px">
          📅 ${formatDateShort(r.fromDate)} to ${formatDateShort(r.toDate)} • 📁 ${r.fileName || r.fileType}
        </div>
      </div>
      <div style="display:flex;gap:6px">
        <a href="${r.fileUrl}" target="_blank" style="background:var(--card);color:var(--text);border:1px solid var(--border);padding:5px 8px;border-radius:6px;font-weight:700;font-size:11px;text-decoration:none">View</a>
        <button onclick="deleteUploadedRoster('${r.id}', '${(r.deptName || r.dept).replace(/'/g, "\\'")}')" style="background:rgba(239,68,68,0.15);color:#ef4444;border:none;padding:5px 8px;border-radius:6px;font-weight:700;font-size:11px;cursor:pointer">🗑️ Delete</button>
      </div>
    </div>
  `).join('');
}

async function deleteUploadedRoster(id, deptName) {
  if (!currentUser || !isAdmin) return alert('Admin authentication required.');
  if (!confirm(`Permanently delete official roster for ${deptName}?`)) return;
  try {
    await db.collection('uploadedRosters').doc(id).delete();
    alert('Roster deleted successfully.');
  } catch (e) {
    alert('Error deleting: ' + e.message);
  }
}

// ========== REDESIGNED COMPACT SMART SEARCH ==========
function executeSmartSearch() {
  const personQuery = document.getElementById('universalPersonInput')?.value.toLowerCase().trim() || "";
  const deptQuery = document.getElementById('universalDeptSelect')?.value || "";
  const selectedDate = document.getElementById('dutyDate')?.value || "2026-05-23";
  const resDiv = document.getElementById('smartSearchResults');
  if (!resDiv) return;

  const weekInfo = getSelectedWeek();

  // Check and render official uploaded rosters notice banner
  checkAndShowUploadedRosters();

  if (!personQuery && !deptQuery) {
    resDiv.innerHTML = '<p style="padding:16px;color:var(--text-muted);text-align:center">Type an intern name/S.No or select a department to see postings.</p>';
    return;
  }

  // 1. SEARCH PERSON + DEPARTMENT COMBINATION
  if (personQuery && deptQuery) {
    const matchedInterns = interns.filter(i => 
      i.name.toLowerCase().includes(personQuery) || 
      i.roll.includes(personQuery) || 
      i.batch.toLowerCase() === personQuery || 
      i.sno.toString() === personQuery
    );

    if (matchedInterns.length === 0) {
      resDiv.innerHTML = `<p style="padding:16px;color:var(--text-muted);text-align:center">No intern matching "<strong>${personQuery}</strong>" found.</p>`;
      return;
    }

    let html = '';
    matchedInterns.forEach(student => {
      const matchingWeeks = weeksData.filter(w => getPostingForSubdivision(student.batch, w.wk).toLowerCase() === deptQuery.toLowerCase());
      if (matchingWeeks.length === 0) {
        html += `<div class="result-card" style="padding:16px"><h3>${student.name} (S.No ${student.sno} • Subdivision ${student.batch})</h3><p style="color:var(--text-muted);margin-top:6px">Not posted in <strong>${deptQuery}</strong> during the 2026–2027 internship year.</p></div>`;
        return;
      }
      html += `
        <div class="result-card">
          <div class="result-card-header">
            <h3>👤 ${student.name} &nbsp;➔&nbsp; 🏥 ${deptQuery}</h3>
            <span class="badge badge-sub">Subdivision ${student.batch} • S.No ${student.sno}</span>
          </div>
          <div class="result-card-meta">Posted in <strong>${deptQuery}</strong> for <strong>${matchingWeeks.length} week(s)</strong>:</div>
          <div class="result-card-body">`;
      
      matchingWeeks.forEach(w => {
        const unitInfo = getSpecialUnitInfo(student.sno, w.start);
        const currentUnitName = unitInfo ? unitInfo.unit : null;
        const activeSubdivisions = [];
        ['A', 'B', 'C', 'D'].forEach(g => { 
          for (let i = 1; i <= 12; i++) { 
            const sub = g + i; 
            if (getPostingForSubdivision(sub, w.wk).toLowerCase() === deptQuery.toLowerCase()) activeSubdivisions.push(sub); 
          } 
        });
        const allDeptInterns = interns.filter(i => activeSubdivisions.includes(i.batch));
        const sameUnitPartners = currentUnitName ? allDeptInterns.filter(i => getSpecialUnitInfo(i.sno, w.start)?.unit === currentUnitName) : [];
        
        html += `
          <div class="week-box">
            <div class="week-box-header">
              <div>
                <span style="font-weight:800;color:var(--primary);font-size:14.5px">🗓️ Week ${w.wk}</span>
                <span style="font-size:12.5px;color:var(--text-muted);margin-left:6px">(${formatDateShort(w.start)} – ${formatDateShort(w.end)})</span>
              </div>
              ${unitInfo ? `<span class="badge badge-unit">${unitInfo.unit} • ${unitInfo.incharge}</span>` : '<span class="badge badge-sub">General Duty</span>'}
            </div>`;
        
        if (sameUnitPartners.length > 0) {
          html += `
            <div class="unit-partner-section">
              <div style="font-size:12px;font-weight:700;color:#16a34a">🤝 Posted in ${currentUnitName} with ${student.name.split(' ')[0]} (${sameUnitPartners.length}):</div>
              <div class="partner-pills">
                ${sameUnitPartners.map(p => `<span class="partner-chip" ${p.sno === student.sno ? 'style="background:rgba(34,197,94,0.3);border-color:#22c55e"' : ''}>${p.name} <span style="font-size:10.5px;opacity:0.8">(S.No ${p.sno})</span></span>`).join('')}
              </div>
            </div>`;
        }

        html += `
            <details class="co-intern-toggle">
              <summary>👥 View all ${allDeptInterns.length} interns in ${deptQuery} this week</summary>
              <div class="co-intern-grid">
                ${allDeptInterns.map(ci => `<span class="co-intern-chip" ${ci.sno === student.sno ? 'style="background:rgba(56,189,248,0.2);border-color:#38bdf8;font-weight:bold"' : ''}>${ci.name} (${ci.batch})${getSpecialUnitInfo(ci.sno, w.start) ? ` <strong style="color:#d97706">[${getSpecialUnitInfo(ci.sno, w.start).unit}]</strong>` : ''}</span>`).join('')}
              </div>
            </details>
          </div>`;
      });
      html += `</div></div>`;
    });
    resDiv.innerHTML = html;
    return;
  }

  // 2. SEARCH BY DEPARTMENT ONLY (COMPACT TIGHT CARDS REDESIGN)
  if (!personQuery && deptQuery) {
    const activeSubdivisions = [];
    ['A', 'B', 'C', 'D'].forEach(g => { 
      for (let i = 1; i <= 12; i++) { 
        const sub = g + i; 
        if (getPostingForSubdivision(sub, weekInfo.wk).toLowerCase() === deptQuery.toLowerCase()) {
          activeSubdivisions.push(sub); 
        }
      } 
    });

    const activeInterns = interns.filter(i => activeSubdivisions.includes(i.batch)).sort((a, b) => a.sno - b.sno);

    let html = `
      <div class="result-card" style="margin-bottom:12px">
        <div class="schedule-header">🏥 ${deptQuery} Roster</div>
        <div style="padding:12px 16px">
          <div style="font-size:13.5px;color:var(--text-muted);margin-bottom:8px">
            <strong>Week ${weekInfo.wk}</strong> • ${formatDateShort(weekInfo.start)} to ${formatDateShort(weekInfo.end)}
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center">
            <span style="font-weight:700;font-size:13px;color:var(--text)">Active Subdivisions (${activeInterns.length} Interns):</span>
            ${activeSubdivisions.length > 0 ? activeSubdivisions.map(s => `<span class="badge badge-sub">${s}</span>`).join('') : '<span style="color:var(--text-muted)">None</span>'}
          </div>
        </div>
      </div>`;

    if (activeInterns.length === 0) {
      html += `<p style="padding:16px;color:var(--text-muted);text-align:center">No interns are posted in ${deptQuery} during Week ${weekInfo.wk}.</p>`;
    } else {
      html += `<div class="intern-compact-list">`;
      activeInterns.forEach(i => {
        const unitInfo = getSpecialUnitInfo(i.sno, selectedDate);
        html += `
          <div class="intern-compact-card">
            <div class="intern-left">
              <span class="intern-sno">#${i.sno}</span>
              <div class="intern-details">
                <span class="intern-name">${i.name}</span>
                <span class="intern-roll">Roll No: ${i.roll}</span>
              </div>
            </div>
            <div class="intern-right">
              <span class="badge badge-sub">${i.batch}</span>
              ${unitInfo ? `<span class="badge badge-unit" title="${unitInfo.incharge}">${unitInfo.unit}</span>` : ''}
            </div>
          </div>
        `;
      });
      html += `</div>`;
    }

    resDiv.innerHTML = html;
    return;
  }

  // 3. SEARCH BY PERSON ONLY
  if (personQuery && !deptQuery) {
    const matches = interns.filter(i => 
      i.name.toLowerCase().includes(personQuery) || 
      i.roll.includes(personQuery) || 
      i.batch.toLowerCase() === personQuery || 
      i.sno.toString() === personQuery
    );

    if (matches.length === 0) {
      resDiv.innerHTML = '<p style="padding:16px;color:var(--text-muted);text-align:center">No interns found matching your search.</p>';
      return;
    }

    let html = '';
    matches.forEach(student => {
      let activePosting = getPostingForSubdivision(student.batch, weekInfo.wk);
      let burariDutyInfo = null, peripheryInfo = null, isPDO = false;
      const studentSno = Number(student.sno);

      if (typeof burariDailyRoster !== 'undefined' && burariDailyRoster[selectedDate]?.[studentSno]) {
        burariDutyInfo = burariDailyRoster[selectedDate][studentSno];
      }
      if (!burariDutyInfo && typeof burariDailyRoster !== 'undefined') {
        const prevDate = new Date(selectedDate);
        prevDate.setDate(prevDate.getDate() - 1);
        if (burariDailyRoster[prevDate.toISOString().split('T')[0]]?.[studentSno]?.dept?.toLowerCase().includes("night")) isPDO = true;
      }
      if (!burariDutyInfo && !isPDO && typeof peripheryRosterMap !== 'undefined' && peripheryRosterMap[student.batch]) {
        const pMatch = peripheryRosterMap[student.batch].find(p => selectedDate >= p.start && selectedDate <= p.end);
        if (pMatch) peripheryInfo = pMatch.center;
      }

      let displayDuty = activePosting;
      if (burariDutyInfo) displayDuty = `PSM - ${burariDutyInfo.dept}`;
      else if (isPDO) displayDuty = `PSM - PDO (Post Duty Off)`;
      else if (peripheryInfo) displayDuty = `PSM (${peripheryInfo.toUpperCase()})`;

      const unitInfo = getSpecialUnitInfo(student.sno, selectedDate);
      const unitBadgeHtml = unitInfo ? `<span class="badge badge-unit" style="margin-left:8px">${unitInfo.unit}</span><span style="font-size:11.5px;color:var(--text-muted);margin-left:6px">(${unitInfo.incharge})</span>` : '';

      html += `
        <div class="result-card">
          <div class="result-card-header">
            <h3>👤 ${student.name}</h3>
            <span class="badge badge-sub">Subdivision ${student.batch} • S.No ${student.sno}</span>
          </div>
          <div class="result-card-meta">
            <strong>Roll No:</strong> ${student.roll}
          </div>
          <div class="result-card-body">
            <div class="posting-chip">
              📍 
              <div>
                <div style="font-size:12px;font-weight:600;opacity:0.85;margin-bottom:2px">Posting on ${formatDateShort(selectedDate)}</div>
                <div style="font-size:15.5px;font-weight:800;display:flex;align-items:center;flex-wrap:wrap;gap:4px">${displayDuty}${unitBadgeHtml}</div>
                <div style="font-size:12px;font-weight:500;opacity:0.75;margin-top:2px">Week ${weekInfo.wk} • ${weekInfo.block}</div>
              </div>
            </div>
            
            ${burariDutyInfo ? getCoInternsNames(burariDutyInfo.co_snos, burariDutyInfo.dept, selectedDate, studentSno) : ''}
            
            <details class="roster-timeline-details" style="margin-top:14px" data-focus-week="${weekInfo.wk}">
              <summary>▶ View 52-Week Full Roster Timeline</summary>
              <p class="timeline-hint">Showing from Week ${weekInfo.wk} (selected date). Scroll up/down for other weeks.</p>
              <div class="timeline-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Wk</th>
                      <th>Date Range</th>
                      <th>Department Posting</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${weeksData.map(w => {
                      const post = getPostingForSubdivision(student.batch, w.wk);
                      const isSelected = w.wk === weekInfo.wk;
                      let timelineDisplay = post;
                      const weekUnit = getSpecialUnitInfo(studentSno, w.start);
                      if (weekUnit && weekUnit.dept.toLowerCase() === post.toLowerCase()) {
                        timelineDisplay = `<b>${post} (${weekUnit.unit})</b><br><span style="font-size:11px;color:var(--text-muted)">${weekUnit.incharge}</span>`;
                      }
                      const isPsmWeek = (post || '').toLowerCase().includes('psm') || (post || '').toLowerCase().includes('community');
                      if (isPsmWeek) {
                        timelineDisplay = `<div style="font-weight:800">${timelineDisplay}</div>` + renderBurariWeekBreakdown(studentSno, w.start, w.end);
                      }
                      return `
                        <tr class="${isSelected ? 'selected-week-row' : ''}" data-week="${w.wk}">
                          <td>W${w.wk}</td>
                          <td>${formatDateShort(w.start)} to ${formatDateShort(w.end)}</td>
                          <td>${timelineDisplay}</td>
                        </tr>`;
                    }).join('')}
                  </tbody>
                </table>
              </div>
            </details>
          </div>
        </div>`;
    });

    resDiv.innerHTML = html;

    resDiv.querySelectorAll('details.roster-timeline-details').forEach(det => {
      det.addEventListener('toggle', function() {
        if (!det.open) return;
        const scrollToSelected = () => {
          const scrollBox = det.querySelector('.timeline-scroll');
          const row = det.querySelector('tr.selected-week-row');
          if (!scrollBox || !row) return;
          const headerH = scrollBox.querySelector('thead')?.offsetHeight || 40;
          const target = Math.max(0, row.offsetTop - headerH - 6);
          scrollBox.scrollTo({ top: target, behavior: 'smooth' });
        };
        requestAnimationFrame(() => setTimeout(scrollToSelected, 40));
      });
    });
  }
}
