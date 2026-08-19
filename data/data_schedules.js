const deptSchedules = [
  // --- MAIDS DENTAL HOSPITAL OPD SCHEDULE ---
  {
    id: "maids_opd",
    name: "MAIDS Dental OPD Schedule (Reg: Mon-Sat 08:30 AM - 10:30 AM | Ground Floor)",
    units: [
      { title: "Oral Medicine and Radiology <span style='font-weight:normal;'>(Dr. Sunita Gupta)</span>", days: "Mon to Sat (09:00 AM - 01:00 PM)", location: "Ground Floor" },
      { title: "Oral and Maxillofacial Surgery <span style='font-weight:normal;'>(Dr. Sujata Mohanty)</span>", days: "Mon to Sat (09:00 AM - 01:00 PM)", location: "1st Floor" },
      { title: "Prosthodontics <span style='font-weight:normal;'>(Dr. Rekha Gupta)</span>", days: "Mon to Sat (09:00 AM - 01:00 PM)", location: "2nd Floor" },
      { title: "Conservative Dentistry and Endodontics <span style='font-weight:normal;'>(Dr. Ruchika Roongta Nawal)</span>", days: "Mon to Sat (09:00 AM - 01:00 PM)", location: "3rd Floor" },
      { title: "Orthodontics <span style='font-weight:normal;'>(Dr. Priyank Rai)</span>", days: "Mon to Sat (09:00 AM - 01:00 PM)", location: "4th Floor" },
      { title: "Pediatric & Preventive Dentistry <span style='font-weight:normal;'>(Dr. Mridula Goswami)</span>", days: "Mon to Sat (09:00 AM - 01:00 PM)", location: "5th Floor" },
      { title: "Periodontology <span style='font-weight:normal;'>(Dr. Arundeep Kaur)</span>", days: "Mon to Sat (09:00 AM - 01:00 PM)", location: "6th Floor" },
      { title: "Oral Pathology & Microbiology <span style='font-weight:normal;'>(Dr. Aadithya B Urs)</span>", days: "Mon to Sat (09:00 AM - 01:00 PM)", location: "7th Floor" },
      { title: "Public Health Dentistry <span style='font-weight:normal;'>(Dr. Vikrant Ranjan Mohanty)</span>", days: "Mon to Sat (09:00 AM - 01:00 PM)", location: "5th Floor" }
    ]
  },

  // --- GB PANT HOSPITAL OPDs ---
  {
    id: "gbp_cardio",
    name: "Cardiology OPD & Special Clinics (Rooms 431, 433, 434, 435)",
    units: [
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Jamal Yusuf)</span>", days: "Mon & Thu", location: "Room 431 & 433" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Sumod Kurian)</span>", days: "Tue & Fri", location: "Room 431" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Vimal Mehta)</span>", days: "Wed & Sat", location: "Room 431" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Subrat Kumar Muduli)</span>", days: "Tue & Fri", location: "Room 433" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Sanjeev Kathuria)</span>", days: "Wed & Sat", location: "Room 433" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Ankur Gautam)</span>", days: "Thursday", location: "Room 433" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Vishal Batra)</span>", days: "Mon & Thu", location: "Room 434" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Ankit Bansal)</span>", days: "Tue & Fri", location: "Room 434" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Safal)</span>", days: "Wed & Sat", location: "Room 434" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Girish M.P.)</span>", days: "Mon & Thu", location: "Room 435" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Arima Nigam)</span>", days: "Tue & Fri", location: "Room 435" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Mohit D. Gupta)</span>", days: "Wed & Sat", location: "Room 435" },
      { title: "Pacemaker Clinic <span style='font-weight:normal;'>(Dr. Ankit Bansal / Dr. Subrat Muduli)</span>", days: "Tuesday", location: "Room 431" },
      { title: "Pediatric Cardiology Clinic <span style='font-weight:normal;'>(Dr. Sumod Kurian)</span>", days: "Friday", location: "Room 431" },
      { title: "Pacemaker Clinic <span style='font-weight:normal;'>(Dr. Sanjeev Kathuria)</span>", days: "Tuesday", location: "Room 433" },
      { title: "Pediatric Cardiology Clinic <span style='font-weight:normal;'>(Dr. Safal)</span>", days: "Friday", location: "Room 433" },
      { title: "Pediatric Cardiology Clinic <span style='font-weight:normal;'>(Dr. Arima Nigam)</span>", days: "Friday", location: "Room 435" }
    ]
  },
  {
    id: "gbp_ctvs",
    name: "CTVS OPD & Special Clinics (Rooms 409-410, 412)",
    units: [
      { title: "CTVS OPD <span style='font-weight:normal;'>(Dr. Subodh Satyarthi)</span>", days: "Mon & Fri", location: "Rooms 409-410" },
      { title: "CTVS OPD <span style='font-weight:normal;'>(Dr. Vithal M. Betigeri)</span>", days: "Tue & Wed", location: "Rooms 409-410" },
      { title: "CTVS OPD <span style='font-weight:normal;'>(Dr. Harpreet Singh)</span>", days: "Thu & Sat", location: "Rooms 409-410" },
      { title: "CTVS OPD <span style='font-weight:normal;'>(Dr. Harpreet Singh)</span>", days: "Mon & Thu", location: "Room 412" },
      { title: "CTVS OPD <span style='font-weight:normal;'>(Dr. Saket Agarwal)</span>", days: "Tue & Fri", location: "Room 412" },
      { title: "CTVS OPD <span style='font-weight:normal;'>(Dr. Karthik P.)</span>", days: "Wednesday", location: "Room 412" },
      { title: "CTVS OPD <span style='font-weight:normal;'>(Dr. Sayyed Ehtesham Hussain Naqvi)</span>", days: "Saturday", location: "Room 412" },
      { title: "Aorta Clinic (08:00 AM - 11:00 AM)", days: "Friday", location: "Room 410" },
      { title: "Heart Failure Clinic (08:00 AM - 11:00 AM)", days: "Saturday", location: "Room 410" }
    ]
  },
  {
    id: "gbp_gastro",
    name: "Gastroenterology OPD & Liver Clinic (Rooms 238, 239, 240)",
    units: [
      { title: "Gastroenterology OPD <span style='font-weight:normal;'>(Dr. Ujjwal Sonika)</span>", days: "Mon & Thu", location: "Rooms 238, 239, 240" },
      { title: "Gastroenterology OPD <span style='font-weight:normal;'>(Dr. Sanjeev Sachdeva)</span>", days: "Tue & Fri", location: "Rooms 238, 239, 240" },
      { title: "Gastroenterology OPD <span style='font-weight:normal;'>(Dr. Siddharth Srivastava)</span>", days: "Wed & Sat", location: "Rooms 238, 239, 240" },
      { title: "Gastroenterology OPD <span style='font-weight:normal;'>(Dr. Ajay Kumar)</span>", days: "Tuesday", location: "Rooms 238, 239, 240" },
      { title: "Gastroenterology OPD <span style='font-weight:normal;'>(Dr. Ashok Dalal)</span>", days: "Wed & Sat", location: "Rooms 238, 239, 240" },
      { title: "Liver Special Clinic <span style='font-weight:normal;'>(Dr. Ajay Kumar / Dr. Ujjwal Sonika)</span>", days: "Tuesday", location: "Room 240" }
    ]
  },
  {
    id: "gbp_gisurg",
    name: "GI Surgery OPD & Specialty Clinics (Rooms 211, 212, 214, 215)",
    units: [
      { title: "GI Surgery OPD <span style='font-weight:normal;'>(Dr. H.H. Nag)</span>", days: "Mon, Wed, Fri", location: "Rooms 211-212" },
      { title: "GI Surgery OPD <span style='font-weight:normal;'>(Dr. S.S. Saluja)</span>", days: "Tue, Thu, Sat", location: "Rooms 211-212" },
      { title: "Minimally Invasive Surgery Clinic <span style='font-weight:normal;'>(Dr. H.H. Nag)</span>", days: "Monday & Saturday", location: "Rooms 214-215" },
      { title: "Hepatobiliary Cancer & Pancreas Surgery Clinic <span style='font-weight:normal;'>(Dr. S.S. Saluja)</span>", days: "Tuesday", location: "Rooms 214-215" },
      { title: "Portal Hypertension Clinic <span style='font-weight:normal;'>(Dr. S.S. Saluja)</span>", days: "Thursday", location: "Rooms 214-215" },
      { title: "Liver Transplant Clinic <span style='font-weight:normal;'>(Dr. H.H. Nag)</span>", days: "Friday", location: "Rooms 214-215" }
    ]
  },
  {
    id: "gbp_neuro",
    name: "Neurology OPD & Special Clinics (Rooms 326, 327, 328)",
    units: [
      { title: "Neurology OPD <span style='font-weight:normal;'>(Dr. Saman Fatima)</span>", days: "Mon & Fri", location: "Room 326" },
      { title: "Neurology OPD <span style='font-weight:normal;'>(Dr. Agam Jain)</span>", days: "Tue & Sat", location: "Room 326" },
      { title: "Neurology OPD <span style='font-weight:normal;'>(Dr. Cankatika Choudhary)</span>", days: "Thu & Sat", location: "Room 326" },
      { title: "Neurology OPD <span style='font-weight:normal;'>(Dr. Sujata Roshan)</span>", days: "Tue & Thu", location: "Room 327" },
      { title: "Neurology OPD <span style='font-weight:normal;'>(Dr. Arun Koul)</span>", days: "Wed & Fri", location: "Room 327" },
      { title: "Neurology OPD <span style='font-weight:normal;'>(Dr. Swapan Gupta)</span>", days: "Mon & Wed", location: "Room 328" },
      { title: "Neurology OPD <span style='font-weight:normal;'>(Dr. Neera Chaudhary)</span>", days: "Tue & Thu", location: "Room 328" },
      { title: "Neuro-Immunology Clinic <span style='font-weight:normal;'>(Dr. Arun Koul / Dr. Saman Fatima)</span>", days: "Tuesday", location: "Room 327" },
      { title: "Stroke Clinic (01:00 PM - 02:00 PM) <span style='font-weight:normal;'>(Dr. Arun Koul)</span>", days: "Thursday", location: "Room 327" },
      { title: "Epilepsy Clinic (01:00 PM - 02:00 PM) <span style='font-weight:normal;'>(Dr. Swapan Gupta)</span>", days: "Monday", location: "Room 328" },
      { title: "Intractable Epilepsy Clinic <span style='font-weight:normal;'>(Dr. Swapan Gupta)</span>", days: "Tuesday", location: "Room 328" },
      { title: "MDC Movement Disorder Clinic (01:00 PM - 02:00 PM) <span style='font-weight:normal;'>(Dr. Sujata Roshan / Dr. Neera Chaudhary)</span>", days: "Wednesday", location: "Room 328" },
      { title: "Functional Neurological & Paediatric Neurology Clinic <span style='font-weight:normal;'>(Dr. Swapan Gupta / Dr. Cankatika)</span>", days: "Thursday", location: "Room 328" },
      { title: "Headache Clinic (10:00 AM) <span style='font-weight:normal;'>(Dr. Sujata Roshan / Dr. Agam Jain)</span>", days: "Friday", location: "Room 328" }
    ]
  },
  {
    id: "gbp_neurosurg",
    name: "Neurosurgery OPD (Rooms 309-310)",
    units: [
      { title: "Neurosurgery Unit NS-1 <span style='font-weight:normal;'>(Dr. Wajid Nazir)</span>", days: "Monday", location: "Rooms 309-310" },
      { title: "Neurosurgery Unit NS-2 <span style='font-weight:normal;'>(Dr. Anita Jagetia)</span>", days: "Tuesday", location: "Rooms 309-310" },
      { title: "Neurosurgery NS-1 Unit Head <span style='font-weight:normal;'>(Dr. Hukum Singh / Dr. Binita Dholakia)</span>", days: "Wednesday", location: "Rooms 309-310" },
      { title: "Neurosurgery OPD <span style='font-weight:normal;'>(Dr. G.D. Singhal)</span>", days: "Thursday", location: "Rooms 309-310" },
      { title: "Neurosurgery Unit NS-1 <span style='font-weight:normal;'>(Dr. Shaam Bodeliwala)</span>", days: "Friday", location: "Rooms 309-310" },
      { title: "Neurosurgery Unit NS-2 <span style='font-weight:normal;'>(Dr. Pragyan Sarma)</span>", days: "Saturday", location: "Rooms 309-310" }
    ]
  },
  {
    id: "gbp_psychiatry",
    name: "Psychiatry OPD & Special Clinics (Rooms 04A, 4, 6, 8, 15)",
    units: [
      { title: "Psychiatry Morning OPD <span style='font-weight:normal;'>(Dr. Mahima Malhotra)</span>", days: "Mon, Wed, Fri (09:00 AM)", location: "Room 4" },
      { title: "Psychiatry Morning OPD <span style='font-weight:normal;'>(Dr. S. Jena)</span>", days: "Tue, Thu, Sat (09:00 AM)", location: "Room 4" },
      { title: "Psychiatry OPD <span style='font-weight:normal;'>(Dr. P.S. Biswas)</span>", days: "Mon, Wed, Fri", location: "Room 6" },
      { title: "Psychiatry OPD <span style='font-weight:normal;'>(Dr. Anurag Jhangee)</span>", days: "Tue, Thu, Sat", location: "Room 6" },
      { title: "Psychiatry OPD <span style='font-weight:normal;'>(Dr. Arunlata Agarwal)</span>", days: "Mon, Wed, Fri", location: "Room 15" },
      { title: "Psychiatry OPD <span style='font-weight:normal;'>(Dr. Amandeep Goyal)</span>", days: "Tue, Thu, Sat", location: "Room 8" },
      { title: "Child Psychiatry Clinic <span style='font-weight:normal;'>(Dr. S. Jena / Dr. Anurag Jhangee / Dr. Amandeep Goyal)</span>", days: "Tuesday", location: "Room 04A" },
      { title: "De-addiction Clinic <span style='font-weight:normal;'>(Dr. P.S. Biswas / Dr. Mahima Malhotra)</span>", days: "Wednesday", location: "Room 6" }
    ]
  },
  {
    id: "gbp_pain",
    name: "Pain Clinic (Room 419)",
    units: [
      { title: "Pain Clinic <span style='font-weight:normal;'>(Dr. Monica S. Tandon)</span>", days: "Thursday", location: "Room 419" },
      { title: "Pain Clinic <span style='font-weight:normal;'>(Dr. Som Chandra)</span>", days: "Friday", location: "Room 419" }
    ]
  },

  // --- MAMC / LNJP MAIN OPDS & CLINICS ---
  {
    id: "medicine",
    name: "Medicine Morning OPD (09:00 AM - 01:00 PM)",
    units: [
      { title: 'Unit 1 <span style="font-weight: normal;">(Dr. Anurag Rohatgi)</span>', days: "🔹 <b>OPD:</b> Mon & Thu<br>🚨 <b>Em:</b> Monday", location: "<b>OPD</b> (Rooms 310, 311, 312, 313, 315)<br><b>Ward:</b> Ward 31" },
      { title: 'Unit 2 <span style="font-weight: normal;">(Dr. S Anuradha)</span>', days: "🔹 <b>OPD:</b> Tue & Fri<br>🚨 <b>Em:</b> Tuesday", location: "<b>OPD</b> (Rooms 310, 311, 312, 313, 315)<br><b>Ward:</b> Ward 29" },
      { title: 'Unit 3 <span style="font-weight: normal;">(Dr. Sunita Agarwal)</span>', days: "🔹 <b>OPD:</b> Wed & Sat<br>🚨 <b>Eme:</b> Wednesday", location: "<b>OPD</b> (Rooms 310, 311, 312, 313, 315)<br><b>Ward:</b> Ward 32" },
      { title: 'Unit 4 <span style="font-weight: normal;">(Dr. Sandeep Garg)</span>', days: "🔹 <b>OPD:</b> Mon & Thu<br>🚨 <b>Em:</b> Thursday", location: "<b>OPD</b> (Rooms 316, 322, 323, 324, 325)<br><b>Ward:</b> Ward 28" },
      { title: 'Unit 5 <span style="font-weight: normal;">(Dr. Sanjay Pandit)</span>', days: "🔹 <b>OPD:</b> Tue & Fri<br>🚨 <b>Em:</b> Friday", location: "<b>OPD</b> (Rooms 316, 322, 323, 324, 325)<br><b>Ward:</b> Ward 30" },
      { title: 'Unit 6 <span style="font-weight: normal;">(Dr. Sumeet Singla)</span>', days: "🔹 <b>OPD:</b> Wed & Sat<br>🚨 <b>Em:</b> Saturday", location: "<b>OPD</b> (Rooms 316, 322, 323, 324, 325)<br><b>Ward:</b> Ward 27" }
    ]
  },
  {
    id: "ophtha",
    name: "Ophthalmology OPD, OT & Round Schedule (Guru Nanak Eye Centre)",
    units: [
      { title: 'Unit 1A <span style="font-weight: normal;">(Dr. Paromita Dutta, Dr. Meenakshi Wadhwani)</span>', days: "🔹 <b>OPD:</b> Mon & Thu<br>🔴 <b>OT:</b> Wed & Sat<br>🟡 <b>Round:</b> Tue & Fri", location: "GNEC OPD (Rooms 06, 07, 19, 20, 21)" },
      { title: 'Unit 1B <span style="font-weight: normal;">(Dr. Parul Jain, Dr. Siddharth Madan)</span>', days: "🔹 <b>OPD:</b> Mon & Thu<br>🔴 <b>OT:</b> Wed & Sat<br>🟡 <b>Round:</b> Tue & Fri", location: "GNEC OPD (Rooms 10, 12, 16, 17, 18)" },
      { title: 'Unit 2A <span style="font-weight: normal;">(Dr. Kirti Singh, Dr. Annu Joon, Dr. Arshi Singh)</span>', days: "🔹 <b>OPD:</b> Tue & Fri<br>🔴 <b>OT:</b> Mon & Thu<br>🟡 <b>Round:</b> Wed & Sat", location: "GNEC OPD (Rooms 06, 07, 19, 20, 21)" },
      { title: 'Unit 2B <span style="font-weight: normal;">(Dr. Punita K. Sodhi, Dr. Aastha Singh)</span>', days: "🔹 <b>OPD:</b> Tue & Fri<br>🔴 <b>OT:</b> Mon & Thu<br>🟡 <b>Round:</b> Wed & Sat", location: "GNEC OPD (Rooms 10, 12, 16, 17, 18)" },
      { title: 'Unit 3A <span style="font-weight: normal;">(Dr. Meenakshi Thakar, Dr. Bhumika Sharma, Dr. Isha Sharma)</span>', days: "🔹 <b>OPD:</b> Wed & Sat<br>🔴 <b>OT:</b> Tue & Fri<br>🟡 <b>Round:</b> Mon & Thu", location: "GNEC OPD (Rooms 06, 07, 19, 20, 21)" },
      { title: 'Unit 3B <span style="font-weight: normal;">(Dr. Subhash C. Dadeya, Dr. Ishita Bajaj, Dr. Vaishali Tomar)</span>', days: "🔹 <b>OPD:</b> Wed & Sat<br>🔴 <b>OT:</b> Tue & Fri<br>🟡 <b>Round:</b> Mon & Thu", location: "GNEC OPD (Rooms 10, 12, 16, 17, 18)" }
    ]
  },
  {
    id: "clinic_ophtha",
    name: "Ophthalmology Special Day-wise Clinics (Guru Nanak Eye Centre)",
    units: [
      { title: 'Monday Special Clinics', days: '🔹 <b>Retina Clinic-2:</b> Dr. Meenakshi Thakar <span style="font-weight: normal;">(Rooms 104, 107, 108)</span><br>🔹 <b>Old Squint Clinic:</b> Dr. Subhash Dadeya <span style="font-weight: normal;">(Room 207)</span><br>🔹 <b>POC (Paediatric Ophtha):</b> Dr. Siddharth Madan <span style="font-weight: normal;">(Room 102)</span>', location: "GNEC Rooms 102, 104, 107, 108, 207" },
      { title: 'Tuesday Special Clinics', days: '🔹 <b>Contact Lens Clinic:</b> Dr. Parul Jain <span style="font-weight: normal;">(Room 204)</span><br>🔹 <b>Oculoplasty Clinic:</b> Dr. Meenakshi Wadhwani <span style="font-weight: normal;">(Rooms 207, 208)</span><br>🔹 <b>POC + ROP Clinic:</b> Dr. Siddharth Madan <span style="font-weight: normal;">(Room 102)</span>', location: "GNEC Rooms 102, 204, 207, 208" },
      { title: 'Wednesday Special Clinics', days: '🔹 <b>Glaucoma Clinic:</b> Dr. Kirti Singh <span style="font-weight: normal;">(Rooms 202, 203, 204)</span><br>🔹 <b>Retina Clinic-1:</b> Dr. Punita K. Sodhi <span style="font-weight: normal;">(Rooms 104, 107, 108)</span>', location: "GNEC Rooms 104, 107, 108, 202, 203, 204" },
      { title: 'Thursday Special Clinics', days: '🔹 <b>Retina Clinic-2:</b> Dr. Meenakshi Thakar <span style="font-weight: normal;">(Rooms 104, 107, 108)</span><br>🔹 <b>Squint Clinic:</b> Dr. Subhash Dadeya <span style="font-weight: normal;">(Room 207)</span>', location: "GNEC Rooms 104, 107, 108, 207" },
      { title: 'Friday Special Clinics', days: '🔹 <b>NOC (Neuro-Ophtha) + Squint:</b> Dr. Paromita Dutta <span style="font-weight: normal;">(Rooms 102, 207)</span><br>🔹 <b>Cornea Clinic (10:00 AM):</b> Dr. Parul Jain <span style="font-weight: normal;">(Room 208)</span>', location: "GNEC Rooms 102, 207, 208" },
      { title: 'Saturday Special Clinics', days: '🔹 <b>Retina Clinic-1:</b> Dr. Punita K. Sodhi <span style="font-weight: normal;">(Rooms 104, 107, 108)</span>', location: "GNEC Rooms 104, 107, 108" },
      { title: 'Daily Special Clinic', days: '🔹 <b>LVA Clinic (Low Vision Aids):</b> Held Daily (02:00 PM - 04:00 PM)', location: "GNEC Room 204" }
    ]
  },
  {
    id: "surgery",
    name: "Surgery Morning OPD (09:00 AM - 01:00 PM)",
    units: [
      { title: 'Surgery Unit 1 <span style="font-weight: normal;">(Dr. C.B. Singh)</span>', days: "🔹 <b>OPD:</b> Mon (New, Em) / Thu (Follow-up)<br>🔴 <b>OT:</b> Wed (A,B) / Fri (C,D)<br>🟡 <b>Uro OT:</b> Saturday", location: "<b>OPD</b> (Rooms 409, 410, 412, 414, 416)<br><b>Ward:</b> Ward 2A" },
      { title: 'Surgery Unit 2 <span style="font-weight: normal;">(Dr. Pawan Lal)</span>', days: "🔹 <b>OPD:</b> Wed (New, Em) / Sat (Follow-up)<br>🔴 <b>OT:</b> Fri (A,B) / Mon (C,D)<br>🟡 <b>Uro OT:</b> Tuesday", location: "<b>OPD</b> (Rooms 409, 410, 412, 414, 416)<br><b>Ward:</b> Ward 3A" },
      { title: 'Surgery Unit 3 <span style="font-weight: normal;">(Dr. Rajdeep Singh)</span>', days: "🔹 <b>OPD:</b> Fri (New, Em) / Tue (Follow-up)<br>🔴 <b>OT:</b> Mon (A,B) / Wed (C,D)<br>🟡 <b>Uro OT:</b> Thursday", location: "<b>OPD</b> (Rooms 409, 410, 412, 414, 416)<br><b>Ward:</b> Ward 4A" },
      { title: 'Surgery Unit 4 <span style="font-weight: normal;">(Dr. Sushanto Neogi)</span>', days: "🔹 <b>OPD:</b> Tue (New, Em) / Fri (Follow-up)<br>🔴 <b>OT:</b> Thu (A,B) / Sat (C,D)<br>🟡 <b>Uro OT:</b> Monday", location: "<b>OPD</b> (Rooms 417, 431, 433, 435)<br><b>Ward:</b> Ward 3B" },
      { title: 'Surgery Unit 5 <span style="font-weight: normal;">(Dr. Anubhav Vindal)</span>', days: "🔹 <b>OPD:</b> Thu (New, Em) / Mon (Follow-up)<br>🔴 <b>OT:</b> Sat (A,B) / Tue (C,D)<br>🟡 <b>Uro OT:</b> Wednesday", location: "<b>OPD</b> (Rooms 417, 431, 433, 435)<br><b>Ward:</b> Ward 4B" },
      { title: 'Surgery Unit 6 <span style="font-weight: normal;">(Dr. Deepak Ghuliani)</span>', days: "🔹 <b>OPD:</b> Sat (New, Em) / Wed (Follow-up)<br>🔴 <b>OT:</b> Tue (A,B) / Thu (C,D)<br>🟡 <b>Uro OT:</b> Friday", location: "<b>OPD</b> (Rooms 417, 431, 433, 435)<br><b>Ward:</b> Ward 2B" }
    ]
  },
  {
    id: "peds_med",
    name: "Pediatric Medicine Morning OPD & Daily Clinics (09:00 AM - 01:00 PM)",
    units: [
      { title: 'Peds Medicine <span style="font-weight: normal;">(Dr. Mukta Mantan)</span>', days: "Mon / Thu", location: "OPD Block 5th Floor (Rooms 517, 518, 519, 520A, 520B)" },
      { title: 'Peds Medicine <span style="font-weight: normal;">(Dr. Virendra)</span>', days: "Mon / Thu", location: "OPD Block 5th Floor (Rooms 512, 513, 514, 515, 516)" },
      { title: 'Peds Medicine <span style="font-weight: normal;">(Dr. Monica Juneja)</span>', days: "Tue / Fri", location: "OPD Block 5th Floor (Rooms 512, 513, 514, 515, 516)" },
      { title: 'Peds Medicine <span style="font-weight: normal;">(Dr. D. Mishra)</span>', days: "Tue / Fri", location: "OPD Block 5th Floor (Rooms 517, 518, 519, 520A, 520B)" },
      { title: 'Peds Medicine <span style="font-weight: normal;">(Dr. K. Rajeshwari)</span>', days: "Wed / Sat", location: "OPD Block 5th Floor (Rooms 512, 513, 514, 515, 516)" },
      { title: 'Peds Medicine <span style="font-weight: normal;">(Dr. Anurag Agarwal)</span>', days: "Wed / Sat", location: "OPD Block 5th Floor (Rooms 517, 518, 519, 520A, 520B)" },
      { title: 'Medicine Genetic <span style="font-weight: normal;">(Dr. Seema Kapoor / Dr. Amit K. Gupta)</span>', days: "Mon to Thu", location: "OPD Block 5th Floor (Rooms 735, 743)" },
      { title: 'Child Development Centre (CDC) <span style="font-weight: normal;">(Dr. Monica Juneja / Dr. Arpita Gupta)</span>', days: "Mon-Fri (09:00 AM - 04:00 PM), Sat (09:00 AM - 01:00 PM)", location: "CDC Rooms 01-08 (Near Ward 13B Area)" },
      { title: 'COE-EIC <span style="font-weight: normal;">(Dr. Monica Juneja / Dr. Arpita Gupta)</span>', days: "Daily (09:00 AM - 05:00 PM)", location: "3rd Floor Special Ward" },
      { title: 'Immunization Clinic <span style="font-weight: normal;">(Dr. Raghvendra Singh / Dr. Pallavi)</span>', days: "Daily (09:00 AM - 01:00 PM)", location: "OPD Block 5th Floor (Room 505)" },
      { title: 'School Health Screening <span style="font-weight: normal;">(All Faculty)</span>', days: "Daily (09:00 AM - 01:00 PM)", location: "OPD Block 5th Floor (Room 511)" }
    ]
  },
  {
    id: "peds_surg",
    name: "Pediatric Surgery Morning OPD (09:00 AM - 01:00 PM)",
    units: [
      { title: 'Pediatric Surgery Unit 1 <span style="font-weight: normal;">(Dr. Sujoy Neogi)</span>', days: "Monday", location: "OPD Block 5th Floor (Rooms 533, 534)" },
      { title: 'Pediatric Surgery Unit 2 <span style="font-weight: normal;">(Dr. Simmi K. Ratan)</span>', days: "Tue / Fri / Sat", location: "OPD Block 5th Floor (Rooms 533, 534)" },
      { title: 'Pediatric Surgery Unit 3 <span style="font-weight: normal;">(Dr. Prafull Kumar)</span>', days: "Wednesday", location: "OPD Block 5th Floor (Rooms 533, 534)" },
      { title: 'Pediatric Surgery Unit 4 <span style="font-weight: normal;">(Dr. Chiranjiv Kumar)</span>', days: "Thursday", location: "OPD Block 5th Floor (Rooms 533, 534)" }
    ]
  },
  {
    id: "clinic_peds",
    name: "Pediatric Special Evening Clinics (01:00 PM - 04:00 PM)",
    units: [
      { title: 'Pediatric ART Clinic <span style="font-weight: normal;">(Dr. K. Rajeshwari)</span>', days: "Monday", location: "OPD Block 6th Floor" },
      { title: 'Peds Genetics Clinic <span style="font-weight: normal;">(Dr. Seema Kapoor / Dr. Amit K. Gupta)</span>', days: "Mon & Thu", location: "OPD Block 5th Floor (Room 515)" },
      { title: 'Peds Neurology Clinic <span style="font-weight: normal;">(Dr. D. Mishra)</span>', days: "Friday", location: "OPD Block 5th Floor (Room 517)" },
      { title: 'Well Baby Clinic <span style="font-weight: normal;">(Dr. Ashish Jain)</span>', days: "Tuesday", location: "OPD Block 5th Floor (Rooms 517-518)" },
      { title: 'High Risk Neonate Clinic <span style="font-weight: normal;">(Dr. Ajay Kumar)</span>', days: "Friday", location: "OPD Block 5th Floor (Rooms 511-512)" },
      { title: 'High Risk Clinic <span style="font-weight: normal;">(Dr. Ashish Jain)</span>', days: "Friday", location: "OPD Block 5th Floor (Rooms 517-518)" },
      { title: 'Peds Endocrine Clinic <span style="font-weight: normal;">(Dr. Ashima Dabas)</span>', days: "Monday", location: "OPD Block 5th Floor (Rooms 506-514)" },
      { title: 'Peds Cardiology Clinic <span style="font-weight: normal;">(Dr. Anurag Aggarwal)</span>', days: "Monday", location: "OPD Block 5th Floor (Room 514)" },
      { title: 'Peds Nephrology Clinic <span style="font-weight: normal;">(Dr. M. Mantan)</span>', days: "Monday", location: "OPD Block 5th Floor (Room 515)" },
      { title: 'Peds Gastroenterology Clinic <span style="font-weight: normal;">(Dr. Raghvendra Singh)</span>', days: "Friday", location: "OPD Block 5th Floor (Room 514)" },
      { title: 'Peds Intensive Care (PICU Follow-up) <span style="font-weight: normal;">(Dr. Urmila Jhamb / Dr. R. Saxena / Dr. Pallavi)</span>', days: "Friday", location: "OPD Block 5th Floor (Rooms 512, 513)" },
      { title: 'Peds Pulmonology Clinic <span style="font-weight: normal;">(Dr. Deepak Kumar)</span>', days: "Friday", location: "OPD Block 5th Floor (Room 506 / 512)" },
      { title: 'Peds Oncology Clinic <span style="font-weight: normal;">(Dr. Sujoy Neogi)</span>', days: "Monday", location: "OPD Block 5th Floor (Room 535)" },
      { title: 'Peds Urology & Antenatal Clinic & DSD <span style="font-weight: normal;">(Dr. S.K. Ratan)</span>', days: "Tuesday", location: "OPD Block 5th Floor (Room 535)" },
      { title: 'GI & Hepatobiliary Clinic <span style="font-weight: normal;">(Dr. S.K. Ratan)</span>', days: "Friday", location: "OPD Block 5th Floor (Room 535)" },
      { title: 'Peds Laparoscopy / Endoscopy Clinic <span style="font-weight: normal;">(Dr. Prafull Kumar)</span>', days: "Wednesday", location: "OPD Block 5th Floor (Room 535)" },
      { title: 'Peds Neurosurgery & Lymphatic Vascular Clinic <span style="font-weight: normal;">(Dr. Chiranjiv Kumar)</span>', days: "Thursday", location: "OPD Block 5th Floor (Room 535)" }
    ]
  },
  {
    id: "ent",
    name: "ENT Morning OPD (09:00 AM - 01:00 PM)",
    units: [
      { title: 'Unit 1 <span style="font-weight: normal;">(Dr. Ravi Meher)</span>', days: "🔹 <b>OPD:</b> Wed / Sat<br>🔴 <b>OT:</b> Mon / Thu<br>🟡 <b>Ward:</b> Tue / Fri", location: "<b>OPD</b> (Rooms 609-617, 6th Fl)" },
      { title: 'Unit 2 <span style="font-weight: normal;">(Dr. Ishwar Singh)</span>', days: "🔹 <b>OPD:</b> Mon / Thu<br>🔴 <b>OT:</b> Tue / Fri<br>🟡 <b>Ward:</b> Wed / Sat", location: "<b>OPD</b> (Rooms 609-617, 6th Fl)" },
      { title: 'Unit 3 <span style="font-weight: normal;">(Dr. H.C. Taneja)</span>', days: "🔹 <b>OPD:</b> Tue / Fri<br>🔴 <b>OT:</b> Wed / Sat<br>🟡 <b>Ward:</b> Mon / Thu", location: "<b>OPD</b> (Rooms 609-617, 6th Fl)" }
    ]
  },
  {
    id: "clinic_ent",
    name: "ENT Evening Special Clinics (02:00 PM - 04:00 PM)",
    units: [
      { title: 'Rhinology Clinic <span style="font-weight: normal;">(Dr. H.C. Taneja)</span>', days: "Wednesday", location: "OPD Block 6th Floor (Room 609)" },
      { title: 'Vertigo and Audiology Clinic <span style="font-weight: normal;">(Dr. P.K. Rathore)</span>', days: "Wednesday", location: "OPD Block 6th Floor (Room 609)" },
      { title: 'Voice and Laryngology Clinic <span style="font-weight: normal;">(Dr. Ravi Mehar)</span>', days: "Monday", location: "OPD Block 6th Floor (Room 609)" }
    ]
  },
  {
    id: "ortho",
    name: "Orthopedics OPD, OT & Emergency Schedule",
    units: [
      { title: 'Orthopedics Unit 1 <span style="font-weight: normal;">(Dr. Sumit Sural, Dr. Sumit Arora)</span>', days: "Mon & Thu", location: "Ortho Block 1st Floor (Rooms 101-104, 111-113, 115)" },
      { title: 'Orthopedics Unit 2 <span style="font-weight: normal;">(Dr. Lalit Maini)</span>', days: "Tue & Fri", location: "Ortho Block 1st Floor (Rooms 101-104, 111-113, 115)" },
      { title: 'Orthopedics Unit 3 <span style="font-weight: normal;">(Dr. Abhishek Kashyap)</span>', days: "Wed & Sat", location: "Ortho Block 1st Floor (Rooms 101-104, 111-113, 115)" },
      { title: 'Fracture Clinic <span style="font-weight: normal;">(Dr. Lalit Maini)</span>', days: "Mon to Sat (Morning & Evening Shift)", location: "Ortho Block 1st Floor (Room 105)" },
      { title: 'Spine Clinic (Wednesday)', days: "Wednesday", location: "Ortho Block 1st Floor (Room 115)" }
    ]
  },
  {
    id: "clinic_ortho",
    name: "Orthopedics Afternoon Specialty Clinics (02:00 PM - 04:00 PM)",
    units: [
      { title: 'Trauma Clinic <span style="font-weight: normal;">(Dr. Mayank Gupta)</span>', days: "Monday", location: "Ortho Block 1st Floor (Room 115)" },
      { title: 'Adult Reconstruction Clinic <span style="font-weight: normal;">(Dr. Lalit Maini)</span>', days: "Tuesday", location: "Ortho Block 1st Floor (Room 115)" },
      { title: 'Spine Clinic <span style="font-weight: normal;">(Dr. Abhishek Kashyap)</span>', days: "Wednesday", location: "Ortho Block 1st Floor (Room 115)" },
      { title: 'Arthroscopy Sports Injury Clinic <span style="font-weight: normal;">(Dr. Sumit Arora)</span>', days: "Thursday", location: "Ortho Block 1st Floor (Room 115)" },
      { title: 'Trauma Clinic <span style="font-weight: normal;">(Dr. Vedpal Yadav)</span>', days: "Friday", location: "Ortho Block 1st Floor (Room 115)" }
    ]
  },
  {
    id: "gynae",
    name: "Gynecology, Antenatal & Family Welfare Morning OPD (09:00 AM - 01:00 PM)",
    units: [
      { title: 'Gynecology Unit 1 <span style="font-weight: normal;">(Dr. Latika Sahu)</span>', days: "🔹 <b>OPD:</b> Monday", location: "OPD Block 2nd Floor (Rooms 209-214)" },
      { title: 'Gynecology Unit 2 <span style="font-weight: normal;">(Dr. Sangeeta Gupta)</span>', days: "🔹 <b>OPD:</b> Tuesday", location: "OPD Block 2nd Floor (Rooms 209-214)" },
      { title: 'Gynecology Unit 3 <span style="font-weight: normal;">(Dr. Y.M. Mala)</span>', days: "🔹 <b>OPD:</b> Wednesday", location: "OPD Block 2nd Floor (Rooms 209-214)" },
      { title: 'Gynecology Unit 4 <span style="font-weight: normal;">(Dr. Deepti Goswami)</span>', days: "🔹 <b>OPD:</b> Thursday", location: "OPD Block 2nd Floor (Rooms 209-214)" },
      { title: 'Gynecology Unit 5 <span style="font-weight: normal;">(Dr. Madhavi M. Gupta)</span>', days: "🔹 <b>OPD:</b> Friday", location: "OPD Block 2nd Floor (Rooms 209-214)" },
      { title: 'Gynecology Unit 6 <span style="font-weight: normal;">(Dr. Krishna Agarwal)</span>', days: "🔹 <b>OPD:</b> Saturday", location: "OPD Block 2nd Floor (Rooms 209-214)" },
      { title: 'Antenatal Clinic (ANC) <span style="font-weight: normal;">(Dr. Deepti Goswami)</span>', days: "Monday", location: "OPD Block 2nd Floor (Rooms 230-235)" },
      { title: 'Antenatal Clinic (ANC) <span style="font-weight: normal;">(Dr. Madhavi M. Gupta)</span>', days: "Tuesday", location: "OPD Block 2nd Floor (Rooms 230-235)" },
      { title: 'Antenatal Clinic (ANC) <span style="font-weight: normal;">(Dr. Krishna Agarwal)</span>', days: "Wednesday", location: "OPD Block 2nd Floor (Rooms 230-235)" },
      { title: 'Antenatal Clinic (ANC) <span style="font-weight: normal;">(Dr. Latika Sahu)</span>', days: "Thursday", location: "OPD Block 2nd Floor (Rooms 230-235)" },
      { title: 'Antenatal Clinic (ANC) <span style="font-weight: normal;">(Dr. Sangeeta Gupta)</span>', days: "Friday", location: "OPD Block 2nd Floor (Rooms 230-235)" },
      { title: 'Antenatal Clinic (ANC) <span style="font-weight: normal;">(Dr. Y.M. Mala)</span>', days: "Saturday", location: "OPD Block 2nd Floor (Rooms 230-235)" },
      { title: 'Family Welfare (Male) & Infertility <span style="font-weight: normal;">(Dr. Chandan Kumar)</span>', days: "Mon to Sat", location: "OPD Block 1st Floor (Rooms 124 to 129)" },
      { title: 'Family Welfare (Female) <span style="font-weight: normal;">(Dr. Rachana Sharma)</span>', days: "Mon to Sat", location: "OPD Block 2nd Floor" },
      { title: 'Reproductive & IVF Centre <span style="font-weight: normal;">(Dr. Deepti)</span>', days: "Mon to Sat", location: "B.L. Taneja Block (Ground Floor)" }
    ]
  },
  {
    id: "clinic_gynae",
    name: "Gynecology Special Evening Clinics (02:00 PM - 04:00 PM)",
    units: [
      { title: 'Fertility & ART Clinic <span style="font-weight: normal;">(Dr. Deepti Goswami)</span>', days: "Monday", location: "OPD Block 2nd Floor (Rooms 209, 210)" },
      { title: 'Fertility & ART Clinic <span style="font-weight: normal;">(Dr. Madhavi M. Gupta)</span>', days: "Monday", location: "OPD Block 2nd Floor (Rooms 213, 214)" },
      { title: 'Gynae Endocrine Clinic <span style="font-weight: normal;">(Dr. Deepti Goswami)</span>', days: "Thursday", location: "OPD Block 2nd Floor (Rooms 209, 210)" },
      { title: 'Gynae Endocrine Clinic <span style="font-weight: normal;">(Dr. Madhavi M. Gupta)</span>', days: "Thursday", location: "OPD Block 2nd Floor (Rooms 213, 214)" },
      { title: 'High-Risk Pregnancy Clinic <span style="font-weight: normal;">(Dr. Krishna Agarwal)</span>', days: "Thursday", location: "OPD Block 2nd Floor (Room 235)" },
      { title: 'High-Risk Pregnancy Clinic <span style="font-weight: normal;">(Dr. Y.M. Mala)</span>', days: "Thursday", location: "OPD Block 2nd Floor (Room 234)" },
      { title: 'Fetal Medicine Clinic <span style="font-weight: normal;">(Dr. Krishna Agarwal)</span>', days: "Thursday", location: "OPD Block 2nd Floor (Room 235)" },
      { title: 'Fetal Medicine Clinic <span style="font-weight: normal;">(Dr. Sangeeta Gupta)</span>', days: "Thursday", location: "OPD Block 2nd Floor (Room 234)" },
      { title: 'Gynecology Cancer Clinic <span style="font-weight: normal;">(Dr. Y.M. Mala)</span>', days: "Friday", location: "OPD Block 2nd Floor (Rooms 209, 210)" },
      { title: 'Gynecology Cancer Clinic <span style="font-weight: normal;">(Dr. Latika Sahu)</span>', days: "Friday", location: "OPD Block 2nd Floor (Rooms 213, 214)" }
    ]
  },
  {
    id: "derma",
    name: "Dermatology & STD OPD (09:00 AM - 01:00 PM & Special Evening Clinics 02:00 PM - 04:00 PM)",
    units: [
      { title: 'Dermatology & STD Morning OPD <span style="font-weight: normal;">(Dr. K.D. Barman)</span>', days: "Mon to Sat (09:00 AM - 01:00 PM)", location: "OPD Block 7th Floor (Rooms 701-720)" },
      { title: 'Leprosy Clinic <span style="font-weight: normal;">(Dr. Laxmi P. Kumar)</span>', days: "Tuesday", location: "OPD Block 7th Floor (Room 711)" },
      { title: 'Psoriasis Clinic <span style="font-weight: normal;">(Dr. Deepika Yadav)</span>', days: "Wednesday", location: "OPD Block 7th Floor (Room 711)" },
      { title: 'Vitiligo Clinic <span style="font-weight: normal;">(Dr. Laxmi P. Kumar)</span>', days: "Wednesday", location: "OPD Block 7th Floor (Room 711)" },
      { title: 'Contact Dermatitis Clinic <span style="font-weight: normal;">(Dr. K.D. Barman)</span>', days: "Friday", location: "OPD Block 7th Floor (Room 711)" },
      { title: 'Connective Tissue Disease Clinic <span style="font-weight: normal;">(Dr. K.D. Barman)</span>', days: "Friday", location: "OPD Block 7th Floor (Room 711)" },
      { title: 'Vesicobullous Disease Clinic <span style="font-weight: normal;">(Dr. K.D. Barman)</span>', days: "Friday", location: "OPD Block 7th Floor (Room 711)" },
      { title: 'Autoimmune Disorders Allergy Clinic <span style="font-weight: normal;">(Dr. Tanvi Dev)</span>', days: "Friday", location: "OPD Block 7th Floor (Room 711)" }
    ]
  },
  {
    id: "burns",
    name: "Burns & Plastic Surgery Morning OPD (09:00 AM - 01:00 PM)",
    units: [
      { title: 'Burn and Plastic Surgery <span style="font-weight: normal;">(Dr. Krittika Aggarwal)</span>', days: "Mon / Thu", location: "<b>OPD</b> (Rooms 733, 734)<br><b>Ward:</b> Ward 20" },
      { title: 'Burn and Plastic Surgery <span style="font-weight: normal;">(Dr. Prabhat Shrivastava)</span>', days: "Tue / Fri", location: "<b>OPD</b> (Rooms 733, 734)<br><b>Ward:</b> Ward 20" },
      { title: 'Burn and Plastic Surgery <span style="font-weight: normal;">(Dr. Varsha Gupta)</span>', days: "Wed / Sat", location: "<b>OPD</b> (Rooms 733, 734)<br><b>Ward:</b> Ward 20" }
    ]
  },
  {
    id: "clinic_other",
    name: "Other Special Clinics, Hospital Units & Support Services",
    units: [
      { title: 'Anti-Retroviral Therapy (ART Centre) <span style="font-weight: normal;">(Dr. S. Anuradha)</span>', days: "Mon to Sat (09:00 AM - 04:00 PM)", location: "OPD Block 6th Floor (Room 634)" },
      { title: 'Chest Clinic (DOTS for T.B.) <span style="font-weight: normal;">(Dr. Vishal Khanna)</span>', days: "Mon to Sat", location: "Chest Clinic, Gate No. 2" },
      { title: 'Radio Diagnosis <span style="font-weight: normal;">(Dr. Gaurav Pradhan)</span>', days: "Mon to Sat", location: "Room 137 (Near Gate No. 2)" },
      { title: 'Treatment / Referral of EWS Patients <span style="font-weight: normal;">(Dr. Shagufta Vij)</span>', days: "Mon to Sat", location: "OPD Block 4th Floor (Room 423)" },
      { title: 'Covid-19 Sample Collection <span style="font-weight: normal;">(Dr. Shagufta Vij)</span>', days: "Daily (24x7)", location: "In front of Main Casualty" },
      { title: 'Nutrition & Diet Counselling <span style="font-weight: normal;">(Dr. Vinita Jayaswal)</span>', days: "Mon to Sat", location: "OPD Block 3rd Floor (Room 329)" },
      { title: 'PAC Clinic <span style="font-weight: normal;">(Dr. Mona Arya)</span>', days: "Monday (07:30 AM - 11:30 AM)", location: "OPD Block 1st Floor (Room 115)" },
      { title: 'PAC Clinic <span style="font-weight: normal;">(Dr. Neelam Prasad)</span>', days: "Tuesday (07:30 AM - 11:30 AM)", location: "OPD Block 1st Floor (Room 115)" },
      { title: 'PAC Clinic <span style="font-weight: normal;">(Dr. Bharti Wadhwa)</span>', days: "Wednesday (07:30 AM - 11:30 AM)", location: "OPD Block 1st Floor (Room 117)" },
      { title: 'PAC Clinic <span style="font-weight: normal;">(Dr. Sonia Wadhawan)</span>', days: "Thursday (07:30 AM - 11:30 AM)", location: "OPD Block 1st Floor (Room 117)" },
      { title: 'PAC Clinic <span style="font-weight: normal;">(Dr. Anjur Bhalotra)</span>', days: "Friday (07:30 AM - 11:30 AM)", location: "OPD Block 1st Floor (Room 117)" },
      { title: 'PAC Clinic <span style="font-weight: normal;">(Dr. Munisha Agarwal)</span>', days: "Saturday (07:30 AM - 11:30 AM)", location: "OPD Block 1st Floor (Room 115)" },
      { title: 'Pain Clinic <span style="font-weight: normal;">(Pain OPD)</span>', days: "Mon to Sat (Morning & Evening Shift)", location: "OPD Block 1st Floor (Room 121)" },
      { title: 'Anti-Rabies Clinic', days: "Mon to Sat (Morning & Evening Shift)", location: "Emergency Block (Room 21)" },
      { title: 'Senior Citizen Clinic', days: "Only Sunday (08:30 AM - 10:30 AM)", location: "OPD Block 1st Floor (Rooms 115, 116, 117)" }
    ]
  },
  {
    id: "clinic_med",
    name: "Medicine Evening Special Clinics (02:00 PM - 04:00 PM)",
    units: [
      { title: 'Pulmonary Clinic <span style="font-weight: normal;">(Dr. Naresh Kumar)</span>', days: "Tue / Thu / Sat (Morning)", location: "<b>OPD</b> (Rooms 111, 113)<br><b>Ward:</b> Ward 26" },
      { title: 'Hepatology Clinic <span style="font-weight: normal;">(Dr. S. Anuradha)</span>', days: "Mon to Sat (Morning)", location: "OPD Block 1st Floor (Room 139)" },
      { title: 'Diabetes Clinic <span style="font-weight: normal;">(Dr. Sanjay Pandit)</span>', days: "Monday", location: "OPD Block 3rd Floor (Rooms 316, 322, 323, 324, 325)" },
      { title: 'Hematology Clinic <span style="font-weight: normal;">(Dr. Sunita Aggarwal)</span>', days: "Tuesday", location: "OPD Block 3rd Floor (Rooms 310, 311, 312, 313, 315)" },
      { title: 'Endocrinology Clinic <span style="font-weight: normal;">(Dr. Sandeep Garg)</span>', days: "Wednesday", location: "OPD Block 3rd Floor (Rooms 316, 322, 323, 324, 325)" },
      { title: 'Rheumatology Clinic <span style="font-weight: normal;">(Dr. Sumeet Singla)</span>', days: "Thursday", location: "OPD Block 3rd Floor (Rooms 316, 322, 323, 324, 325)" },
      { title: 'Nephrology Clinic <span style="font-weight: normal;">(Dr. Anurag Rohtagi)</span>', days: "Friday", location: "OPD Block 3rd Floor (Rooms 310, 311, 312, 313, 315)" }
    ]
  },
  {
    id: "neurosurgery",
    name: "Neurosurgery Clinic (09:00 AM - 01:00 PM & Friday Evening 02:00 PM - 04:00 PM)",
    units: [
      { title: 'Neurosurgery Clinic <span style="font-weight: normal;">(Dr. Chander Shekhar / Dr. P.N. Pandey)</span>', days: "Mon / Thu / Fri (07:30 AM - 11:30 AM)", location: "OPD Block 4th Floor (Rooms 428, 429)" },
      { title: 'Spine and Peds Neurosurgery Clinic <span style="font-weight: normal;">(Dr. Anuj Kumar)</span>', days: "Friday (01:00 PM - 02:00 PM)", location: "OPD Block 4th Floor (Rooms 428, 429)" }
    ]
  },
  {
    id: "clinic_surg",
    name: "Surgery Evening Special Clinics (02:00 PM - 04:00 PM)",
    units: [
      { title: 'Male Infertility & Vascular Clinic <span style="font-weight: normal;">(Dr. C.B. Singh)</span>', days: "1st & 3rd Thursday", location: "OPD Block 4th Floor (Room 417)" },
      { title: 'Male Infertility <span style="font-weight: normal;">(Dr. Sushanto Neogi)</span>', days: "All Fridays", location: "OPD Block 4th Floor (Room 417)" },
      { title: 'Metabolic / Bariatric Clinic <span style="font-weight: normal;">(Dr. Anubhav Vindal)</span>', days: "2nd & 4th Monday", location: "OPD Block 4th Floor (Room 410)" },
      { title: 'Breast & Endocrine Clinic <span style="font-weight: normal;">(Dr. Deepak Ghuliani)</span>', days: "Wednesday", location: "OPD Block 4th Floor (Room 434)" },
      { title: 'Proctology Clinic <span style="font-weight: normal;">(Dr. Pawan Lal)</span>', days: "Wednesday", location: "OPD Block 4th Floor (Room 410)" },
      { title: 'Stoma / Wound Clinic <span style="font-weight: normal;">(Dr. Sushanto Neogi)</span>', days: "2nd & 4th Monday", location: "OPD Block 4th Floor (Room 410)" },
      { title: 'AWR Clinic <span style="font-weight: normal;">(Dr. Rajdeep Singh)</span>', days: "2nd & 4th Tuesday", location: "OPD Block 4th Floor (Room 434)" }
    ]
  },
  {
    id: "radiotherapy",
    name: "Radiotherapy / Oncology Morning OPD (09:00 AM - 01:00 PM)",
    units: [
      { title: 'Radiotherapy / Oncology <span style="font-weight: normal;">(Dr. Arun Kumar Rathi)</span>', days: "Mon / Wed / Fri", location: "OPD Block 6th Floor (Rooms 635, 636)" },
      { title: 'Gynaecology Oncology <span style="font-weight: normal;">(Dr. Anurita Srivastava)</span>', days: "Tue / Thu / Sat", location: "OPD Block 6th Floor (Rooms 635, 636)" }
    ]
  },
  {
    id: "panchkarma",
    name: "Panchkarma Morning OPD (09:00 AM - 01:00 PM)",
    units: [
      { title: 'Panchkarma (Ayurvedic) <span style="font-weight: normal;">(Dr. Akhilesh Vashishtha / Dr. A.C. Vashishtha)</span>', days: "Mon to Sat", location: "OPD Block 7th Floor (Rooms 736 to 739)" }
    ]
  },
  {
    id: "unani",
    name: "Unani Morning OPD (09:00 AM - 01:00 PM)",
    units: [
      { title: 'Unani Clinic <span style="font-weight: normal;">(Dr. Azra Anjum / Dr. Farha Yousuf)</span>', days: "Mon to Sat (Special Clinic: Mon, Wed, Fri)", location: "OPD Block 7th Floor (Room 742)" }
    ]
  }
];
