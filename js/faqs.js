/**
 * MAMC-LNH Intern Portal — FAQs Module
 * File: js/faqs.js
 */

let extraFaqs = [];

/**
 * Loads additional Firestore dynamic FAQs
 */
async function loadExtraFaqs() {
  try {
    const snap = await db.collection('extraFaqs').get();
    extraFaqs = snap.docs.map(d => d.data());
  } catch (e) {
    console.warn("Failed to load extra FAQs from Firestore", e);
  }
}

/**
 * Highlights matching search terms in FAQ titles
 */
function highlightText(text, query) {
  if (!query) return text;
  const esc = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(`(${esc})`, 'gi'), '<mark class="faq-highlight">$1</mark>');
}

/**
 * Returns icon corresponding to FAQ category
 */
function getCategoryIcon(cat) {
  if (cat.includes('Emergency')) return '🚨';
  if (cat.includes('Special')) return '📄';
  if (cat.includes('Blood')) return '🩸';
  if (cat.includes('Radiology')) return '📷';
  return '📁';
}

/**
 * Main Render Function for FAQ Tab
 */
function renderFaqs() {
  const query = (document.getElementById('faqSearchInput')?.value || '').toLowerCase().trim();
  const container = document.getElementById('faqResults');
  const countEl = document.getElementById('faqMatchCount');
  if (!container) return;

  let base = (typeof faqData !== 'undefined' && faqData) ? faqData : [];
  const allFaqs = [...base, ...extraFaqs];
  if (allFaqs.length === 0) {
    container.innerHTML = '<div class="faq-empty"><p>No FAQ data loaded yet.</p></div>';
    return;
  }

  let filtered = allFaqs;
  if (query) {
    filtered = allFaqs.filter(item => {
      const s = (item.question + ' ' + (item.tags || []).join(' ') + ' ' + item.category + ' ' + (item.answer || '').replace(/<[^>]+>/g, ' ')).toLowerCase();
      return s.includes(query);
    });
  }

  if (countEl) countEl.textContent = query ? `${filtered.length} result${filtered.length !== 1 ? 's' : ''}` : `${allFaqs.length} SOPs`;

  if (filtered.length === 0) {
    container.innerHTML = `<div class="faq-empty"><p>No SOP found for “<strong>${query}</strong>”.</p></div>`;
    return;
  }

  const groups = {};
  filtered.forEach(item => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
  });

  const preferredOrder = ["Emergency & Critical Workflows", "Blood Bank & Transfusion", "Special Forms & Laboratory Routing", "Radiology & Super-Specialty Navigation"];
  const orderedCategories = [...preferredOrder.filter(c => groups[c]), ...Object.keys(groups).filter(c => !preferredOrder.includes(c))];

  let html = '';
  let firstOpen = false;

  orderedCategories.forEach(cat => {
    html += `<div class="faq-category"><div class="faq-category-header"><span>${getCategoryIcon(cat)}</span><span>${cat}</span><span class="badge badge-sub" style="margin-left:auto;font-size:11px">${groups[cat].length}</span></div>`;
    groups[cat].forEach(item => {
      const open = query && !firstOpen;
      if (open) firstOpen = true;
      html += `<details class="faq-item" ${open ? 'open' : ''}><summary><span style="flex:1">${item.urgent ? '<span class="badge badge-urgent" style="margin-right:6px">Urgent</span>' : ''}${highlightText(item.question, query)}</span></summary><div class="faq-answer">${item.answer || ''}<div class="faq-actions"><button onclick="copyFaqAnswer('${item.id || ''}',this)">📋 Copy Answer</button></div></div></details>`;
    });
    html += '</div>';
  });

  container.innerHTML = html;
}

/**
 * Expand / Collapse Controls
 */
function expandAllFaqs() { 
  document.querySelectorAll('#faqResults details.faq-item').forEach(d => d.open = true); 
}

function collapseAllFaqs() { 
  document.querySelectorAll('#faqResults details.faq-item').forEach(d => d.open = false); 
}

/**
 * Copies FAQ answer text
 */
function copyFaqAnswer(id, btn) {
  const all = [...(typeof faqData !== 'undefined' ? faqData : []), ...extraFaqs];
  const item = all.find(f => f.id === id);
  if (!item) return;
  const temp = document.createElement('div');
  temp.innerHTML = item.answer || '';
  navigator.clipboard.writeText(`${item.question}\n\n${(temp.textContent || '').trim()}`);
  const old = btn.textContent;
  btn.textContent = '✅ Copied!';
  setTimeout(() => btn.textContent = old, 1500);
}
