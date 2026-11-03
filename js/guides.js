/**
 * MAMC-LNH Intern Portal — Guides & Documents Module
 * File: js/guides.js
 */

// Selected category state with localStorage persistence
let selectedGuideCategory = localStorage.getItem("mamc_guide_category") || "All";
let editingGuideId = null;

/**
 * Normalizes old or legacy category strings into the 5 standard categories
 */
function normalizeGuideCategory(cat) {
  if (!cat) return "Others";
  const lower = cat.toLowerCase();
  if (lower.includes("referral") || lower.includes("consult") || lower.includes("memo")) return "Referral";
  if (lower.includes("consent")) return "Consent";
  if (lower.includes("form") || lower.includes("requisition") || lower.includes("logbook")) return "Form / Requisition";
  if (lower.includes("protocol") || lower.includes("ordering") || lower.includes("essential") || lower.includes("joining") || lower.includes("duty")) return "Internship Essentials";
  if (["referral", "consent", "form / requisition", "internship essentials", "others"].includes(lower)) {
    return cat;
  }
  return "Others";
}

/**
 * Generates badge HTML with subtle category colors
 */
function getCategoryBadgeHtml(cat) {
  const normalized = normalizeGuideCategory(cat);
  let bg = "#f3f4f6", color = "#374151", border = "#d1d5db";

  switch (normalized) {
    case "Referral":
      bg = "rgba(59, 130, 246, 0.12)"; color = "#1d4ed8"; border = "rgba(59, 130, 246, 0.35)";
      break;
    case "Consent":
      bg = "rgba(245, 158, 11, 0.14)"; color = "#b45309"; border = "rgba(245, 158, 11, 0.35)";
      break;
    case "Form / Requisition":
      bg = "rgba(139, 92, 246, 0.12)"; color = "#6d28d9"; border = "rgba(139, 92, 246, 0.35)";
      break;
    case "Internship Essentials":
      bg = "rgba(34, 197, 94, 0.12)"; color = "#15803d"; border = "rgba(34, 197, 94, 0.35)";
      break;
    case "Others":
    default:
      bg = "rgba(100, 116, 139, 0.12)"; color = "#475569"; border = "rgba(100, 116, 139, 0.35)";
      break;
  }

  return `<span class="badge" style="background:${bg}; color:${color}; border:1px solid ${border}; font-size:11px; font-weight:800;">${normalized}</span>`;
}

/**
 * Category Chip Selection Handler
 */
