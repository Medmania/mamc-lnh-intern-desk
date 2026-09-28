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
    const selectedDate = document.getElementById('dutyDate').value;
    for (let w of weeksData) {
      if (selectedDate >= w.start && selectedDate <= w.end) return w;
    }
    return weeksData[0];
  }
  function setTodayDate() {
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('dutyDate');
    dateInput.value = (today < "2026-05-23" || today > "2027-05-22") ? "2026-05-23" : today;
    onDateOrSelectionChange();
  }

  window.onload = async function() {
    setTodayDate();
    renderUserHistory();
    await loadRemoteWhatsNew();
    await loadExtraFaqs();
    checkForSiteUpdate();
  };

  function onDateOrSelectionChange() {
    if (!document.getElementById('roster-tab')?.classList.contains('hidden')) executeSmartSearch();
    else if (!document.getElementById('schedule-tab')?.classList.contains('hidden')) searchDeptSchedule();
    else if (!document.getElementById('lab-tab')?.classList.contains('hidden')) searchLabTests();
  }
