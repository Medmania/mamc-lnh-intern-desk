const const deptSchedules = [
  // --- MAMC / LNJP MAIN OPDS & CLINICS ---
  {
    id: "medicine",
    name: "Medicine Morning OPD (09:00 AM - 01:00 PM)",
    units: [
      { 
        title: 'Unit 1 <span style="font-weight: normal;">(Dr. Anurag Rohatgi)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Mon & Thu</span><span class="opd-badge emergency">🚨 <b>Em:</b> Monday</span></div>', 
        location: "<b>OPD</b> (Rooms 310, 311, 312, 313, 315)<br><b>Ward:</b> Ward 31" 
      },
      { 
        title: 'Unit 2 <span style="font-weight: normal;">(Dr. S Anuradha)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Tue & Fri</span><span class="opd-badge emergency">🚨 <b>Em:</b> Tuesday</span></div>', 
        location: "<b>OPD</b> (Rooms 310, 311, 312, 313, 315)<br><b>Ward:</b> Ward 29" 
      },
      { 
        title: 'Unit 3 <span style="font-weight: normal;">(Dr. Sunita Agarwal)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Wed & Sat</span><span class="opd-badge emergency">🚨 <b>Em:</b> Wednesday</span></div>', 
        location: "<b>OPD</b> (Rooms 310, 311, 312, 313, 315)<br><b>Ward:</b> Ward 32" 
      },
      { 
        title: 'Unit 4 <span style="font-weight: normal;">(Dr. Sandeep Garg)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Mon & Thu</span><span class="opd-badge emergency">🚨 <b>Em:</b> Thursday</span></div>', 
        location: "<b>OPD</b> (Rooms 316, 322, 323, 324, 325)<br><b>Ward:</b> Ward 28" 
      },
      { 
        title: 'Unit 5 <span style="font-weight: normal;">(Dr. Sanjay Pandit)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Tue & Fri</span><span class="opd-badge emergency">🚨 <b>Em:</b> Friday</span></div>', 
        location: "<b>OPD</b> (Rooms 316, 322, 323, 324, 325)<br><b>Ward:</b> Ward 30" 
      },
      { 
        title: 'Unit 6 <span style="font-weight: normal;">(Dr. Sumeet Singla)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Wed & Sat</span><span class="opd-badge emergency">🚨 <b>Em:</b> Saturday</span></div>', 
        location: "<b>OPD</b> (Rooms 316, 322, 323, 324, 325)<br><b>Ward:</b> Ward 27" 
      }
    ]
  },
  {
    id: "surgery",
    name: "Surgery Morning OPD (09:00 AM - 01:00 PM)",
    units: [
      { 
        title: 'Surgery Unit 1 <span style="font-weight: normal;">(Dr. C.B. Singh)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Mon (New, Em) / Thu (Follow-up)</span><span class="opd-badge ot">🔵 <b>OT:</b> Wed (A,B) / Fri (C,D)</span><span class="opd-badge ot">🔵 <b>Uro OT:</b> Saturday</span></div>', 
        location: "<b>OPD</b> (Rooms 409, 410, 412, 414, 416)<br><b>Ward:</b> Ward 2A" 
      },
      { 
        title: 'Surgery Unit 2 <span style="font-weight: normal;">(Dr. Pawan Lal)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Wed (New, Em) / Sat (Follow-up)</span><span class="opd-badge ot">🔵 <b>OT:</b> Fri (A,B) / Mon (C,D)</span><span class="opd-badge ot">🔵 <b>Uro OT:</b> Tuesday</span></div>', 
        location: "<b>OPD</b> (Rooms 409, 410, 412, 414, 416)<br><b>Ward:</b> Ward 3A" 
      },
      { 
        title: 'Surgery Unit 3 <span style="font-weight: normal;">(Dr. Rajdeep Singh)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Fri (New, Em) / Tue (Follow-up)</span><span class="opd-badge ot">🔵 <b>OT:</b> Mon (A,B) / Wed (C,D)</span><span class="opd-badge ot">🔵 <b>Uro OT:</b> Thursday</span></div>', 
        location: "<b>OPD</b> (Rooms 409, 410, 412, 414, 416)<br><b>Ward:</b> Ward 4A" 
      },
      { 
        title: 'Surgery Unit 4 <span style="font-weight: normal;">(Dr. Sushanto Neogi)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Tue (New, Em) / Fri (Follow-up)</span><span class="opd-badge ot">🔵 <b>OT:</b> Thu (A,B) / Sat (C,D)</span><span class="opd-badge ot">🔵 <b>Uro OT:</b> Monday</span></div>', 
        location: "<b>OPD</b> (Rooms 417, 431, 433, 435)<br><b>Ward:</b> Ward 3B" 
      },
      { 
        title: 'Surgery Unit 5 <span style="font-weight: normal;">(Dr. Anubhav Vindal)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Thu (New, Em) / Mon (Follow-up)</span><span class="opd-badge ot">🔵 <b>OT:</b> Sat (A,B) / Tue (C,D)</span><span class="opd-badge ot">🔵 <b>Uro OT:</b> Wednesday</span></div>', 
        location: "<b>OPD</b> (Rooms 417, 431, 433, 435)<br><b>Ward:</b> Ward 2B" 
      },
      { 
        title: 'Surgery Unit 6 <span style="font-weight: normal;">(Dr. Deepak Ghuliani)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Sat (New, Em) / Wed (Follow-up)</span><span class="opd-badge ot">🔵 <b>OT:</b> Tue (A,B) / Thu (C,D)</span><span class="opd-badge ot">🔵 <b>Uro OT:</b> Friday</span></div>', 
        location: "<b>OPD</b> (Rooms 417, 431, 433, 435)<br><b>Ward:</b> Ward 4B" 
      }
    ]
  },
  {
    id: "ent",
    name: "ENT Morning OPD (09:00 AM - 01:00 PM)",
    units: [
      { 
        title: 'Unit 1 <span style="font-weight: normal;">(Dr. Ishwar Singh)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Mon / Thu</span><span class="opd-badge ot">🔵 <b>OT:</b> Tue / Fri</span><span class="opd-badge round">🔵 <b>Ward:</b> Wed / Sat</span></div>', 
        location: "<b>OPD</b> (Rooms 609-617)<br><b>Ward:</b> Ward 6A, 6B, 7B" 
      },
      { 
        title: 'Unit 2 <span style="font-weight: normal;">(Dr. H.C. Taneja)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Tue / Fri</span><span class="opd-badge ot">🔵 <b>OT:</b> Wed / Sat</span><span class="opd-badge round">🔵 <b>Ward:</b> Mon / Thu</span></div>', 
        location: "<b>OPD</b> (Rooms 609-617)<br><b>Ward:</b> Ward 6A, 6B, 7B" 
      },
      { 
        title: 'Unit 3 <span style="font-weight: normal;">(Dr. Ravi Meher)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Wed / Sat</span><span class="opd-badge ot">🔵 <b>OT:</b> Mon / Thu</span><span class="opd-badge round">🔵 <b>Ward:</b> Tue / Fri</span></div>', 
        location: "<b>OPD</b> (Rooms 609-617)<br><b>Ward:</b> Ward 6A, 6B, 7B" 
      }
    ]
  },
  {
    id: "ophtha",
    name: "Ophthalmology OPD, OT & Round Schedule (Guru Nanak Eye Centre)",
    units: [
      { 
        title: 'Unit 1A <span style="font-weight: normal;">(Dr. Paromita Dutta)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Mon & Thu</span><span class="opd-badge ot">🔵 <b>OT:</b> Wed & Sat</span><span class="opd-badge round">🔵 <b>Round:</b> Tue & Fri</span></div>', 
        location: "<b>GNEC OPD :</b>(Rooms 06, 07, 19, 20, 21)<br><b>Ward :</b>" 
      },
      { 
        title: 'Unit 1B <span style="font-weight: normal;">(Dr. Parul Jain)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Mon & Thu</span><span class="opd-badge ot">🔵 <b>OT:</b> Wed & Sat</span><span class="opd-badge round">🔵 <b>Round:</b> Tue & Fri</span></div>', 
        location: "<b>GNEC OPD :</b>(Rooms 10, 12, 16, 17, 18)<br><b>Ward :</b>" 
      },
      { 
        title: 'Unit 2A <span style="font-weight: normal;">(Dr. Kirti Singh)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Tue & Fri</span><span class="opd-badge ot">🔵 <b>OT:</b> Mon & Thu</span><span class="opd-badge round">🔵 <b>Round:</b> Wed & Sat</span></div>', 
        location: "<b>GNEC OPD :</b>(Rooms 06, 07, 19, 20, 21)<br><b>Ward :</b>" 
      },
      { 
        title: 'Unit 2B <span style="font-weight: normal;">(Dr. Punita K. Sodhi)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Tue & Fri</span><span class="opd-badge ot">🔵 <b>OT:</b> Mon & Thu</span><span class="opd-badge round">🔵 <b>Round:</b> Wed & Sat</span></div>', 
        location: "<b>GNEC OPD :</b>(Rooms 10, 12, 16, 17, 18)<br><b>Ward :</b>Ward 1(♂), 4(♀), 5" 
      },
      { 
        title: 'Unit 3A <span style="font-weight: normal;">(Dr. Meenakshi Thakar)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Wed & Sat</span><span class="opd-badge ot">🔵 <b>OT:</b> Tue & Fri</span><span class="opd-badge round">🔵 <b>Round:</b> Mon & Thu</span></div>', 
        location: "<b>GNEC OPD :</b>(Rooms 06, 07, 19, 20, 21)<br><b>Ward :</b>" 
      },
      { 
        title: 'Unit 3B <span style="font-weight: normal;">(Dr. Subhash C. Dadeya)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Wed & Sat</span><span class="opd-badge ot">🔵 <b>OT:</b> Tue & Fri</span><span class="opd-badge round">🔵 <b>Round:</b> Mon & Thu</span></div>', 
        location: "<b>GNEC OPD :</b>(Rooms 10, 12, 16, 17, 18)<br><b>Ward :</b>" 
      }
    ]
  },
  {
    id: "ortho",
    name: "Orthopedics OPD, OT & Emergency Schedule",
    units: [
      { 
        title: 'Orthopedics Unit 1 <span style="font-weight: normal;">(Dr. Lalit Maini)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Tue & Fri</span><span class="opd-badge ot">🔵 <b>OT:</b> Mon & Thu</span><span class="opd-badge round">🔵 <b>Round:</b> Wed & Sat</span></div>', 
        location: "<b>OPD</b> Ortho Block(Rooms 101-104, 111-113, 115)<br><b>Ward :</b>Ward 3A, 3B(♂), 3C(♀), 4A(♂), 4B(♀), 5A(♂), 5B(♀)" 
      },
      { 
        title: 'Orthopedics Unit 2 <span style="font-weight: normal;">(Dr. Abhishek Kashyap)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Wed & Sat</span><span class="opd-badge ot">🔵 <b>OT:</b> Tue & Fri</span><span class="opd-badge round">🔵 <b>Round:</b> Mon & Thu</span></div>', 
        location: "<b>OPD</b> Ortho Block(Rooms 101-104, 111-113, 115)<br><b>Ward :</b>Ward 3A, 3B(♂), 3C(♀), 4A(♂), 4B(♀), 5A(♂), 5B(♀)" 
      },
      { 
        title: 'Orthopedics Unit 3 <span style="font-weight: normal;">(Dr. Sumit Arora)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>OPD:</b> Mon & Thu</span><span class="opd-badge ot">🔵 <b>OT:</b> Wed & Sat</span><span class="opd-badge round">🔵 <b>Round:</b> Tue & Fri</span></div>', 
        location: "<b>OPD</b> Ortho Block(Rooms 101-104, 111-113, 115)<br><b>Ward :</b>Ward 3A, 3B(♂), 3C(♀), 4A(♂), 4B(♀), 5A(♂), 5B(♀)" 
      },
      { 
        title: 'Fracture Clinic <span style="font-weight: normal;">(Dr. Lalit Maini)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat (Morning & Evening Shift)</span></div>', 
        location: "Ortho Block 1st Floor (Room 105)" 
      },
      { 
        title: 'Spine Clinic (Wednesday)', 
        days: '<div class="opd-badges-container"><span class="opd-badge">Wednesday</span></div>', 
        location: "Ortho Block 1st Floor (Room 115)" 
      }
    ]
  },
  {
    id: "derma",
    name: "Dermatology & STD OPD (09:00 AM - 01:00 PM & Special Evening Clinics 02:00 PM - 04:00 PM)",
    units: [
      { title: 'Dermatology & STD Morning OPD <span style="font-weight: normal;">(Dr. K.D. Barman)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat (09:00 AM - 01:00 PM)</span></div>', location: "OPD Block 7th Floor (Rooms 701-720)" },
      { title: 'Leprosy Clinic <span style="font-weight: normal;">(Dr. Laxmi P. Kumar)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Tuesday</span></div>', location: "OPD Block 7th Floor (Room 711)" },
      { title: 'Psoriasis Clinic <span style="font-weight: normal;">(Dr. Deepika Yadav)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Wednesday</span></div>', location: "OPD Block 7th Floor (Room 711)" },
      { title: 'Vitiligo Clinic <span style="font-weight: normal;">(Dr. Laxmi P. Kumar)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Wednesday</span></div>', location: "OPD Block 7th Floor (Room 711)" },
      { title: 'Contact Dermatitis Clinic <span style="font-weight: normal;">(Dr. K.D. Barman)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "OPD Block 7th Floor (Room 711)" },
      { title: 'Connective Tissue Disease Clinic <span style="font-weight: normal;">(Dr. K.D. Barman)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "OPD Block 7th Floor (Room 711)" },
      { title: 'Vesicobullous Disease Clinic <span style="font-weight: normal;">(Dr. K.D. Barman)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "OPD Block 7th Floor (Room 711)" },
      { title: 'Autoimmune Disorders Allergy Clinic <span style="font-weight: normal;">(Dr. Tanvi Dev)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "OPD Block 7th Floor (Room 711)" }
    ]
  },
  {
    id: "gynae",
    name: "Gynecology & Obstetrics OPD, OT & Round Schedule",
    units: [
      { 
        title: 'Unit I <span style="font-weight: normal;">(Dr. Latika Sahu)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>Monday:</b> Gynae OPD</span><span class="opd-badge round">🔵 <b>Tuesday:</b> Teaching / Round</span><span class="opd-badge ot">🔵 <b>Wednesday:</b> Gynae OT</span><span class="opd-badge">🔹 <b>Thursday:</b> ANC OPD</span><span class="opd-badge ot">🔵 <b>Friday:</b> PP OT</span><span class="opd-badge ot">🔵 <b>Saturday:</b> Gynae OT</span></div>', 
        location: "<b>OPD:</b> Rooms 209-214 (Gynae) / 230-235 (ANC)<br><b>OT:</b> Gynae & PP OT" 
      },
      { 
        title: 'Unit II <span style="font-weight: normal;">(Dr. Sangeeta Gupta)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge ot">🔵 <b>Monday:</b> Gynae OT</span><span class="opd-badge">🔹 <b>Tuesday:</b> Gynae OPD</span><span class="opd-badge round">🔵 <b>Wednesday:</b> Teaching / Round</span><span class="opd-badge ot">🔵 <b>Thursday:</b> Gynae OT</span><span class="opd-badge">🔹 <b>Friday:</b> ANC OPD</span><span class="opd-badge ot">🔵 <b>Saturday:</b> PP OT</span></div>', 
        location: "<b>OPD:</b> Rooms 209-214 (Gynae) / 230-235 (ANC)<br><b>OT:</b> Gynae & PP OT" 
      },
      { 
        title: 'Unit III <span style="font-weight: normal;">(Dr. Y.M. Mala)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge ot">🔵 <b>Monday:</b> PP OT</span><span class="opd-badge ot">🔵 <b>Tuesday:</b> Gynae OT</span><span class="opd-badge">🔹 <b>Wednesday:</b> Gynae OPD</span><span class="opd-badge round">🔵 <b>Thursday:</b> Teaching / Round</span><span class="opd-badge ot">🔵 <b>Friday:</b> Gynae OT</span><span class="opd-badge">🔹 <b>Saturday:</b> ANC OPD</span></div>', 
        location: "<b>OPD:</b> Rooms 209-214 (Gynae) / 230-235 (ANC)<br><b>OT:</b> Gynae & PP OT" 
      },
      { 
        title: 'Unit IV <span style="font-weight: normal;">(Dr. Deepti Goswami)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>Monday:</b> ANC OPD</span><span class="opd-badge ot">🔵 <b>Tuesday:</b> PP OT</span><span class="opd-badge ot">🔵 <b>Wednesday:</b> Gynae OT</span><span class="opd-badge">🔹 <b>Thursday:</b> Gynae OPD</span><span class="opd-badge round">🔵 <b>Friday:</b> Teaching / Round</span><span class="opd-badge ot">🔵 <b>Saturday:</b> Gynae OT</span></div>', 
        location: "<b>OPD:</b> Rooms 209-214 (Gynae) / 230-235 (ANC)<br><b>OT:</b> Gynae & PP OT" 
      },
      { 
        title: 'Unit V <span style="font-weight: normal;">(Dr. Madhavi M. Gupta)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge ot">🔵 <b>Monday:</b> Gynae OT</span><span class="opd-badge">🔹 <b>Tuesday:</b> ANC OPD</span><span class="opd-badge ot">🔵 <b>Wednesday:</b> PP OT</span><span class="opd-badge ot">🔵 <b>Thursday:</b> Gynae OT</span><span class="opd-badge">🔹 <b>Friday:</b> Gynae OPD</span><span class="opd-badge round">🔵 <b>Saturday:</b> Teaching / Round</span></div>', 
        location: "<b>OPD:</b> Rooms 209-214 (Gynae) / 230-235 (ANC)<br><b>OT:</b> Gynae & PP OT" 
      },
      { 
        title: 'Unit VI <span style="font-weight: normal;">(Dr. Krishna Agarwal)</span>', 
        days: '<div class="opd-badges-container"><span class="opd-badge round">🔵 <b>Monday:</b> Teaching / Round</span><span class="opd-badge ot">🔵 <b>Tuesday:</b> Gynae OT</span><span class="opd-badge">🔹 <b>Wednesday:</b> ANC OPD</span><span class="opd-badge ot">🔵 <b>Thursday:</b> PP OT</span><span class="opd-badge ot">🔵 <b>Friday:</b> Gynae OT</span><span class="opd-badge">🔹 <b>Saturday:</b> Gynae OPD</span></div>', 
        location: "<b>OPD:</b> Rooms 209-214 (Gynae) / 230-235 (ANC)<br><b>OT:</b> Gynae & PP OT" 
      },
      { title: 'Family Welfare (Male) & Infertility <span style="font-weight: normal;">(Dr. Chandan Kumar)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat</span></div>', location: "OPD Block 1st Floor (Rooms 124 to 129)" },
      { title: 'Family Welfare (Female) <span style="font-weight: normal;">(Dr. Rachana Sharma)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat</span></div>', location: "OPD Block 2nd Floor" },
      { title: 'Reproductive & IVF Centre <span style="font-weight: normal;">(Dr. Deepti)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat</span></div>', location: "B.L. Taneja Block (Ground Floor)" }
    ]
  },
  {
    id: "anaesthesia",
    name: "Anaesthesia & Intensive Care Unit Rotation Schedule",
    units: [
      {
        title: 'Unit 1 <span style="font-weight: normal;">(Dr. Munisha, Dr. Gunjan, Dr. Kapil, Dr. Divya, Dr. Khushboo, Dr. Shivi)</span>',
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>Monday:</b> OT-I (Surgery OT)</span><span class="opd-badge">🔹 <b>Tuesday:</b> OT-II (Ortho OT)</span><span class="opd-badge">🔹 <b>Wednesday:</b> OT-III (Peds & ENT)</span><span class="opd-badge">🔹 <b>Thursday:</b> Gynae OT</span><span class="opd-badge emergency">🚨 <b>Friday:</b> Emergency OT</span><span class="opd-badge">📋 <b>Saturday:</b> PAC</span></div>',
        location: "Main OT Complex / Gynae OT / Casualty OT"
      },
      {
        title: 'Unit II <span style="font-weight: normal;">(Dr. Anju, Dr. Anjli, Dr. Rahil, Dr. Shweta, Dr. Anjali Singh)</span>',
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>Monday:</b> OT-II (Ortho OT)</span><span class="opd-badge">🔹 <b>Tuesday:</b> OT-III (Peds & ENT)</span><span class="opd-badge">🔹 <b>Wednesday:</b> Gynae OT</span><span class="opd-badge emergency">🚨 <b>Thursday:</b> Emergency OT</span><span class="opd-badge">📋 <b>Friday:</b> PAC</span><span class="opd-badge">🔹 <b>Saturday:</b> OT-I (Surgery OT)</span></div>',
        location: "Main OT Complex / Gynae OT / Casualty OT"
      },
      {
        title: 'Unit III <span style="font-weight: normal;">(Dr. ...)</span>',
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 See full rotation</span></div>',
        location: "Main OT Complex / Gynae OT / Casualty OT"
      }
    ]
  },
  
  {
    id: "Radiology",
    name: "Department of Radio-diagnosis Faculty Roster (w.e.f. 04th August, 2026)",
    units: [
      {
        title: 'Dr. Alpana Manchanda / Dr. Radhika Batra <span style="font-weight: normal;">(Rooms 140 / 117)</span>',
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>US & Doppler:</b> Friday</span><span class="opd-badge">🔹 <b>Ward reporting:</b> Saturday</span><span class="opd-badge">🔹 <b>MRI & Mammography:</b> Monday</span><span class="opd-badge">🔹 <b>OPD reporting:</b> Tuesday</span><span class="opd-badge emergency">🚨 <b>Emergency:</b> Wednesday</span><span class="opd-badge">🔹 <b>C.T Scan:</b> Thursday</span></div>',
        location: "Department of Radio-diagnosis (Rooms 140, 117)"
      },
      {
        title: 'Dr. Rashmi Dixit / Dr. Deepika Veerwal <span style="font-weight: normal;">(Rooms 115 / 117)</span>',
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>US & Doppler:</b> Saturday</span><span class="opd-badge">🔹 <b>Ward reporting:</b> Monday</span><span class="opd-badge">🔹 <b>MRI & Mammography:</b> Tuesday</span><span class="opd-badge">🔹 <b>OPD reporting:</b> Wednesday</span><span class="opd-badge emergency">🚨 <b>Emergency:</b> Thursday</span><span class="opd-badge">🔹 <b>C.T Scan:</b> Friday</span></div>',
        location: "Department of Radio-diagnosis (Rooms 115, 117)"
      },
      {
        title: 'Dr. Anjali Prakash <span style="font-weight: normal;">(Room 115)</span>',
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>US & Doppler:</b> Tuesday</span><span class="opd-badge">🔹 <b>Ward reporting:</b> Wednesday</span><span class="opd-badge">🔹 <b>MRI & Mammography:</b> Thursday</span><span class="opd-badge">🔹 <b>OPD reporting:</b> Friday</span><span class="opd-badge emergency">🚨 <b>Emergency:</b> Saturday</span><span class="opd-badge">🔹 <b>C.T Scan:</b> Monday</span></div>',
        location: "Department of Radio-diagnosis (Room 115)"
      },
      {
        title: 'Dr. Sapna Singh <span style="font-weight: normal;">(Room 116)</span>',
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>US & Doppler:</b> Monday</span><span class="opd-badge">🔹 <b>Ward reporting:</b> Tuesday</span><span class="opd-badge">🔹 <b>MRI & Mammography:</b> Wednesday</span><span class="opd-badge">🔹 <b>OPD reporting:</b> Thursday</span><span class="opd-badge emergency">🚨 <b>Emergency:</b> Friday</span><span class="opd-badge">🔹 <b>C.T Scan:</b> Saturday</span></div>',
        location: "Department of Radio-diagnosis (Room 116)"
      },
      {
        title: 'Dr. Jyoti Kumar <span style="font-weight: normal;">(Room 116)</span>',
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>US & Doppler:</b> Wednesday</span><span class="opd-badge">🔹 <b>Ward reporting:</b> Thursday</span><span class="opd-badge">🔹 <b>MRI & Mammography:</b> Friday</span><span class="opd-badge">🔹 <b>OPD reporting:</b> Saturday</span><span class="opd-badge emergency">🚨 <b>Emergency:</b> Monday</span><span class="opd-badge">🔹 <b>C.T Scan:</b> Tuesday</span></div>',
        location: "Department of Radio-diagnosis (Room 116)"
      },
      {
        title: 'Dr. Swati Gupta <span style="font-weight: normal;">(Room 117)</span>',
        days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>US & Doppler:</b> Thursday</span><span class="opd-badge">🔹 <b>Ward reporting:</b> Friday</span><span class="opd-badge">🔹 <b>MRI & Mammography:</b> Saturday</span><span class="opd-badge">🔹 <b>OPD reporting:</b> Monday</span><span class="opd-badge emergency">🚨 <b>Emergency:</b> Tuesday</span><span class="opd-badge">🔹 <b>C.T Scan:</b> Wednesday</span></div>',
        location: "Department of Radio-diagnosis (Room 117)"
      }
    ]
  },
  {
    id: "clinic_ophtha",
    name: "Ophthalmology Special Day-wise Clinics (Guru Nanak Eye Centre)",
    units: [
      { title: 'Monday Special Clinics', days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>Retina Clinic-2:</b> Dr. Meenakshi Thakar (Rooms 104, 107, 108)</span><span class="opd-badge">🔹 <b>Old Squint Clinic:</b> Dr. Subhash Dadeya (Room 207)</span><span class="opd-badge">🔹 <b>POC:</b> Dr. Siddharth Madan (Room 102)</span></div>', location: "GNEC Rooms 102, 104, 107, 108, 207" },
      { title: 'Tuesday Special Clinics', days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>Contact Lens:</b> Dr. Parul Jain (Room 204)</span><span class="opd-badge">🔹 <b>Oculoplasty:</b> Dr. Meenakshi Wadhwani (Rooms 207, 208)</span><span class="opd-badge">🔹 <b>POC + ROP:</b> Dr. Siddharth Madan (Room 102)</span></div>', location: "GNEC Rooms 102, 204, 207, 208" },
      { title: 'Wednesday Special Clinics', days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>Glaucoma:</b> Dr. Kirti Singh (Rooms 202, 203, 204)</span><span class="opd-badge">🔹 <b>Retina Clinic-1:</b> Dr. Punita K. Sodhi (Rooms 104, 107, 108)</span></div>', location: "GNEC Rooms 104, 107, 108, 202, 203, 204" },
      { title: 'Thursday Special Clinics', days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>Retina Clinic-2:</b> Dr. Meenakshi Thakar (Rooms 104, 107, 108)</span><span class="opd-badge">🔹 <b>Squint Clinic:</b> Dr. Subhash Dadeya (Room 207)</span></div>', location: "GNEC Rooms 104, 107, 108, 207" },
      { title: 'Friday Special Clinics', days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>NOC + Squint:</b> Dr. Paromita Dutta (Rooms 102, 207)</span><span class="opd-badge">🔹 <b>Cornea Clinic (10:00 AM):</b> Dr. Parul Jain (Room 208)</span></div>', location: "GNEC Rooms 102, 207, 208" },
      { title: 'Saturday Special Clinics', days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>Retina Clinic-1:</b> Dr. Punita K. Sodhi (Rooms 104, 107, 108)</span></div>', location: "GNEC Rooms 104, 107, 108" },
      { title: 'Daily Special Clinic', days: '<div class="opd-badges-container"><span class="opd-badge">🔹 <b>LVA Clinic:</b> Daily (02:00 PM - 04:00 PM)</span></div>', location: "GNEC Room 204" }
    ]
  },
  {
    id: "peds_med",
    name: "Pediatric Medicine Morning OPD & Daily Clinics (09:00 AM - 01:00 PM)",
    units: [
      { title: 'Peds Medicine <span style="font-weight: normal;">(Dr. Mukta Mantan)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon(Em) / Thu</span></div>', location: "<b>OPD</b>(Rooms 517, 518, 519, 520A, 520B)<br><b>Ward:</b> Ward 13B" },
      { title: 'Peds Medicine <span style="font-weight: normal;">(Dr. Shetal Agarwal)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Wed / Sat(Em)</span></div>', location: "<b>OPD</b>(Rooms 512, 513, 514, 515, 516)<br><b>Ward:</b> Ward 13A" },
      { title: 'Peds Medicine <span style="font-weight: normal;">(Dr. Monica Juneja)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Tue(Em) / Fri</span></div>', location: "<b>OPD</b>(Rooms 512, 513, 514, 515, 516)<br><b>Ward:</b> Ward 15" },
      { title: 'Peds Medicine <span style="font-weight: normal;">(Dr. D. Mishra)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon / Thu(Em)</span></div>', location: "<b>OPD</b>(Rooms 517, 518, 519, 520A, 520B)<br><b>Ward:</b> Ward 19A" },
      { title: 'Peds Medicine <span style="font-weight: normal;">(Dr. K. Rajeshwari)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Wed(Em) / Sat</span></div>', location: "<b>OPD</b>(Rooms 512, 513, 514, 515, 516)<br><b>Ward:</b> Ward 17" },
      { title: 'Peds Medicine <span style="font-weight: normal;">(Dr. Anurag Agarwal)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Tue / Fri(Em)</span></div>', location: "<b>OPD</b>(Rooms 517, 518, 519, 520A, 520B)<br><b>Ward:</b> Ward 19B" },
      { title: 'Medicine Genetic <span style="font-weight: normal;">(Dr. Seema Kapoor / Dr. Amit K. Gupta)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Thu</span></div>', location: "OPD Block 5th Floor (Rooms 735, 743)" },
      { title: 'Child Development Centre (CDC) <span style="font-weight: normal;">(Dr. Monica Juneja / Dr. Arpita Gupta)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon-Fri (09:00 AM - 04:00 PM)</span><span class="opd-badge">Sat (09:00 AM - 01:00 PM)</span></div>', location: "CDC Rooms 01-08 (Near Ward 13B Area)" },
      { title: 'COE-EIC <span style="font-weight: normal;">(Dr. Monica Juneja / Dr. Arpita Gupta)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Daily (09:00 AM - 05:00 PM)</span></div>', location: "3rd Floor Special Ward" },
      { title: 'Immunization Clinic <span style="font-weight: normal;">(Dr. Raghvendra Singh / Dr. Pallavi)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Daily (09:00 AM - 01:00 PM)</span></div>', location: "OPD Block 5th Floor (Room 505)" },
      { title: 'School Health Screening <span style="font-weight: normal;">(All Faculty)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Daily (09:00 AM - 01:00 PM)</span></div>', location: "OPD Block 5th Floor (Room 511)" }
    ]
  },
  {
    id: "peds_surg",
    name: "Pediatric Surgery Morning OPD (09:00 AM - 01:00 PM)",
    units: [
      { title: 'Pediatric Surgery Unit 1 <span style="font-weight: normal;">(Dr. Sujoy Neogi)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Monday</span></div>', location: "OPD Block 5th Floor (Rooms 533, 534)" },
      { title: 'Pediatric Surgery Unit 2 <span style="font-weight: normal;">(Dr. Simmi K. Ratan)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Tue / Fri / Sat</span></div>', location: "OPD Block 5th Floor (Rooms 533, 534)" },
      { title: 'Pediatric Surgery Unit 3 <span style="font-weight: normal;">(Dr. Prafull Kumar)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Wednesday</span></div>', location: "OPD Block 5th Floor (Rooms 533, 534)" },
      { title: 'Pediatric Surgery Unit 4 <span style="font-weight: normal;">(Dr. Chiranjiv Kumar)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Thursday</span></div>', location: "OPD Block 5th Floor (Rooms 533, 534)" }
    ]
  },
  {
    id: "clinic_peds",
    name: "Pediatric Special Evening Clinics (01:00 PM - 04:00 PM)",
    units: [
      { title: 'Pediatric ART Clinic <span style="font-weight: normal;">(Dr. K. Rajeshwari)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Monday</span></div>', location: "OPD Block 6th Floor" },
      { title: 'Peds Genetics Clinic <span style="font-weight: normal;">(Dr. Seema Kapoor / Dr. Amit K. Gupta)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon & Thu</span></div>', location: "OPD Block 5th Floor (Room 515)" },
      { title: 'Peds Neurology Clinic <span style="font-weight: normal;">(Dr. D. Mishra)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "OPD Block 5th Floor (Room 517)" },
      { title: 'Well Baby Clinic <span style="font-weight: normal;">(Dr. Ashish Jain)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Tuesday</span></div>', location: "OPD Block 5th Floor (Rooms 517-518)" },
      { title: 'High Risk Neonate Clinic <span style="font-weight: normal;">(Dr. Ajay Kumar)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "OPD Block 5th Floor (Rooms 511-512)" },
      { title: 'High Risk Clinic <span style="font-weight: normal;">(Dr. Ashish Jain)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "OPD Block 5th Floor (Rooms 517-518)" },
      { title: 'Peds Endocrine Clinic <span style="font-weight: normal;">(Dr. Ashima Dabas)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Monday</span></div>', location: "OPD Block 5th Floor (Rooms 506-514)" },
      { title: 'Peds Cardiology Clinic <span style="font-weight: normal;">(Dr. Anurag Aggarwal)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Monday</span></div>', location: "OPD Block 5th Floor (Room 514)" },
      { title: 'Peds Nephrology Clinic <span style="font-weight: normal;">(Dr. M. Mantan)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Monday</span></div>', location: "OPD Block 5th Floor (Room 515)" },
      { title: 'Peds Gastroenterology Clinic <span style="font-weight: normal;">(Dr. Raghvendra Singh)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "OPD Block 5th Floor (Room 514)" },
      { title: 'Peds Intensive Care (PICU Follow-up) <span style="font-weight: normal;">(Dr. Urmila Jhamb / Dr. R. Saxena / Dr. Pallavi)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "OPD Block 5th Floor (Rooms 512, 513)" },
      { title: 'Peds Pulmonology Clinic <span style="font-weight: normal;">(Dr. Deepak Kumar)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "OPD Block 5th Floor (Room 506 / 512)" },
      { title: 'Peds Oncology Clinic <span style="font-weight: normal;">(Dr. Sujoy Neogi)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Monday</span></div>', location: "OPD Block 5th Floor (Room 535)" },
      { title: 'Peds Urology & Antenatal Clinic & DSD <span style="font-weight: normal;">(Dr. S.K. Ratan)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Tuesday</span></div>', location: "OPD Block 5th Floor (Room 535)" },
      { title: 'GI & Hepatobiliary Clinic <span style="font-weight: normal;">(Dr. S.K. Ratan)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "OPD Block 5th Floor (Room 535)" },
      { title: 'Peds Laparoscopy / Endoscopy Clinic <span style="font-weight: normal;">(Dr. Prafull Kumar)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Wednesday</span></div>', location: "OPD Block 5th Floor (Room 535)" },
      { title: 'Peds Neurosurgery & Lymphatic Vascular Clinic <span style="font-weight: normal;">(Dr. Chiranjiv Kumar)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Thursday</span></div>', location: "OPD Block 5th Floor (Room 535)" }
    ]
  },
  {
    id: "clinic_ent",
    name: "ENT Evening Special Clinics (02:00 PM - 04:00 PM)",
    units: [
      { title: 'Rhinology Clinic <span style="font-weight: normal;">(Dr. H.C. Taneja)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Wednesday</span></div>', location: "OPD Block 6th Floor (Room 609)" },
      { title: 'Vertigo and Audiology Clinic <span style="font-weight: normal;">(Dr. P.K. Rathore)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Wednesday</span></div>', location: "OPD Block 6th Floor (Room 609)" },
      { title: 'Voice and Laryngology Clinic <span style="font-weight: normal;">(Dr. Ravi Mehar)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Monday</span></div>', location: "OPD Block 6th Floor (Room 609)" }
    ]
  },
  {
    id: "clinic_ortho",
    name: "Orthopedics Afternoon Specialty Clinics (02:00 PM - 04:00 PM)",
    units: [
      { title: 'Trauma Clinic <span style="font-weight: normal;">(Dr. Mayank Gupta)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Monday</span></div>', location: "Ortho Block 1st Floor (Room 115)" },
      { title: 'Adult Reconstruction Clinic <span style="font-weight: normal;">(Dr. Lalit Maini)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Tuesday</span></div>', location: "Ortho Block 1st Floor (Room 115)" },
      { title: 'Spine Clinic <span style="font-weight: normal;">(Dr. Abhishek Kashyap)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Wednesday</span></div>', location: "Ortho Block 1st Floor (Room 115)" },
      { title: 'Arthroscopy Sports Injury Clinic <span style="font-weight: normal;">(Dr. Sumit Arora)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Thursday</span></div>', location: "Ortho Block 1st Floor (Room 115)" },
      { title: 'Trauma Clinic <span style="font-weight: normal;">(Dr. Vedpal Yadav)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "Ortho Block 1st Floor (Room 115)" }
    ]
  },
  {
    id: "clinic_gynae",
    name: "Gynecology Special Evening Clinics (02:00 PM - 04:00 PM)",
    units: [
      { title: 'Fertility & ART Clinic <span style="font-weight: normal;">(Dr. Deepti Goswami)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Monday</span></div>', location: "OPD Block 2nd Floor (Rooms 209, 210)" },
      { title: 'Fertility & ART Clinic <span style="font-weight: normal;">(Dr. Madhavi M. Gupta)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Monday</span></div>', location: "OPD Block 2nd Floor (Rooms 213, 214)" },
      { title: 'Gynae Endocrine Clinic <span style="font-weight: normal;">(Dr. Deepti Goswami)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Thursday</span></div>', location: "OPD Block 2nd Floor (Rooms 209, 210)" },
      { title: 'Gynae Endocrine Clinic <span style="font-weight: normal;">(Dr. Madhavi M. Gupta)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Thursday</span></div>', location: "OPD Block 2nd Floor (Rooms 213, 214)" },
      { title: 'High-Risk Pregnancy Clinic <span style="font-weight: normal;">(Dr. Krishna Agarwal)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Thursday</span></div>', location: "OPD Block 2nd Floor (Room 235)" },
      { title: 'High-Risk Pregnancy Clinic <span style="font-weight: normal;">(Dr. Y.M. Mala)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Thursday</span></div>', location: "OPD Block 2nd Floor (Room 234)" },
      { title: 'Fetal Medicine Clinic <span style="font-weight: normal;">(Dr. Krishna Agarwal)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Thursday</span></div>', location: "OPD Block 2nd Floor (Room 235)" },
      { title: 'Fetal Medicine Clinic <span style="font-weight: normal;">(Dr. Sangeeta Gupta)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Thursday</span></div>', location: "OPD Block 2nd Floor (Room 234)" },
      { title: 'Gynecology Cancer Clinic <span style="font-weight: normal;">(Dr. Y.M. Mala)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "OPD Block 2nd Floor (Rooms 209, 210)" },
      { title: 'Gynecology Cancer Clinic <span style="font-weight: normal;">(Dr. Latika Sahu)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "OPD Block 2nd Floor (Rooms 213, 214)" }
    ]
  },
  {
    id: "burns",
    name: "Burns & Plastic Surgery Morning OPD (09:00 AM - 01:00 PM)",
    units: [
      { title: 'Burn and Plastic Surgery <span style="font-weight: normal;">(Dr. Krittika Aggarwal)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon / Thu</span></div>', location: "<b>OPD</b> (Rooms 733, 734)<br><b>Ward:</b> Ward 20" },
      { title: 'Burn and Plastic Surgery <span style="font-weight: normal;">(Dr. Prabhat Shrivastava)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Tue / Fri</span></div>', location: "<b>OPD</b> (Rooms 733, 734)<br><b>Ward:</b> Ward 20" },
      { title: 'Burn and Plastic Surgery <span style="font-weight: normal;">(Dr. Varsha Gupta)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Wed / Sat</span></div>', location: "<b>OPD</b> (Rooms 733, 734)<br><b>Ward:</b> Ward 20" }
    ]
  },
  {
    id: "clinic_other",
    name: "Other Special Clinics, Hospital Units & Support Services",
    units: [
      { title: 'Medical Records Department (MRD) — File & PAC Retrieval', days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat (09:00 AM - 04:00 PM)</span></div>', location: "OPD Building (Ground / Basement Floor)" },
      { title: 'Anti-Retroviral Therapy (ART Centre) <span style="font-weight: normal;">(Dr. S. Anuradha)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat (09:00 AM - 04:00 PM)</span></div>', location: "OPD Block 6th Floor (Room 634)" },
      { title: 'Chest Clinic (DOTS for TB / Tuberculosis) <span style="font-weight: normal;">(Dr. Vishal Khanna)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat</span></div>', location: "Chest Clinic (DOTS Centre), Gate No. 2" },
      { title: 'Radio Diagnosis <span style="font-weight: normal;">(Dr. Gaurav Pradhan)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat</span></div>', location: "Room 137 (Near Gate No. 2)" },
      { title: 'Treatment / Referral of EWS Patients <span style="font-weight: normal;">(Dr. Shagufta Vij)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat</span></div>', location: "OPD Block 4th Floor (Room 423)" },
      { title: 'Covid-19 Sample Collection <span style="font-weight: normal;">(Dr. Shagufta Vij)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Daily (24x7)</span></div>', location: "In front of Main Casualty" },
      { title: 'Nutrition & Diet Counselling <span style="font-weight: normal;">(Dr. Vinita Jayaswal)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat</span></div>', location: "OPD Block 3rd Floor (Room 329)" },
      { title: 'PAC Clinic <span style="font-weight: normal;">(Dr. Mona Arya)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Monday (07:30 AM - 11:30 AM)</span></div>', location: "OPD Block 1st Floor (Room 115)" },
      { title: 'PAC Clinic <span style="font-weight: normal;">(Dr. Neelam Prasad)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Tuesday (07:30 AM - 11:30 AM)</span></div>', location: "OPD Block 1st Floor (Room 115)" },
      { title: 'PAC Clinic <span style="font-weight: normal;">(Dr. Bharti Wadhwa)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Wednesday (07:30 AM - 11:30 AM)</span></div>', location: "OPD Block 1st Floor (Room 117)" },
      { title: 'PAC Clinic <span style="font-weight: normal;">(Dr. Sonia Wadhawan)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Thursday (07:30 AM - 11:30 AM)</span></div>', location: "OPD Block 1st Floor (Room 117)" },
      { title: 'PAC Clinic <span style="font-weight: normal;">(Dr. Anjur Bhalotra)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Friday (07:30 AM - 11:30 AM)</span></div>', location: "OPD Block 1st Floor (Room 117)" },
      { title: 'PAC Clinic <span style="font-weight: normal;">(Dr. Munisha Agarwal)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Saturday (07:30 AM - 11:30 AM)</span></div>', location: "OPD Block 1st Floor (Room 115)" },
      { title: 'Pain Clinic <span style="font-weight: normal;">(Pain OPD)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat (Morning & Evening)</span></div>', location: "OPD Block 1st Floor (Room 121)" },
      { title: 'Anti-Rabies Clinic', days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat (Morning & Evening)</span></div>', location: "Emergency Block (Room 21)" },
      { title: 'Senior Citizen Clinic', days: '<div class="opd-badges-container"><span class="opd-badge">Sunday (08:30 AM - 10:30 AM)</span></div>', location: "OPD Block 1st Floor (Rooms 115, 116, 117)" }
    ]
  },
  {
    id: "clinic_med",
    name: "Medicine Evening Special Clinics (02:00 PM - 04:00 PM)",
    units: [
      { title: 'Pulmonary Clinic <span style="font-weight: normal;">(Dr. Naresh Kumar)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Tue / Thu / Sat (Morning)</span></div>', location: "<b>OPD</b> (Rooms 111, 113)<br><b>Ward:</b> Ward 26" },
      { title: 'Hepatology Clinic <span style="font-weight: normal;">(Dr. S. Anuradha)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat (Morning)</span></div>', location: "OPD Block 1st Floor (Room 139)" },
      { title: 'Diabetes Clinic <span style="font-weight: normal;">(Dr. Sanjay Pandit)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Monday</span></div>', location: "OPD Block 3rd Floor (Rooms 316, 322, 323, 324, 325)" },
      { title: 'Hematology Clinic <span style="font-weight: normal;">(Dr. Sunita Aggarwal)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Tuesday</span></div>', location: "OPD Block 3rd Floor (Rooms 310, 311, 312, 313, 315)" },
      { title: 'Endocrinology Clinic <span style="font-weight: normal;">(Dr. Sandeep Garg)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Wednesday</span></div>', location: "OPD Block 3rd Floor (Rooms 316, 322, 323, 324, 325)" },
      { title: 'Rheumatology Clinic <span style="font-weight: normal;">(Dr. Sumeet Singla)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Thursday</span></div>', location: "OPD Block 3rd Floor (Rooms 316, 322, 323, 324, 325)" },
      { title: 'Nephrology Clinic <span style="font-weight: normal;">(Dr. Anurag Rohtagi)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "OPD Block 3rd Floor (Rooms 310, 311, 312, 313, 315)" }
    ]
  },
  {
    id: "neurosurgery",
    name: "Neurosurgery Clinic (09:00 AM - 01:00 PM & Friday Evening 02:00 PM - 04:00 PM)",
    units: [
      { title: 'Neurosurgery Clinic <span style="font-weight: normal;">(Dr. Chander Shekhar / Dr. P.N. Pandey)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon / Thu / Fri (07:30 AM - 11:30 AM)</span></div>', location: "OPD Block 4th Floor (Rooms 428, 429)" },
      { title: 'Spine and Peds Neurosurgery Clinic <span style="font-weight: normal;">(Dr. Anuj Kumar)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Friday (01:00 PM - 02:00 PM)</span></div>', location: "OPD Block 4th Floor (Rooms 428, 429)" }
    ]
  },
  {
    id: "clinic_surg",
    name: "Surgery Evening Special Clinics (02:00 PM - 04:00 PM)",
    units: [
      { title: 'Male Infertility & Vascular Clinic <span style="font-weight: normal;">(Dr. C.B. Singh)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">1st & 3rd Thursday</span></div>', location: "OPD Block 4th Floor (Room 417)" },
      { title: 'Male Infertility <span style="font-weight: normal;">(Dr. Sushanto Neogi)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">All Fridays</span></div>', location: "OPD Block 4th Floor (Room 417)" },
      { title: 'Metabolic / Bariatric Clinic <span style="font-weight: normal;">(Dr. Anubhav Vindal)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">2nd & 4th Monday</span></div>', location: "OPD Block 4th Floor (Room 410)" },
      { title: 'Breast & Endocrine Clinic <span style="font-weight: normal;">(Dr. Deepak Ghuliani)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Wednesday</span></div>', location: "OPD Block 4th Floor (Room 434)" },
      { title: 'Proctology Clinic <span style="font-weight: normal;">(Dr. Pawan Lal)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Wednesday</span></div>', location: "OPD Block 4th Floor (Room 410)" },
      { title: 'Stoma / Wound Clinic <span style="font-weight: normal;">(Dr. Sushanto Neogi)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">2nd & 4th Monday</span></div>', location: "OPD Block 4th Floor (Room 410)" },
      { title: 'AWR Clinic <span style="font-weight: normal;">(Dr. Rajdeep Singh)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">2nd & 4th Tuesday</span></div>', location: "OPD Block 4th Floor (Room 434)" }
    ]
  },
  {
    id: "radiotherapy",
    name: "Radiotherapy / Oncology Morning OPD (09:00 AM - 01:00 PM)",
    units: [
      { title: 'Radiotherapy / Oncology <span style="font-weight: normal;">(Dr. Arun Kumar Rathi)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon / Wed / Fri</span></div>', location: "OPD Block 6th Floor (Rooms 635, 636)" },
      { title: 'Gynaecology Oncology <span style="font-weight: normal;">(Dr. Anurita Srivastava)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Tue / Thu / Sat</span></div>', location: "OPD Block 6th Floor (Rooms 635, 636)" }
    ]
  },
  {
    id: "gbp_cardio",
    name: "Cardiology OPD & Special Clinics (Rooms 431, 433, 434, 435)",
    units: [
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Jamal Yusuf)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon & Thu</span></div>', location: "Room 431 & 433" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Sumod Kurian)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tue & Fri</span></div>', location: "Room 431" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Vimal Mehta)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Wed & Sat</span></div>', location: "Room 431" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Subrat Kumar Muduli)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tue & Fri</span></div>', location: "Room 433" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Sanjeev Kathuria)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Wed & Sat</span></div>', location: "Room 433" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Ankur Gautam)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Thursday</span></div>', location: "Room 433" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Vishal Batra)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon & Thu</span></div>', location: "Room 434" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Ankit Bansal)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tue & Fri</span></div>', location: "Room 434" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Safal)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Wed & Sat</span></div>', location: "Room 434" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Girish M.P.)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon & Thu</span></div>', location: "Room 435" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Arima Nigam)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tue & Fri</span></div>', location: "Room 435" },
      { title: "Cardiology OPD <span style='font-weight:normal;'>(Dr. Mohit D. Gupta)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Wed & Sat</span></div>', location: "Room 435" },
      { title: "Echocardiography (Echo Routine & Early Date)", days: '<div class="opd-badges-container"><span class="opd-badge">Daily (09:00 AM - 04:00 PM)</span></div>', location: "<b>Echo:</b> Block C. <b>For Early Date:</b> Cath Lab (D-Block 6th Fl or C-Block 2nd Fl)" },
      { title: "Pacemaker Clinic <span style='font-weight:normal;'>(Dr. Ankit Bansal / Dr. Subrat Muduli)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tuesday</span></div>', location: "Room 431" },
      { title: "Pediatric Cardiology Clinic <span style='font-weight:normal;'>(Dr. Sumod Kurian)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "Room 431" },
      { title: "Pacemaker Clinic <span style='font-weight:normal;'>(Dr. Sanjeev Kathuria)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tuesday</span></div>', location: "Room 433" },
      { title: "Pediatric Cardiology Clinic <span style='font-weight:normal;'>(Dr. Safal)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "Room 433" },
      { title: "Pediatric Cardiology Clinic <span style='font-weight:normal;'>(Dr. Arima Nigam)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "Room 435" }
    ]
  },
  {
    id: "gbp_ctvs",
    name: "CTVS OPD & Special Clinics (Rooms 409-410, 412)",
    units: [
      { title: "CTVS OPD <span style='font-weight:normal;'>(Dr. Subodh Satyarthi)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon & Fri</span></div>', location: "Rooms 409-410" },
      { title: "CTVS OPD <span style='font-weight:normal;'>(Dr. Vithal M. Betigeri)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tue & Wed</span></div>', location: "Rooms 409-410" },
      { title: "CTVS OPD <span style='font-weight:normal;'>(Dr. Harpreet Singh)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Thu & Sat</span></div>', location: "Rooms 409-410" },
      { title: "CTVS OPD <span style='font-weight:normal;'>(Dr. Harpreet Singh)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon & Thu</span></div>', location: "Room 412" },
      { title: "CTVS OPD <span style='font-weight:normal;'>(Dr. Saket Agarwal)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tue & Fri</span></div>', location: "Room 412" },
      { title: "CTVS OPD <span style='font-weight:normal;'>(Dr. Karthik P.)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Wednesday</span></div>', location: "Room 412" },
      { title: "CTVS OPD <span style='font-weight:normal;'>(Dr. Sayyed Ehtesham Hussain Naqvi)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Saturday</span></div>', location: "Room 412" },
      { title: "Aorta Clinic (08:00 AM - 11:00 AM)", days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "Room 410" },
      { title: "Heart Failure Clinic (08:00 AM - 11:00 AM)", days: '<div class="opd-badges-container"><span class="opd-badge">Saturday</span></div>', location: "Room 410" }
    ]
  },
  {
    id: "gbp_gastro",
    name: "Gastroenterology OPD & Liver Clinic (Rooms 238, 239, 240)",
    units: [
      { title: "Gastroenterology OPD <span style='font-weight:normal;'>(Dr. Ujjwal Sonika)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon & Thu</span></div>', location: "Rooms 238, 239, 240" },
      { title: "Gastroenterology OPD <span style='font-weight:normal;'>(Dr. Sanjeev Sachdeva)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tue & Fri</span></div>', location: "Rooms 238, 239, 240" },
      { title: "Gastroenterology OPD <span style='font-weight:normal;'>(Dr. Siddharth Srivastava)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Wed & Sat</span></div>', location: "Rooms 238, 239, 240" },
      { title: "Gastroenterology OPD <span style='font-weight:normal;'>(Dr. Ajay Kumar)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tuesday</span></div>', location: "Rooms 238, 239, 240" },
      { title: "Gastroenterology OPD <span style='font-weight:normal;'>(Dr. Ashok Dalal)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Wed & Sat</span></div>', location: "Rooms 238, 239, 240" },
      { title: "Liver Special Clinic <span style='font-weight:normal;'>(Dr. Ajay Kumar / Dr. Ujjwal Sonika)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tuesday</span></div>', location: "Room 240" }
    ]
  },
  {
    id: "gbp_gisurg",
    name: "GI Surgery OPD & Specialty Clinics (Rooms 211, 212, 214, 215)",
    units: [
      { title: "GI Surgery OPD <span style='font-weight:normal;'>(Dr. H.H. Nag)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon, Wed, Fri</span></div>', location: "Rooms 211-212" },
      { title: "GI Surgery OPD <span style='font-weight:normal;'>(Dr. S.S. Saluja)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tue, Thu, Sat</span></div>', location: "Rooms 211-212" },
      { title: "Minimally Invasive Surgery Clinic <span style='font-weight:normal;'>(Dr. H.H. Nag)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon & Sat</span></div>', location: "Rooms 214-215" },
      { title: "Hepatobiliary Cancer & Pancreas Surgery Clinic <span style='font-weight:normal;'>(Dr. S.S. Saluja)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tuesday</span></div>', location: "Rooms 214-215" },
      { title: "Portal Hypertension Clinic <span style='font-weight:normal;'>(Dr. S.S. Saluja)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Thursday</span></div>', location: "Rooms 214-215" },
      { title: "Liver Transplant Clinic <span style='font-weight:normal;'>(Dr. H.H. Nag)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "Rooms 214-215" }
    ]
  },
  {
    id: "gbp_neuro",
    name: "Neurology OPD & Special Clinics (Rooms 326, 327, 328)",
    units: [
      { title: "Neurology OPD <span style='font-weight:normal;'>(Dr. Saman Fatima)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon & Fri</span></div>', location: "Room 326" },
      { title: "Neurology OPD <span style='font-weight:normal;'>(Dr. Agam Jain)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tue & Sat</span></div>', location: "Room 326" },
      { title: "Neurology OPD <span style='font-weight:normal;'>(Dr. Cankatika Choudhary)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Thu & Sat</span></div>', location: "Room 326" },
      { title: "Neurology OPD <span style='font-weight:normal;'>(Dr. Sujata Roshan)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tue & Thu</span></div>', location: "Room 327" },
      { title: "Neurology OPD <span style='font-weight:normal;'>(Dr. Arun Koul)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Wed & Fri</span></div>', location: "Room 327" },
      { title: "Neurology OPD <span style='font-weight:normal;'>(Dr. Swapan Gupta)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon & Wed</span></div>', location: "Room 328" },
      { title: "Neurology OPD <span style='font-weight:normal;'>(Dr. Neera Chaudhary)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tue & Thu</span></div>', location: "Room 328" },
      { title: "Neuro-Immunology Clinic <span style='font-weight:normal;'>(Dr. Arun Koul / Dr. Saman Fatima)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tuesday</span></div>', location: "Room 327" },
      { title: "Stroke Clinic (01:00 PM - 02:00 PM) <span style='font-weight:normal;'>(Dr. Arun Koul)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Thursday</span></div>', location: "Room 327" },
      { title: "Epilepsy Clinic (01:00 PM - 02:00 PM) <span style='font-weight:normal;'>(Dr. Swapan Gupta)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Monday</span></div>', location: "Room 328" },
      { title: "Intractable Epilepsy Clinic <span style='font-weight:normal;'>(Dr. Swapan Gupta)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tuesday</span></div>', location: "Room 328" },
      { title: "MDC Movement Disorder Clinic <span style='font-weight:normal;'>(Dr. Sujata Roshan / Dr. Neera Chaudhary)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Wednesday (01:00 PM - 02:00 PM)</span></div>', location: "Room 328" },
      { title: "Functional Neurological & Paediatric Clinic <span style='font-weight:normal;'>(Dr. Swapan Gupta / Dr. Cankatika)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Thursday</span></div>', location: "Room 328" },
      { title: "Headache Clinic <span style='font-weight:normal;'>(Dr. Sujata Roshan / Dr. Agam Jain)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Friday (10:00 AM)</span></div>', location: "Room 328" }
    ]
  },
  {
    id: "gbp_neurosurg",
    name: "Neurosurgery OPD (Rooms 309-310)",
    units: [
      { title: "Neurosurgery Unit NS-1 <span style='font-weight:normal;'>(Dr. Wajid Nazir)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Monday</span></div>', location: "Rooms 309-310" },
      { title: "Neurosurgery Unit NS-2 <span style='font-weight:normal;'>(Dr. Anita Jagetia)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tuesday</span></div>', location: "Rooms 309-310" },
      { title: "Neurosurgery NS-1 Unit Head <span style='font-weight:normal;'>(Dr. Hukum Singh / Dr. Binita Dholakia)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Wednesday</span></div>', location: "Rooms 309-310" },
      { title: "Neurosurgery OPD <span style='font-weight:normal;'>(Dr. G.D. Singhal)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Thursday</span></div>', location: "Rooms 309-310" },
      { title: "Neurosurgery Unit NS-1 <span style='font-weight:normal;'>(Dr. Shaam Bodeliwala)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "Rooms 309-310" },
      { title: "Neurosurgery Unit NS-2 <span style='font-weight:normal;'>(Dr. Pragyan Sarma)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Saturday</span></div>', location: "Rooms 309-310" }
    ]
  },
  {
    id: "gbp_psychiatry",
    name: "Psychiatry OPD & Special Clinics (Rooms 04A, 4, 6, 8, 15)",
    units: [
      { title: "Psychiatry Morning OPD <span style='font-weight:normal;'>(Dr. Mahima Malhotra)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon, Wed, Fri (09:00 AM)</span></div>', location: "Room 4" },
      { title: "Psychiatry Morning OPD <span style='font-weight:normal;'>(Dr. S. Jena)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tue, Thu, Sat (09:00 AM)</span></div>', location: "Room 4" },
      { title: "Psychiatry OPD <span style='font-weight:normal;'>(Dr. P.S. Biswas)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon, Wed, Fri</span></div>', location: "Room 6" },
      { title: "Psychiatry OPD <span style='font-weight:normal;'>(Dr. Anurag Jhangee)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tue, Thu, Sat</span></div>', location: "Room 6" },
      { title: "Psychiatry OPD <span style='font-weight:normal;'>(Dr. Arunlata Agarwal)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon, Wed, Fri</span></div>', location: "Room 15" },
      { title: "Psychiatry OPD <span style='font-weight:normal;'>(Dr. Amandeep Goyal)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tue, Thu, Sat</span></div>', location: "Room 8" },
      { title: "Child Psychiatry Clinic <span style='font-weight:normal;'>(Dr. S. Jena / Dr. Anurag Jhangee / Dr. Amandeep Goyal)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Tuesday</span></div>', location: "Room 04A" },
      { title: "De-addiction Clinic <span style='font-weight:normal;'>(Dr. P.S. Biswas / Dr. Mahima Malhotra)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Wednesday</span></div>', location: "Room 6" }
    ]
  },
  {
    id: "gbp_pain",
    name: "Pain Clinic (Room 419)",
    units: [
      { title: "Pain Clinic <span style='font-weight:normal;'>(Dr. Monica S. Tandon)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Thursday</span></div>', location: "Room 419" },
      { title: "Pain Clinic <span style='font-weight:normal;'>(Dr. Som Chandra)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Friday</span></div>', location: "Room 419" }
    ]
  },
  {
    id: "maids_opd",
    name: "MAIDS Dental OPD Schedule (Reg: Mon-Sat 08:30 AM - 10:30 AM | Ground Floor)",
    units: [
      { title: "Oral Medicine and Radiology <span style='font-weight:normal;'>(Dr. Sunita Gupta)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat (09:00 AM - 01:00 PM)</span></div>', location: "Ground Floor" },
      { title: "Oral and Maxillofacial Surgery <span style='font-weight:normal;'>(Dr. Sujata Mohanty)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat (09:00 AM - 01:00 PM)</span></div>', location: "1st Floor" },
      { title: "Prosthodontics <span style='font-weight:normal;'>(Dr. Rekha Gupta)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat (09:00 AM - 01:00 PM)</span></div>', location: "2nd Floor" },
      { title: "Conservative Dentistry and Endodontics <span style='font-weight:normal;'>(Dr. Ruchika Roongta Nawal)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat (09:00 AM - 01:00 PM)</span></div>', location: "3rd Floor" },
      { title: "Orthodontics <span style='font-weight:normal;'>(Dr. Priyank Rai)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat (09:00 AM - 01:00 PM)</span></div>', location: "4th Floor" },
      { title: "Pediatric & Preventive Dentistry <span style='font-weight:normal;'>(Dr. Mridula Goswami)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat (09:00 AM - 01:00 PM)</span></div>', location: "5th Floor" },
      { title: "Periodontology <span style='font-weight:normal;'>(Dr. Arundeep Kaur)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat (09:00 AM - 01:00 PM)</span></div>', location: "6th Floor" },
      { title: "Oral Pathology & Microbiology <span style='font-weight:normal;'>(Dr. Aadithya B Urs)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat (09:00 AM - 01:00 PM)</span></div>', location: "7th Floor" },
      { title: "Public Health Dentistry <span style='font-weight:normal;'>(Dr. Vikrant Ranjan Mohanty)</span>", days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat (09:00 AM - 01:00 PM)</span></div>', location: "5th Floor" }
    ]
  },
  {
    id: "panchkarma",
    name: "Panchkarma Morning OPD (09:00 AM - 01:00 PM)",
    units: [
      { title: 'Panchkarma (Ayurvedic) <span style="font-weight: normal;">(Dr. Akhilesh Vashishtha / Dr. A.C. Vashishtha)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat</span></div>', location: "OPD Block 7th Floor (Rooms 736 to 739)" }
    ]
  },
  {
    id: "unani",
    name: "Unani Morning OPD (09:00 AM - 01:00 PM)",
    units: [
      { title: 'Unani Clinic <span style="font-weight: normal;">(Dr. Azra Anjum / Dr. Farha Yousuf)</span>', days: '<div class="opd-badges-container"><span class="opd-badge">Mon to Sat (Special: Mon, Wed, Fri)</span></div>', location: "OPD Block 7th Floor (Room 742)" }
    ]
  }
];