function selectGuideCategoryFilter(cat, btnEl) {
  selectedGuideCategory = cat;
  localStorage.setItem("mamc_guide_category", cat);

  document.querySelectorAll("#categoryChipsContainer .cat-chip").forEach(btn => btn.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");

  renderClinicalGuides();
}

/**
 * Synchronizes category chips UI with current state
 */
function syncCategoryChipsUI() {
  const chips = document.querySelectorAll("#categoryChipsContainer .cat-chip");
  chips.forEach(chip => {
    if (chip.textContent.trim().toLowerCase() === selectedGuideCategory.toLowerCase()) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });
}

/**
 * Fetches clinical guides data from backend Apps Script
 */
async function fetchClinicalGuides() {
  const container = document.getElementById("guidesResultsGrid");
  try {
    const res = await fetch(APPS_SCRIPT_URL);
    const data = await res.json();
    if (data.status === "success") {
      clinicalGuidesData = data.guides || [];
      renderClinicalGuides();
    }
  } catch (err) {
    if (container) container.innerHTML = `<p style="color:var(--text-muted);font-size:13px">Failed to load guides.</p>`;
  }
}

/**
 * Toggles vertical Quick Jump popup
 */
function toggleGuideIndexPopup() {
  const popup = document.getElementById("guideIndexPopup");
  if (!popup) return;
  popup.classList.toggle("hidden");
}

/**
 * Jumps to specific guide card & closes Quick Jump popup
 */
function jumpToGuide(cardId) {
  document.getElementById("guideIndexPopup")?.classList.add("hidden");
  const card = document.getElementById(cardId);
  if (!card) return;
  card.scrollIntoView({ behavior: "smooth", block: "center" });
  card.classList.remove("card-highlighted");
  void card.offsetWidth;
  card.classList.add("card-highlighted");
}

/**
 * Main Render Function for Guides & Documents Tab
 */
function renderClinicalGuides() {
  syncCategoryChipsUI();

  const query = document.getElementById("guideSearchInput")?.value.toLowerCase().trim() || "";
  const deptFilter = document.getElementById("guideDeptSelect")?.value || "all";
  const mainContainer = document.getElementById("guidesResultsGrid");
  const pinnedSection = document.getElementById("pinnedGuidesSection");
  const pinnedGrid = document.getElementById("pinnedGuidesGrid");
  const indexBar = document.getElementById("guideIndexBar");

  if (!mainContainer) return;

  // Filter documents based on Dept, Category & Search
  let filtered = clinicalGuidesData.filter(g => {
    const docDept = g.dept || "All Departments";
    const normalizedCat = normalizeGuideCategory(g.category);

    const matchesDept = (deptFilter === "all") ||
                        (docDept.toLowerCase() === "all departments") ||
                        (docDept.toLowerCase() === deptFilter.toLowerCase());

    const matchesCat = (selectedGuideCategory === "All") ||
                       (normalizedCat.toLowerCase() === selectedGuideCategory.toLowerCase());

    const matchesQuery = !query ||
                         g.title.toLowerCase().includes(query) ||
                         (g.templateText || "").toLowerCase().includes(query) ||
                         normalizedCat.toLowerCase().includes(query) ||
                         docDept.toLowerCase().includes(query);

    return matchesDept && matchesCat && matchesQuery;
  });

  // Separate Pinned / Critical Documents
  const pinnedKeywords = ["needle stick", "uncontrolled sugar", "sugar referral", "consent", "pac", "bedside pac", "joining letter", "pdo letter"];
  
  let pinnedDocs = [];
  let normalDocs = [];

  filtered.forEach(g => {
    const titleLower = g.title.toLowerCase();
    const isPinned = pinnedKeywords.some(kw => titleLower.includes(kw)) || g.isPinned === true;
    if (isPinned && pinnedDocs.length < 8) {
      pinnedDocs.push(g);
    } else {
      normalDocs.push(g);
    }
  });

  // Render Vertical Quick Jump Index Items
  if (indexBar) {
    if (filtered.length === 0) {
      indexBar.innerHTML = `<span style="font-size:12px;color:var(--text-muted)">No documents match.</span>`;
    } else {
      indexBar.innerHTML = filtered.map((g, idx) => {
        const cardDomId = `guide-card-${g.id}`;
        const isLatest = idx === 0 && !query && deptFilter === "all";
        return `
        <button class="index-pill" style="text-align:left;padding:6px 10px;border-radius:8px;border:1px solid var(--border);background:var(--box-bg);color:var(--text);font-size:12px;font-weight:700;cursor:pointer;width:100%" onclick="jumpToGuide('${cardDomId}')">
          ${isLatest ? '✨ ' : '📄 '}<strong>${g.title}</strong>
        </button>`;
      }).join('');
    }
  }

  // Render Pinned Section
  if (pinnedDocs.length > 0 && !query) {
    pinnedSection.style.display = "block";
    pinnedGrid.innerHTML = pinnedDocs.map(g => createGuideCardHtml(g, true)).join('');
  } else {
    pinnedSection.style.display = "none";
  }

  // Render Main Grid
  if (normalDocs.length === 0 && pinnedDocs.length === 0) {
    mainContainer.innerHTML = `<p style="grid-column:1/-1;text-align:center;padding:24px;color:var(--text-muted);font-weight:600">No matching guides found.</p>`;
    return;
  }

  mainContainer.innerHTML = normalDocs.map(g => createGuideCardHtml(g, false)).join('');
}

/**
 * Renders individual document card HTML
 */
function createGuideCardHtml(g, isPinned = false) {
  const isImage = g.isImage || (g.imageUrl && g.imageUrl.includes("lh3.googleusercontent"));
  const fileLink = g.fileUrl || g.imageUrl || "";
  const safeId = String(g.id).replace(/'/g, "\\'");
  const cardDomId = `guide-card-${g.id}`;
  const deptText = g.dept || "All Departments";
  const categoryBadge = getCategoryBadgeHtml(g.category);

  return `
  <div id="${cardDomId}" class="result-card" style="padding:14px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:var(--shadow-sm);border:1.5px solid var(--border);position:relative">
    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;margin-bottom:8px">
        <span class="badge badge-sub" style="font-size:11px;font-weight:700">🏥 ${deptText}</span>
        ${categoryBadge}
      </div>

      <h4 style="margin:0 0 8px 0;font-size:14.5px;font-weight:800;color:var(--text);line-height:1.35">${g.title}</h4>
      
      ${isImage && g.imageUrl ? `
        <div style="border-radius:10px;overflow:hidden;height:120px;margin-bottom:10px;background:var(--box-bg);cursor:pointer;border:1px solid var(--border)" onclick="openLightbox('${g.imageUrl}')">
          <img src="${g.imageUrl}" style="width:100%;height:100%;object-fit:cover" loading="lazy" alt="${g.title}">
        </div>
      ` : fileLink ? `
        <div style="padding:10px;background:var(--box-bg);border-radius:10px;margin-bottom:10px;border:1px dashed var(--border);text-align:center">
          <div style="font-size:24px;margin-bottom:2px">📄</div>
          <div style="font-size:12px;font-weight:700;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${g.fileName || "Document File"}</div>
        </div>
      ` : ''}

      ${g.templateText ? `
        <div style="background:var(--box-bg);padding:8px 10px;border-radius:8px;font-size:11.5px;color:var(--text);border:1px dashed var(--border);max-height:65px;overflow-y:auto;white-space:pre-wrap;margin-bottom:10px;font-family:monospace;line-height:1.3">${g.templateText}</div>
      ` : ''}
    </div>

    <div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap">
      ${g.templateText ? `<button onclick="copyTemplateText('${encodeURIComponent(g.templateText)}',this)" style="flex:1;min-width:85px;padding:7px;border:1px solid var(--border);background:var(--card);color:var(--text);font-weight:800;font-size:11px;border-radius:8px;cursor:pointer">📋 Copy Text</button>` : ''}
      
      ${isImage && g.imageUrl ? `<button onclick="openLightbox('${g.imageUrl}')" style="flex:1;min-width:85px;padding:7px;border:1px solid var(--border);background:var(--card);color:var(--primary);font-weight:800;font-size:11px;border-radius:8px;cursor:pointer">🔍 View Photo</button>` : ''}
      
      ${!isImage && fileLink ? `<a href="${fileLink}" target="_blank" style="flex:1;min-width:85px;padding:7px;border:1px solid var(--border);background:var(--card);color:var(--primary);font-weight:800;font-size:11px;border-radius:8px;cursor:pointer;text-align:center;text-decoration:none">⬇️ Download</a>` : ''}
      
      ${window.isAdmin ? `
        <button onclick="openEditGuide('${safeId}')" style="padding:7px 9px;border:1px solid var(--border);background:var(--box-bg);color:var(--text);font-weight:800;font-size:11px;border-radius:8px;cursor:pointer" title="Edit Document">✏️ Edit</button>
        <button onclick="promptDeleteGuide('${safeId}')" style="padding:7px 9px;border:none;background:rgba(239,68,68,0.15);color:#ef4444;font-weight:800;font-size:11px;border-radius:8px;cursor:pointer" title="Delete Document">🗑️</button>
      ` : ''}
    </div>
  </div>`;
}

/**
 * Copies template text to clipboard
 */
function copyTemplateText(encodedText, btn) {
  const text = decodeURIComponent(encodedText);
  navigator.clipboard.writeText(text);
  const old = btn.textContent;
  btn.textContent = "✅ Copied!";
  setTimeout(() => btn.textContent = old, 1500);
}

/**
 * Lightbox modal control
 */
function openLightbox(url) {
  const modal = document.getElementById("imageLightboxModal");
  const img = document.getElementById("lightboxImg");
  const dload = document.getElementById("lightboxDownloadBtn");
  if (modal && img) {
    img.src = url;
    if (dload) dload.href = url;
    modal.classList.remove("hidden");
  }
}

function closeLightbox() {
  document.getElementById("imageLightboxModal")?.classList.add("hidden");
}

/**
 * Admin Upload Modal Controls
 */
function openAdminModal() {
  editingGuideId = null;
  const idField = document.getElementById("editingGuideId");
  if (idField) idField.value = "";
  document.getElementById("guideModalTitle").textContent = "📤 Upload Format or Referral Guide";
  document.getElementById("uploadSubmitBtn").textContent = "Publish Live";
  document.getElementById("guideUploadForm").reset();
  document.getElementById("guideDeptFormSelect").value = "All Departments";
  document.getElementById("guideCategorySelect").value = "Referral";
  document.getElementById("currentFileHint").style.display = "none";
  document.getElementById("adminGuideModal")?.classList.remove("hidden");
}

function openEditGuide(id) {
  const guide = clinicalGuidesData.find(g => String(g.id) === String(id));
  if (!guide) return alert("Guide not found");

  editingGuideId = id;
  document.getElementById("editingGuideId").value = id;
  document.getElementById("guideModalTitle").textContent = "✏️ Edit Guide";
  document.getElementById("uploadSubmitBtn").textContent = "Save Changes";

  document.getElementById("guideTitleInput").value = guide.title || "";
  document.getElementById("guideDeptFormSelect").value = guide.dept || "All Departments";
  document.getElementById("guideCategorySelect").value = normalizeGuideCategory(guide.category) || "Referral";
  document.getElementById("guideTemplateInput").value = guide.templateText || "";
  document.getElementById("adminPinInput").value = "";

  const hint = document.getElementById("currentFileHint");
  if (guide.fileName || guide.imageUrl) {
    hint.style.display = "block";
    hint.innerHTML = `Current file: <strong>${guide.fileName || "Image"}</strong><br><span style="font-size:11px">Leave empty to keep the existing file</span>`;
  } else {
    hint.style.display = "none";
  }

  document.getElementById("guideFileInput").value = "";
  document.getElementById("adminGuideModal")?.classList.remove("hidden");
}

function closeAdminModal() {
  document.getElementById("adminGuideModal")?.classList.add("hidden");
  editingGuideId = null;
}

/**
 * Admin Form Submission Handler
 */
async function submitGuideUpload(e) {
  e.preventDefault();
  const btn = document.getElementById("uploadSubmitBtn");
  btn.textContent = "Saving...";
  btn.disabled = true;

  const fileInput = document.getElementById("guideFileInput");
  let imageBytes = "", fileName = "", mimeType = "";

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    fileName = file.name;
    mimeType = file.type;
    imageBytes = await new Promise((res) => {
      const reader = new FileReader();
      reader.onload = (evt) => res(evt.target.result);
      reader.readAsDataURL(file);
    });
  }

  const isEdit = !!document.getElementById("editingGuideId").value;
  const payload = {
    action: isEdit ? "update" : "upload",
    pin: document.getElementById("adminPinInput").value,
    title: document.getElementById("guideTitleInput").value,
    dept: document.getElementById("guideDeptFormSelect").value,
    category: document.getElementById("guideCategorySelect").value,
    templateText: document.getElementById("guideTemplateInput").value,
    imageBytes, fileName, mimeType
  };

  if (isEdit) {
    payload.id = document.getElementById("editingGuideId").value;
  }

  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(payload)
    });
    const result = await res.json();
    if (result.status === "success") {
      alert(isEdit ? "Guide updated successfully!" : "Guide published!");
      closeAdminModal();
      document.getElementById("guideUploadForm").reset();
      fetchClinicalGuides();
    } else {
      alert("Error: " + result.message);
    }
  } catch (err) {
    alert("Network error");
  } finally {
    btn.textContent = isEdit ? "Save Changes" : "Publish Live";
    btn.disabled = false;
  }
}

/**
 * Admin Document Deletion Handler
 */
async function promptDeleteGuide(id) {
  const pin = prompt("Enter Admin PIN to delete:");
  if (!pin) return;
  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({ action: "delete", id, pin })
    });
    const result = await res.json();
    if (result.status === "success") {
      alert("Deleted.");
      fetchClinicalGuides();
    } else {
      alert("Error: " + result.message);
    }
  } catch (e) {
    alert("Failed to delete.");
  }
}
