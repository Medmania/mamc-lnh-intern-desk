// ==========================================
// USER GUIDE & HELP SYSTEM CONFIGURATION
// ==========================================

const USER_GUIDE_CONFIG = {
  title: "LNJP LabHub • Comprehensive User Guide",
  steps: [
    {
      icon: "fa-bolt",
      heading: "1. Optimized Medical Workflow",
      text: "Designed specifically for clinical staff to locate, tag, and share laboratory register records seamlessly without manual logging or pen-and-paper tracking."
    },
    {
      icon: "fa-magnifying-glass",
      heading: "2. Precision Search & Instant Filtering",
      text: "Filter records by Window (Window 1, Window 2), Register Category (CBC Emergency, CBC Routine, BUSE/LFT/KFT, PT/INR), Collection Date, or direct serial ranges (e.g., 1-300)."
    },
    {
      icon: "fa-camera",
      heading: "3. Fast HD Batch Uploads",
      text: "Upload register pages via camera or gallery. High-resolution HD compression maintains pin-sharp clarity when zooming in on numeric values while maximizing upload speed."
    },
    {
      icon: "fa-user-pen",
      heading: "4. In-Viewer Patient Tagging",
      text: "Open any register record via 'View Report Records'. Check 'Select this page' on a relevant page to instantly unlock a live note bar where you can type patient names or serial numbers directly."
    },
    {
      icon: "fa-brands fa-whatsapp",
      heading: "5. Smart WhatsApp Exporting",
      text: "Tap 'Share Photos' to send selected register pages with auto-formatted patient and category captions (e.g., 'Manu - PT / INR' or 'Dilshad - CBC Emergency')."
    },
    {
      icon: "fa-mobile-screen-button",
      heading: "6. Smartphone-Optimized Navigation",
      text: "Supports full pinch-to-zoom, swipe gestures, and full integration with your smartphone's physical back button to close viewers smoothly without leaving the app."
    }
  ]
};

function initUserGuideSystem() {
  const guideModal = document.createElement('div');
  guideModal.className = 'modal';
  guideModal.id = 'guideModal';
  
  let stepsHTML = USER_GUIDE_CONFIG.steps.map(step => `
    <div style="display:flex;gap:12px;margin-bottom:14px;align-items:flex-start;">
      <div style="background:var(--primary-light);color:var(--primary);padding:10px;border-radius:10px;font-size:1.1rem;flex-shrink:0;">
        <i class="fa-solid ${step.icon}"></i>
      </div>
      <div>
        <h4 style="font-size:14px;font-weight:700;color:var(--text-main);margin-bottom:2px;">${step.heading}</h4>
        <p style="font-size:12px;color:var(--text-muted);line-height:1.4;">${step.text}</p>
      </div>
    </div>
  `).join('');

  guideModal.innerHTML = `
    <div class="card" style="width:90%;max-width:480px;position:relative;max-height:85vh;overflow-y:auto;">
      <button class="tool-btn" style="position:absolute;top:15px;right:15px;color:var(--text-main);" onclick="closeGuideModal()"><i class="fa-solid fa-xmark"></i></button>
      <h3 style="color:var(--primary);margin-bottom:18px;display:flex;align-items:center;gap:8px;">
        <i class="fa-solid fa-circle-info"></i> ${USER_GUIDE_CONFIG.title}
      </h3>
      ${stepsHTML}
      <button class="btn-submit" onclick="closeGuideModal()" style="margin-top:10px;"><i class="fa-solid fa-check"></i> Got It</button>
    </div>
  `;

  document.body.appendChild(guideModal);
}

function openGuideModal() {
  const el = document.getElementById('guideModal');
  if (el) {
    el.classList.add('active');
    if (window.history.state?.modal !== 'guideModal') {
      window.history.pushState({ modal: 'guideModal' }, '');
    }
  }
}

function closeGuideModal() {
  const el = document.getElementById('guideModal');
  if (el) el.classList.remove('active');
}

window.addEventListener('DOMContentLoaded', () => {
  initUserGuideSystem();
});
