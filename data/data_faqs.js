const faqData = [
  {
    id: "nsi",
    category: "Emergency & Critical Workflows",
    tags: ["nsi", "needle stick", "hiv", "tridot", "pep", "casualty", "art"],
    urgent: true,
    question: "What is the immediate protocol for a Needle-Stick Injury (NSI)?",
    answer: `<ol>
      <li><strong>Immediate Care:</strong> Wash the site thoroughly with soap and running water immediately.</li>
      <li><strong>Report:</strong> Report the incident directly to the on-duty Casualty CMO.</li>
      <li><strong>Sample Collection:</strong> Collect 3–5 mL venous blood in Red top vacutainers from <em>both</em> the Source Patient and Yourself.</li>
      <li><strong>Testing:</strong> Take the samples to <strong>Window 3</strong> (Emergency Lab), obtain the Tridot form, and request urgent fast-track processing.</li>
      <li><strong>PEP Evaluation:</strong> Proceed to the <strong>ART Centre (OPD Block, 6th Floor, Room 634)</strong> immediately for Post-Exposure Prophylaxis (PEP) initiation.</li>
      <li><strong>Serology:</strong> Verify Hepatitis B antibody (Anti-HBs) titre status and Tetanus Toxoid (TT) immunization.</li>
    </ol>
    <div class="pitfall"><strong>Common pitfall:</strong> Do not squeeze, suck, or scrub the wound site under pressure, as this can increase tissue trauma and exposure risk.</div>`
  },
  {
    id: "med_em_icu",
    category: "Emergency & Critical Workflows",
    tags: ["emergency", "icu", "medicine", "location", "gate 4"],
    urgent: true,
    question: "Where is Medicine Emergency and ICU located?",
    answer: `<p>Location details for acute emergency admissions:</p>
    <ul>
      <li><strong>Medicine Emergency:</strong> 3rd Floor, Gate 4 area.</li>
      <li><strong>Intensive Care Unit (ICU):</strong> 4th Floor, Main Hospital Block.</li>
    </ul>
    <div class="pitfall"><strong>Common pitfall:</strong> Gate 4 is the primary triage and emergency entrance; shifting unstable patients through OPD elevators will cause critical delays.</div>`
  },
  {
    id: "urgent_ct",
    category: "Emergency & Critical Workflows",
    tags: ["ct", "radiology", "imaging", "emergency ct", "sr"],
    urgent: true,
    question: "How to arrange an urgent / emergency CT scan for ward patients?",
    answer: `<ol>
      <li>Prepare the dedicated Radiology Requisition Form with complete clinical vitals and specific diagnostic rule-out suspicion.</li>
      <li>Take the requisition to the <strong>1st Floor Emergency Block</strong> (Emergency CT / CT Angio console).</li>
      <li>Get the scan authorized and signed directly by the on-duty Emergency Senior Resident (EM SR).</li>
      <li>Coordinate patient transfer with ward nursing staff and the emergency CT console technician.</li>
    </ol>
    <div class="pitfall"><strong>Common pitfall:</strong> Emergency CT technicians will not accept unverified routine forms or vague requests lacking EM SR authorization.</div>`
  },
  {
    id: "abg",
    category: "Emergency & Critical Workflows",
    tags: ["abg", "vbg", "blood gas", "window 2", "emergency", "heparin"],
    urgent: true,
    question: "Where are Arterial Blood Gas (ABG) samples processed?",
    answer: `<ol>
      <li>Collect the arterial sample using a pre-heparinized syringe, ensuring all air bubbles are expelled immediately.</li>
      <li>Send the sample to <strong>Window 2 (Biochemistry)</strong>, which operates 24x7 for emergency blood gases.</li>
      <li>Transport on an ice pack if there is any transit delay to prevent metabolic alteration.</li>
      <li>Collect the printed report hand-to-hand on the spot from the technician.</li>
    </ol>
    <div class="pitfall"><strong>Common pitfall:</strong> Leaving room air inside the syringe or delaying transit without ice will falsely alter $pO_2$ and $pCO_2$ values.</div>`
  },
  {
    id: "neonatal_bgcm",
    category: "Blood Bank & Transfusion",
    tags: ["blood bank", "bgcm", "cross match", "neonate", "pediatrics", "mother sample"],
    urgent: true,
    question: "What is the mandatory rule for newborn / pediatric blood cross-matching?",
    answer: `<ol>
      <li>Fill out the standard BGCM Form alongside the official Blood Release Card.</li>
      <li>Collect the newborn's blood sample in an EDTA (Purple) vial.</li>
      <li><strong>Mandatory Step:</strong> Collect and send the <strong>mother's venous blood sample</strong> along with the baby's sample to the Blood Bank.</li>
      <li>Before leaving the Blood Bank counter, double-check that the patient name, CR number, ABO/Rh group, and unit expiry date match the release card exactly.</li>
    </ol>
    <div class="pitfall"><strong>Common pitfall:</strong> Blood Bank will outright reject neonatal cross-match requisitions if the mother's venous sample is missing.</div>`
  },
  {
    id: "dct_ict",
    category: "Blood Bank & Transfusion",
    tags: ["dct", "ict", "coombs", "blood bank", "hemolysis"],
    urgent: false,
    question: "Where is Direct Coombs Test (DCT) and Indirect Coombs Test (ICT) done?",
    answer: `<ol>
      <li><strong>Sample Requirements:</strong>
        <ul>
          <li><strong>Direct Coombs Test (DCT):</strong> 2–3 mL whole blood in Purple (EDTA) vial.</li>
          <li><strong>Indirect Coombs Test (ICT):</strong> 3–5 mL blood in Plain Red top vacutainer.</li>
        </ul>
      </li>
      <li>Submit the samples directly to the <strong>Blood Bank Counter</strong> (accessible 24x7).</li>
      <li>Collect the verified physical report from the Blood Bank counter.</li>
    </ol>
    <div class="pitfall"><strong>Common pitfall:</strong> Submitting a plain red vial for DCT or an EDTA vial for ICT will result in sample rejection.</div>`
  },
  {
    id: "college_hemogram_hplc",
    category: "Special Forms & Laboratory Routing",
    tags: ["hemogram", "hplc", "thalassemia", "pathology", "room 76", "room 90"],
    urgent: false,
    question: "Where do College Hemogram and HPLC samples go, and which form is needed?",
    answer: `<ol>
      <li>Obtain the dedicated, pink/printed <strong>College Hemogram Form</strong> (standard hospital requisition slips are not accepted).</li>
      <li>Write down a concise clinical history, provisional diagnosis, and past transfusion records on the form.</li>
      <li>Collect 3 mL whole blood in an EDTA (Purple) vial.</li>
      <li>Submit the sample and form to <strong>Room 76 (Pathology Department, College Building)</strong>.</li>
      <li>HPLC testing for hemoglobinopathies can be requested on the same College Hemogram form.</li>
      <li>Collect completed reports from <strong>Room 96 (Dispatch Counter)</strong> or Room 90.</li>
    </ol>
    <div class="pitfall"><strong>Common pitfall:</strong> Sending HPLC on routine white hospital slips will lead to rejection; only the official College Hemogram form is processed.</div>`
  },
  {
    id: "myeloma_spep",
    category: "Special Forms & Laboratory Routing",
    tags: ["spep", "upep", "myeloma", "electrophoresis", "bence jones", "room 205"],
    urgent: false,
    question: "Where are Multiple Myeloma workup samples (SPEP, UPEP, Free Light Chains) sent?",
    answer: `<ol>
      <li>Obtain the dedicated Protein Electrophoresis Requisition Form from the Pathology department.</li>
      <li>Collect 3–5 mL clotted blood in a Plain Red top vial (for Serum Protein Electrophoresis & Light Chains).</li>
      <li>Collect a fresh early morning urine sample in a sterile container (for UPEP & Bence-Jones proteins).</li>
      <li>Submit both specimens to <strong>Room 205 (2nd Floor, Pathology Block, College Building)</strong>.</li>
    </ol>
    <div class="pitfall"><strong>Common pitfall:</strong> Do not use hemolyzed samples or random late-evening urine for light chain electrophoresis.</div>`
  },
    {
    id: "h1n1_pcr",
    category: "Special Forms & Laboratory Routing",
    tags: ["h1n1", "swine flu", "rt-pcr", "swab", "virology", "room 278", "vtm"],
    urgent: true,
    question: "Where and how to get H1N1 (Swine Flu) RT-PCR testing done?",
    answer: `<ol>
      <li><strong>Doctor's Slip:</strong> Write a requisition slip mentioning <em>"H1N1 Swab"</em> along with quantity, signed and stamped with unit seal.</li>
      <li><strong>Form & Kit Collection:</strong> Send the patient attendant with this slip to <strong>Room 278 (College Building)</strong> to collect the specialized H1N1 form and VTM transport swab.</li>
      <li><strong>Online Entry:</strong> Generate the mandatory portal/app patient ID as per protocol and fill out the physical form.</li>
      <li><strong>Sampling & Submission:</strong> Take the nasopharyngeal/oropharyngeal swab bedside during morning hours and return it immediately under cold chain to Room 278.</li>
      <li><strong>Reports:</strong> Same-day evening reports by ~4:00 PM on weekdays (by ~1:00 PM on Saturdays).</li>
    </ol>
    <div class="pitfall"><strong>Common pitfall:</strong> Do not send the patient attendant to Room 278 without a signed and stamped requisition slip specifying the swab quantity.</div>`
  },

  {
    id: "ucs_bcs",
    category: "Special Forms & Laboratory Routing",
    tags: ["culture", "ucs", "bcs", "microbiology", "room 34", "pus culture"],
    urgent: false,
    question: "Where are Urine Culture (UCS) and Blood Culture (BCS) sent and collected?",
    answer: `<ol>
      <li><strong>Sample Collection:</strong>
        <ul>
          <li><strong>Blood Culture (BCS):</strong> Inoculate into blood culture broth bottles under strict aseptic precautions.</li>
          <li><strong>Urine Culture (UCS):</strong> Midstream clean-catch urine in a sterile universal container.</li>
          <li><strong>Pus / Fluids:</strong> Paired sterile swabs or aspirated fluid in sterile containers.</li>
        </ul>
      </li>
      <li>Submit the specimens directly to <strong>Room 34 (Microbiology Department)</strong>.</li>
      <li>Collect culture and antibiotic susceptibility reports from <strong>Room 34 or Room 30 Dispatch Counter</strong> after 48–72 hours.</li>
    </ol>
    <div class="pitfall"><strong>Common pitfall:</strong> Drawing blood cultures through existing cannula lines causes skin flora contamination; always take fresh venipuncture draws.</div>`
  },
  {
    id: "urm_routing",
    category: "Special Forms & Laboratory Routing",
    tags: ["urm", "urine routine", "window 1", "window 5", "gate 4"],
    urgent: false,
    question: "Where do OPD and Routine Urine (URM) tests go?",
    answer: `<p>Routing depends on patient admission status:</p>
    <ul>
      <li><strong>Indoor Ward Patients:</strong> Submit clean-catch urine in a speci-can to <strong>Window 1 (Pathology)</strong>.</li>
      <li><strong>OPD Patients:</strong> Direct to <strong>Window 5, Gate 4</strong> (located outside near Jan Aushadhi) for dedicated OPD sample collection and rapid counter reporting.</li>
    </ul>
    <div class="pitfall"><strong>Common pitfall:</strong> Sending OPD patients to the indoor Pathology counter (Window 1) causes long delays and redirects.</div>`
  },
  {
    id: "usg_fnac",
    category: "Radiology & Super-Specialty Navigation",
    tags: ["usg fnac", "biopsy", "radiology", "room 133", "intervention"],
    urgent: false,
    question: "Where is USG-guided FNAC and interventional biopsy scheduled?",
    answer: `<ol>
      <li>Obtain the specialized Interventional Radiology requisition form.</li>
      <li>Clearly state the specific target organ and differential diagnosis to rule out (e.g., <em>"R/O Liver Abscess"</em> or <em>"R/O Malignant Lymphadenopathy"</em>).</li>
      <li>Submit the form and take appointment in <strong>Room 133 (Radiology Department)</strong>.</li>
    </ol>
    <div class="pitfall"><strong>Common pitfall:</strong> Requisitions with vague clinical indications like "USG FNAC for pain" are rejected by the interventional console.</div>`
  },
  {
    id: "gbp_echo_fasttrack",
    category: "Radiology & Super-Specialty Navigation",
    tags: ["echo", "echocardiography", "gb pant", "cardiology", "cath lab"],
    urgent: true,
    question: "How to schedule an early / urgent 2D-Echocardiography at GB Pant Hospital?",
    answer: `<ol>
      <li><strong>Routine Echo:</strong> Take the standard referral form to <strong>Block C (Cardiology, GB Pant)</strong> to obtain routine elective dates.</li>
      <li><strong>Fast-Track / Urgent Echo:</strong> If an inpatient requires a prioritized or same-day echo (e.g., pre-op cardiac clearance or active carditis), present the clinical case directly to the Cardiology fellows/consultants at:
        <ul>
          <li><strong>D-Block, 6th Floor Cath Lab</strong></li>
          <li><strong>C-Block, 2nd Floor Cath Lab</strong></li>
        </ul>
      </li>
    </ol>
    <div class="pitfall"><strong>Common pitfall:</strong> Dropping forms at the routine counter without consulting the Cath Lab fellows will result in standard multi-week waiting dates.</div>`
  },
  {
    id: "mrd_retrieval",
    category: "Radiology & Super-Specialty Navigation",
    tags: ["mrd", "records", "pac sheet", "old files", "discharge"],
    urgent: false,
    question: "Where is the Medical Records Department (MRD) located for retrieving old files / PAC records?",
    answer: `<ol>
      <li>Locate the <strong>Medical Records Department (MRD)</strong> in the <strong>OPD Building (Ground / Lower Floor Area)</strong>.</li>
      <li>Provide the patient's previous CR number, admission date, and discharge unit details.</li>
      <li>MRD handles retrieval of archived inpatient dossiers, baseline PAC assessment sheets, MLC records, and old discharge summaries.</li>
    </ol>
    <div class="pitfall"><strong>Common pitfall:</strong> If a primary PAC sheet is missing from a re-admitted patient's bedside chart, search MRD records before ordering repeat workups.</div>`
  }
];
