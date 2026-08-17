const peripheryRosterMap = {
  // ================= BATCH A (WEEKS 1 - 13) =================
  A10: [
    { start: "2026-05-23", end: "2026-05-29", center: "RHTC Barwala" },
    { start: "2026-05-30", end: "2026-06-05", center: "UHTC Gokulpuri" },
    { start: "2026-06-06", end: "2026-06-12", center: "Delhi Gate / Balmiki Basti" }
  ],
  A11: [
    { start: "2026-05-23", end: "2026-05-29", center: "UHTC Gokulpuri" },
    { start: "2026-05-30", end: "2026-06-05", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-06-06", end: "2026-06-12", center: "RHTC Barwala" }
  ],
  A12: [
    { start: "2026-05-23", end: "2026-05-29", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-05-30", end: "2026-06-05", center: "RHTC Barwala" },
    { start: "2026-06-06", end: "2026-06-12", center: "UHTC Gokulpuri" }
  ],
  A1: [
    { start: "2026-06-13", end: "2026-06-19", center: "RHTC Barwala" },
    { start: "2026-06-20", end: "2026-06-26", center: "UHTC Gokulpuri" },
    { start: "2026-06-27", end: "2026-07-03", center: "Delhi Gate / Balmiki Basti" }
  ],
  A2: [
    { start: "2026-06-13", end: "2026-06-19", center: "UHTC Gokulpuri" },
    { start: "2026-06-20", end: "2026-06-26", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-06-27", end: "2026-07-03", center: "RHTC Barwala" }
  ],
  A3: [
    { start: "2026-06-13", end: "2026-06-19", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-06-20", end: "2026-06-26", center: "RHTC Barwala" },
    { start: "2026-06-27", end: "2026-07-03", center: "UHTC Gokulpuri" }
  ],
  A4: [
    { start: "2026-07-04", end: "2026-07-10", center: "RHTC Barwala" },
    { start: "2026-07-11", end: "2026-07-17", center: "UHTC Gokulpuri" },
    { start: "2026-07-18", end: "2026-07-24", center: "Delhi Gate / Balmiki Basti" }
  ],
  A5: [
    { start: "2026-07-04", end: "2026-07-10", center: "UHTC Gokulpuri" },
    { start: "2026-07-11", end: "2026-07-17", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-07-18", end: "2026-07-24", center: "RHTC Barwala" }
  ],
  A6: [
    { start: "2026-07-04", end: "2026-07-10", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-07-11", end: "2026-07-17", center: "RHTC Barwala" },
    { start: "2026-07-18", end: "2026-07-24", center: "UHTC Gokulpuri" }
  ],
  A7: [
    { start: "2026-07-25", end: "2026-07-31", center: "RHTC Barwala" },
    { start: "2026-08-01", end: "2026-08-07", center: "UHTC Gokulpuri" },
    { start: "2026-08-08", end: "2026-08-14", center: "Delhi Gate / Balmiki Basti" }
  ],
  A8: [
    { start: "2026-07-25", end: "2026-07-31", center: "UHTC Gokulpuri" },
    { start: "2026-08-01", end: "2026-08-07", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-08-08", end: "2026-08-14", center: "RHTC Barwala" }
  ],
  A9: [
    { start: "2026-07-25", end: "2026-07-31", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-08-01", end: "2026-08-07", center: "RHTC Barwala" },
    { start: "2026-08-08", end: "2026-08-14", center: "UHTC Gokulpuri" }
  ],

  // ================= BATCH B (WEEKS 14 - 26) =================
  B10: [
    { start: "2026-08-22", end: "2026-08-28", center: "RHTC Barwala" },
    { start: "2026-08-29", end: "2026-09-04", center: "UHTC Gokulpuri" },
    { start: "2026-09-05", end: "2026-09-11", center: "Delhi Gate / Balmiki Basti" }
  ],
  B11: [
    { start: "2026-08-22", end: "2026-08-28", center: "UHTC Gokulpuri" },
    { start: "2026-08-29", end: "2026-09-04", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-09-05", end: "2026-09-11", center: "RHTC Barwala" }
  ],
  B12: [
    { start: "2026-08-22", end: "2026-08-28", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-08-29", end: "2026-09-04", center: "RHTC Barwala" },
    { start: "2026-09-05", end: "2026-09-11", center: "UHTC Gokulpuri" }
  ],
  B1: [
    { start: "2026-09-12", end: "2026-09-18", center: "RHTC Barwala" },
    { start: "2026-09-19", end: "2026-09-25", center: "UHTC Gokulpuri" },
    { start: "2026-09-26", end: "2026-10-02", center: "Delhi Gate / Balmiki Basti" }
  ],
  B2: [
    { start: "2026-09-12", end: "2026-09-18", center: "UHTC Gokulpuri" },
    { start: "2026-09-19", end: "2026-09-25", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-09-26", end: "2026-10-02", center: "RHTC Barwala" }
  ],
  B3: [
    { start: "2026-09-12", end: "2026-09-18", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-09-19", end: "2026-09-25", center: "RHTC Barwala" },
    { start: "2026-09-26", end: "2026-10-02", center: "UHTC Gokulpuri" }
  ],
  B4: [
    { start: "2026-10-03", end: "2026-10-09", center: "RHTC Barwala" },
    { start: "2026-10-10", end: "2026-10-16", center: "UHTC Gokulpuri" },
    { start: "2026-10-17", end: "2026-10-23", center: "Delhi Gate / Balmiki Basti" }
  ],
  B5: [
    { start: "2026-10-03", end: "2026-10-09", center: "UHTC Gokulpuri" },
    { start: "2026-10-10", end: "2026-10-16", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-10-17", end: "2026-10-23", center: "RHTC Barwala" }
  ],
  B6: [
    { start: "2026-10-03", end: "2026-10-09", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-10-10", end: "2026-10-16", center: "RHTC Barwala" },
    { start: "2026-10-17", end: "2026-10-23", center: "UHTC Gokulpuri" }
  ],
  B7: [
    { start: "2026-10-24", end: "2026-10-30", center: "RHTC Barwala" },
    { start: "2026-10-31", end: "2026-11-06", center: "UHTC Gokulpuri" },
    { start: "2026-11-07", end: "2026-11-13", center: "Delhi Gate / Balmiki Basti" }
  ],
  B8: [
    { start: "2026-10-24", end: "2026-10-30", center: "UHTC Gokulpuri" },
    { start: "2026-10-31", end: "2026-11-06", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-11-07", end: "2026-11-13", center: "RHTC Barwala" }
  ],
  B9: [
    { start: "2026-10-24", end: "2026-10-30", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-10-31", end: "2026-11-06", center: "RHTC Barwala" },
    { start: "2026-11-07", end: "2026-11-13", center: "UHTC Gokulpuri" }
  ],

  // ================= BATCH C (WEEKS 27 - 39) =================
  C10: [
    { start: "2026-11-21", end: "2026-11-27", center: "RHTC Barwala" },
    { start: "2026-11-28", end: "2026-12-04", center: "UHTC Gokulpuri" },
    { start: "2026-12-05", end: "2026-12-11", center: "Delhi Gate / Balmiki Basti" }
  ],
  C11: [
    { start: "2026-11-21", end: "2026-11-27", center: "UHTC Gokulpuri" },
    { start: "2026-11-28", end: "2026-12-04", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-12-05", end: "2026-12-11", center: "RHTC Barwala" }
  ],
  C12: [
    { start: "2026-11-21", end: "2026-11-27", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-11-28", end: "2026-12-04", center: "RHTC Barwala" },
    { start: "2026-12-05", end: "2026-12-11", center: "UHTC Gokulpuri" }
  ],
  C1: [
    { start: "2026-12-12", end: "2026-12-18", center: "RHTC Barwala" },
    { start: "2026-12-19", end: "2026-12-25", center: "UHTC Gokulpuri" },
    { start: "2026-12-26", end: "2027-01-01", center: "Delhi Gate / Balmiki Basti" }
  ],
  C2: [
    { start: "2026-12-12", end: "2026-12-18", center: "UHTC Gokulpuri" },
    { start: "2026-12-19", end: "2026-12-25", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-12-26", end: "2027-01-01", center: "RHTC Barwala" }
  ],
  C3: [
    { start: "2026-12-12", end: "2026-12-18", center: "Delhi Gate / Balmiki Basti" },
    { start: "2026-12-19", end: "2026-12-25", center: "RHTC Barwala" },
    { start: "2026-12-26", end: "2027-01-01", center: "UHTC Gokulpuri" }
  ],
  C4: [
    { start: "2027-01-02", end: "2027-01-08", center: "RHTC Barwala" },
    { start: "2027-01-09", end: "2027-01-15", center: "UHTC Gokulpuri" },
    { start: "2027-01-16", end: "2027-01-22", center: "Delhi Gate / Balmiki Basti" }
  ],
  C5: [
    { start: "2027-01-02", end: "2027-01-08", center: "UHTC Gokulpuri" },
    { start: "2027-01-09", end: "2027-01-15", center: "Delhi Gate / Balmiki Basti" },
    { start: "2027-01-16", end: "2027-01-22", center: "RHTC Barwala" }
  ],
  C6: [
    { start: "2027-01-02", end: "2027-01-08", center: "Delhi Gate / Balmiki Basti" },
    { start: "2027-01-09", end: "2027-01-15", center: "RHTC Barwala" },
    { start: "2027-01-16", end: "2027-01-22", center: "UHTC Gokulpuri" }
  ],
  C7: [
    { start: "2027-01-23", end: "2027-01-29", center: "RHTC Barwala" },
    { start: "2027-01-30", end: "2027-02-05", center: "UHTC Gokulpuri" },
    { start: "2027-02-06", end: "2027-02-12", center: "Delhi Gate / Balmiki Basti" }
  ],
  C8: [
    { start: "2027-01-23", end: "2027-01-29", center: "UHTC Gokulpuri" },
    { start: "2027-01-30", end: "2027-02-05", center: "Delhi Gate / Balmiki Basti" },
    { start: "2027-02-06", end: "2027-02-12", center: "RHTC Barwala" }
  ],
  C9: [
    { start: "2027-01-23", end: "2027-01-29", center: "Delhi Gate / Balmiki Basti" },
    { start: "2027-01-30", end: "2027-02-05", center: "RHTC Barwala" },
    { start: "2027-02-06", end: "2027-02-12", center: "UHTC Gokulpuri" }
  ],

  // ================= BATCH D (WEEKS 40 - 52) =================
  D10: [
    { start: "2027-02-20", end: "2027-02-26", center: "RHTC Barwala" },
    { start: "2027-02-27", end: "2027-03-05", center: "UHTC Gokulpuri" },
    { start: "2027-03-06", end: "2027-03-12", center: "Delhi Gate / Balmiki Basti" }
  ],
  D11: [
    { start: "2027-02-20", end: "2027-02-26", center: "UHTC Gokulpuri" },
    { start: "2027-02-27", end: "2027-03-05", center: "Delhi Gate / Balmiki Basti" },
    { start: "2027-03-06", end: "2027-03-12", center: "RHTC Barwala" }
  ],
  D12: [
    { start: "2027-02-20", end: "2027-02-26", center: "Delhi Gate / Balmiki Basti" },
    { start: "2027-02-27", end: "2027-03-05", center: "RHTC Barwala" },
    { start: "2027-03-06", end: "2027-03-12", center: "UHTC Gokulpuri" }
  ],
  D1: [
    { start: "2027-03-13", end: "2027-03-19", center: "RHTC Barwala" },
    { start: "2027-03-20", end: "2027-03-26", center: "UHTC Gokulpuri" },
    { start: "2027-03-27", end: "2027-04-02", center: "Delhi Gate / Balmiki Basti" }
  ],
  D2: [
    { start: "2027-03-13", end: "2027-03-19", center: "UHTC Gokulpuri" },
    { start: "2027-03-20", end: "2027-03-26", center: "Delhi Gate / Balmiki Basti" },
    { start: "2027-03-27", end: "2027-04-02", center: "RHTC Barwala" }
  ],
  D3: [
    { start: "2027-03-13", end: "2027-03-19", center: "Delhi Gate / Balmiki Basti" },
    { start: "2027-03-20", end: "2027-03-26", center: "RHTC Barwala" },
    { start: "2027-03-27", end: "2027-04-02", center: "UHTC Gokulpuri" }
  ],
  D4: [
    { start: "2027-04-03", end: "2027-04-09", center: "RHTC Barwala" },
    { start: "2027-04-10", end: "2027-04-16", center: "UHTC Gokulpuri" },
    { start: "2027-04-17", end: "2027-04-23", center: "Delhi Gate / Balmiki Basti" }
  ],
  D5: [
    { start: "2027-04-03", end: "2027-04-09", center: "UHTC Gokulpuri" },
    { start: "2027-04-10", end: "2027-04-16", center: "Delhi Gate / Balmiki Basti" },
    { start: "2027-04-17", end: "2027-04-23", center: "RHTC Barwala" }
  ],
  D6: [
    { start: "2027-04-03", end: "2027-04-09", center: "Delhi Gate / Balmiki Basti" },
    { start: "2027-04-10", end: "2027-04-16", center: "RHTC Barwala" },
    { start: "2027-04-17", end: "2027-04-23", center: "UHTC Gokulpuri" }
  ],
  D7: [
    { start: "2027-04-24", end: "2027-04-30", center: "RHTC Barwala" },
    { start: "2027-05-01", end: "2027-05-07", center: "UHTC Gokulpuri" },
    { start: "2027-05-08", end: "2027-05-14", center: "Delhi Gate / Balmiki Basti" }
  ],
  D8: [
    { start: "2027-04-24", end: "2027-04-30", center: "UHTC Gokulpuri" },
    { start: "2027-05-01", end: "2027-05-07", center: "Delhi Gate / Balmiki Basti" },
    { start: "2027-05-08", end: "2027-05-14", center: "RHTC Barwala" }
  ],
  D9: [
    { start: "2027-04-24", end: "2027-04-30", center: "Delhi Gate / Balmiki Basti" },
    { start: "2027-05-01", end: "2027-05-07", center: "RHTC Barwala" },
    { start: "2027-05-08", end: "2027-05-14", center: "UHTC Gokulpuri" }
  ]
};
  // 52 WEEK DATES DATABASE
  const weeksData = [
    { wk: 1, start: "2026-05-23", end: "2026-05-29", block: "Block 1" },
    { wk: 2, start: "2026-05-30", end: "2026-06-05", block: "Block 1" },
    { wk: 3, start: "2026-06-06", end: "2026-06-12", block: "Block 1" },
    { wk: 4, start: "2026-06-13", end: "2026-06-19", block: "Block 1" },
    { wk: 5, start: "2026-06-20", end: "2026-06-26", block: "Block 1" },
    { wk: 6, start: "2026-06-27", end: "2026-07-03", block: "Block 1" },
    { wk: 7, start: "2026-07-04", end: "2026-07-10", block: "Block 1" },
    { wk: 8, start: "2026-07-11", end: "2026-07-17", block: "Block 1" },
    { wk: 9, start: "2026-07-18", end: "2026-07-24", block: "Block 1" },
    { wk: 10, start: "2026-07-25", end: "2026-07-31", block: "Block 1" },
    { wk: 11, start: "2026-08-01", end: "2026-08-07", block: "Block 1" },
    { wk: 12, start: "2026-08-08", end: "2026-08-14", block: "Block 1" },
    { wk: 13, start: "2026-08-15", end: "2026-08-21", block: "Block 1" },
    { wk: 14, start: "2026-08-22", end: "2026-08-28", block: "Block 2" },
    { wk: 15, start: "2026-08-29", end: "2026-09-04", block: "Block 2" },
    { wk: 16, start: "2026-09-05", end: "2026-09-11", block: "Block 2" },
    { wk: 17, start: "2026-09-12", end: "2026-09-18", block: "Block 2" },
    { wk: 18, start: "2026-09-19", end: "2026-09-25", block: "Block 2" },
    { wk: 19, start: "2026-09-26", end: "2026-10-02", block: "Block 2" },
    { wk: 20, start: "2026-10-03", end: "2026-10-09", block: "Block 2" },
    { wk: 21, start: "2026-10-10", end: "2026-10-16", block: "Block 2" },
    { wk: 22, start: "2026-10-17", end: "2026-10-23", block: "Block 2" },
    { wk: 23, start: "2026-10-24", end: "2026-10-30", block: "Block 2" },
    { wk: 24, start: "2026-10-31", end: "2026-11-06", block: "Block 2" },
    { wk: 25, start: "2026-11-07", end: "2026-11-13", block: "Block 2" },
    { wk: 26, start: "2026-11-14", end: "2026-11-20", block: "Block 2" },
    { wk: 27, start: "2026-11-21", end: "2026-11-27", block: "Block 3" },
    { wk: 28, start: "2026-11-28", end: "2026-12-04", block: "Block 3" },
    { wk: 29, start: "2026-12-05", end: "2026-12-11", block: "Block 3" },
    { wk: 30, start: "2026-12-12", end: "2026-12-18", block: "Block 3" },
    { wk: 31, start: "2026-12-19", end: "2026-12-25", block: "Block 3" },
    { wk: 32, start: "2026-12-26", end: "2027-01-01", block: "Block 3" },
    { wk: 33, start: "2027-01-02", end: "2027-01-08", block: "Block 3" },
    { wk: 34, start: "2027-01-09", end: "2027-01-15", block: "Block 3" },
    { wk: 35, start: "2027-01-16", end: "2027-01-22", block: "Block 3" },
    { wk: 36, start: "2027-01-23", end: "2027-01-29", block: "Block 3" },
    { wk: 37, start: "2027-01-30", end: "2027-02-05", block: "Block 3" },
    { wk: 38, start: "2027-02-06", end: "2027-02-12", block: "Block 3" },
    { wk: 39, start: "2027-02-13", end: "2027-02-19", block: "Block 3" },
    { wk: 40, start: "2027-02-20", end: "2027-02-26", block: "Block 4" },
    { wk: 41, start: "2027-02-27", end: "2027-03-05", block: "Block 4" },
    { wk: 42, start: "2027-03-06", end: "2027-03-12", block: "Block 4" },
    { wk: 43, start: "2027-03-13", end: "2027-03-19", block: "Block 4" },
    { wk: 44, start: "2027-03-20", end: "2027-03-26", block: "Block 4" },
    { wk: 45, start: "2027-03-27", end: "2027-04-02", block: "Block 4" },
    { wk: 46, start: "2027-04-03", end: "2027-04-09", block: "Block 4" },
    { wk: 47, start: "2027-04-10", end: "2027-04-16", block: "Block 4" },
    { wk: 48, start: "2027-04-17", end: "2027-04-23", block: "Block 4" },
    { wk: 49, start: "2027-04-24", end: "2027-04-30", block: "Block 4" },
    { wk: 50, start: "2027-05-01", end: "2027-05-07", block: "Block 4" },
    { wk: 51, start: "2027-05-08", end: "2027-05-14", block: "Block 4" },
    { wk: 52, start: "2027-05-15", end: "2027-05-22", block: "Block 4" }
  ];

  const Block1 = {
    weeks: ["Week1","Week2","Week3","Week4","Week5","Week6","Week7","Week8","Week9","Week10","Week11","Week12","Week13"],
    A: {
      A1:  {Week1:"Forensic", Week2:"PSM", Week3:"PSM", Week4:"PSM", Week5:"PSM", Week6:"PSM", Week7:"PSM", Week8:"PSM", Week9:"PSM", Week10:"PSM", Week11:"PSM", Week12:"PSM", Week13:"PSM"},
      A2:  {Week1:"PSM", Week2:"Forensic", Week3:"PSM", Week4:"PSM", Week5:"PSM", Week6:"PSM", Week7:"PSM", Week8:"PSM", Week9:"PSM", Week10:"PSM", Week11:"PSM", Week12:"PSM", Week13:"PSM"},
      A3:  {Week1:"PSM", Week2:"PSM", Week3:"Forensic", Week4:"PSM", Week5:"PSM", Week6:"PSM", Week7:"PSM", Week8:"PSM", Week9:"PSM", Week10:"PSM", Week11:"PSM", Week12:"PSM", Week13:"PSM"},
      A4:  {Week1:"PSM", Week2:"PSM", Week3:"PSM", Week4:"Forensic", Week5:"PSM", Week6:"PSM", Week7:"PSM", Week8:"PSM", Week9:"PSM", Week10:"PSM", Week11:"PSM", Week12:"PSM", Week13:"PSM"},
      A5:  {Week1:"PSM", Week2:"PSM", Week3:"PSM", Week4:"PSM", Week5:"Forensic", Week6:"PSM", Week7:"PSM", Week8:"PSM", Week9:"PSM", Week10:"PSM", Week11:"PSM", Week12:"PSM", Week13:"PSM"},
      A6:  {Week1:"PSM", Week2:"PSM", Week3:"PSM", Week4:"PSM", Week5:"PSM", Week6:"Forensic", Week7:"PSM", Week8:"PSM", Week9:"PSM", Week10:"PSM", Week11:"PSM", Week12:"PSM", Week13:"PSM"},
      A7:  {Week1:"PSM", Week2:"PSM", Week3:"PSM", Week4:"PSM", Week5:"PSM", Week6:"PSM", Week7:"Forensic", Week8:"PSM", Week9:"PSM", Week10:"PSM", Week11:"PSM", Week12:"PSM", Week13:"PSM"},
      A8:  {Week1:"PSM", Week2:"PSM", Week3:"PSM", Week4:"PSM", Week5:"PSM", Week6:"PSM", Week7:"PSM", Week8:"Forensic", Week9:"PSM", Week10:"PSM", Week11:"PSM", Week12:"PSM", Week13:"PSM"},
      A9:  {Week1:"PSM", Week2:"PSM", Week3:"PSM", Week4:"PSM", Week5:"PSM", Week6:"PSM", Week7:"PSM", Week8:"PSM", Week9:"Forensic", Week10:"PSM", Week11:"PSM", Week12:"PSM", Week13:"PSM"},
      A10: {Week1:"PSM", Week2:"PSM", Week3:"PSM", Week4:"PSM", Week5:"PSM", Week6:"PSM", Week7:"PSM", Week8:"PSM", Week9:"PSM", Week10:"Forensic", Week11:"PSM", Week12:"PSM", Week13:"PSM"},
      A11: {Week1:"PSM", Week2:"PSM", Week3:"PSM", Week4:"PSM", Week5:"PSM", Week6:"PSM", Week7:"PSM", Week8:"PSM", Week9:"PSM", Week10:"PSM", Week11:"Forensic", Week12:"PSM", Week13:"PSM"},
      A12: {Week1:"PSM", Week2:"PSM", Week3:"PSM", Week4:"PSM", Week5:"PSM", Week6:"PSM", Week7:"PSM", Week8:"PSM", Week9:"PSM", Week10:"PSM", Week11:"PSM", Week12:"Forensic", Week13:"PSM"}
    },
    B: {
      B1:  {Week1:"DVL", Week2:"MED", Week3:"MED", Week4:"MED", Week5:"MED", Week6:"MED", Week7:"MED", Week8:"Surgery", Week9:"Surgery", Week10:"Surgery", Week11:"Surgery", Week12:"Surgery", Week13:"Surgery"},
      B2:  {Week1:"MED", Week2:"DVL", Week3:"MED", Week4:"MED", Week5:"MED", Week6:"MED", Week7:"MED", Week8:"Surgery", Week9:"Surgery", Week10:"Surgery", Week11:"Surgery", Week12:"Surgery", Week13:"Surgery"},
      B3:  {Week1:"MED", Week2:"MED", Week3:"DVL", Week4:"MED", Week5:"MED", Week6:"MED", Week7:"MED", Week8:"Surgery", Week9:"Surgery", Week10:"Surgery", Week11:"Surgery", Week12:"Surgery", Week13:"Surgery"},
      B4:  {Week1:"MED", Week2:"MED", Week3:"MED", Week4:"MED", Week5:"MED", Week6:"MED", Week7:"DVL", Week8:"Surgery", Week9:"Surgery", Week10:"Surgery", Week11:"Surgery", Week12:"Surgery", Week13:"Surgery"},
      B5:  {Week1:"MED", Week2:"MED", Week3:"MED", Week4:"MED", Week5:"MED", Week6:"MED", Week7:"Surgery", Week8:"DVL", Week9:"Surgery", Week10:"Surgery", Week11:"Surgery", Week12:"Surgery", Week13:"Surgery"},
      B6:  {Week1:"MED", Week2:"MED", Week3:"MED", Week4:"MED", Week5:"MED", Week6:"MED", Week7:"Surgery", Week8:"Surgery", Week9:"DVL", Week10:"Surgery", Week11:"Surgery", Week12:"Surgery", Week13:"Surgery"},
      B7:  {Week1:"Surgery", Week2:"Surgery", Week3:"Surgery", Week4:"Surgery", Week5:"Surgery", Week6:"Surgery", Week7:"MED", Week8:"MED", Week9:"MED", Week10:"MED", Week11:"DVL", Week12:"MED", Week13:"MED"},
      B8:  {Week1:"Surgery", Week2:"Surgery", Week3:"Surgery", Week4:"Surgery", Week5:"Surgery", Week6:"Surgery", Week7:"MED", Week8:"MED", Week9:"MED", Week10:"MED", Week11:"MED", Week12:"DVL", Week13:"MED"},
      B9:  {Week1:"Surgery", Week2:"Surgery", Week3:"Surgery", Week4:"Surgery", Week5:"Surgery", Week6:"Surgery", Week7:"MED", Week8:"MED", Week9:"MED", Week10:"MED", Week11:"MED", Week12:"MED", Week13:"DVL"},
      B10: {Week1:"Surgery", Week2:"Surgery", Week3:"Surgery", Week4:"DVL", Week5:"Surgery", Week6:"Surgery", Week7:"Surgery", Week8:"MED", Week9:"MED", Week10:"MED", Week11:"MED", Week12:"MED", Week13:"MED"},
      B11: {Week1:"Surgery", Week2:"Surgery", Week3:"Surgery", Week4:"Surgery", Week5:"DVL", Week6:"Surgery", Week7:"Surgery", Week8:"MED", Week9:"MED", Week10:"MED", Week11:"MED", Week12:"MED", Week13:"MED"},
      B12: {Week1:"Surgery", Week2:"Surgery", Week3:"Surgery", Week4:"Surgery", Week5:"Surgery", Week6:"DVL", Week7:"Surgery", Week8:"MED", Week9:"MED", Week10:"MED", Week11:"MED", Week12:"MED", Week13:"MED"}
    }
  };

  const Block1CD = {
    weeks: ["Week1","Week2","Week3","Week4","Week5","Week6","Week7","Week8","Week9","Week10","Week11","Week12","Week13"],
    C: {
      C1:  {Week1:"ObsGynae", Week2:"ObsGynae", Week3:"ObsGynae", Week4:"ObsGynae", Week5:"ObsGynae", Week6:"ObsGynae", Week7:"ObsGynae", Week8:"Radiology", Week9:"Radiology", Week10:"Pulm Med", Week11:"Pulm Med", Week12:"Psychiatry", Week13:"Psychiatry"},
      C2:  {Week1:"ObsGynae", Week2:"ObsGynae", Week3:"ObsGynae", Week4:"ObsGynae", Week5:"ObsGynae", Week6:"ObsGynae", Week7:"ObsGynae", Week8:"Radiology", Week9:"Radiology", Week10:"Pulm Med", Week11:"Pulm Med", Week12:"Psychiatry", Week13:"Psychiatry"},
      C3:  {Week1:"ObsGynae", Week2:"ObsGynae", Week3:"ObsGynae", Week4:"ObsGynae", Week5:"ObsGynae", Week6:"ObsGynae", Week7:"ObsGynae", Week8:"Psychiatry", Week9:"Psychiatry", Week10:"Radiology", Week11:"Radiology", Week12:"Pulm Med", Week13:"Pulm Med"},
      C4:  {Week1:"ObsGynae", Week2:"ObsGynae", Week3:"ObsGynae", Week4:"ObsGynae", Week5:"ObsGynae", Week6:"ObsGynae", Week7:"ObsGynae", Week8:"Psychiatry", Week9:"Psychiatry", Week10:"Radiology", Week11:"Radiology", Week12:"Pulm Med", Week13:"Pulm Med"},
      C5:  {Week1:"ObsGynae", Week2:"ObsGynae", Week3:"ObsGynae", Week4:"ObsGynae", Week5:"ObsGynae", Week6:"ObsGynae", Week7:"ObsGynae", Week8:"Pulm Med", Week9:"Pulm Med", Week10:"Psychiatry", Week11:"Psychiatry", Week12:"Radiology", Week13:"Radiology"},
      C6:  {Week1:"ObsGynae", Week2:"ObsGynae", Week3:"ObsGynae", Week4:"ObsGynae", Week5:"ObsGynae", Week6:"ObsGynae", Week7:"ObsGynae", Week8:"Pulm Med", Week9:"Pulm Med", Week10:"Psychiatry", Week11:"Psychiatry", Week12:"Radiology", Week13:"Radiology"},
      C7:  {Week1:"Radiology", Week2:"Radiology", Week3:"Pulm Med", Week4:"Pulm Med", Week5:"Psychiatry", Week6:"Psychiatry", Week7:"ObsGynae", Week8:"ObsGynae", Week9:"ObsGynae", Week10:"ObsGynae", Week11:"ObsGynae", Week12:"ObsGynae", Week13:"ObsGynae"},
      C8:  {Week1:"Radiology", Week2:"Radiology", Week3:"Pulm Med", Week4:"Pulm Med", Week5:"Psychiatry", Week6:"Psychiatry", Week7:"ObsGynae", Week8:"ObsGynae", Week9:"ObsGynae", Week10:"ObsGynae", Week11:"ObsGynae", Week12:"ObsGynae", Week13:"ObsGynae"},
      C9:  {Week1:"Psychiatry", Week2:"Psychiatry", Week3:"Radiology", Week4:"Radiology", Week5:"Pulm Med", Week6:"Pulm Med", Week7:"ObsGynae", Week8:"ObsGynae", Week9:"ObsGynae", Week10:"ObsGynae", Week11:"ObsGynae", Week12:"ObsGynae", Week13:"ObsGynae"},
      C10: {Week1:"Psychiatry", Week2:"Psychiatry", Week3:"Radiology", Week4:"Radiology", Week5:"Pulm Med", Week6:"Pulm Med", Week7:"ObsGynae", Week8:"ObsGynae", Week9:"ObsGynae", Week10:"ObsGynae", Week11:"ObsGynae", Week12:"ObsGynae", Week13:"ObsGynae"},
      C11: {Week1:"Pulm Med", Week2:"Pulm Med", Week3:"Psychiatry", Week4:"Psychiatry", Week5:"Radiology", Week6:"Radiology", Week7:"ObsGynae", Week8:"ObsGynae", Week9:"ObsGynae", Week10:"ObsGynae", Week11:"ObsGynae", Week12:"ObsGynae", Week13:"ObsGynae"},
      C12: {Week1:"Pulm Med", Week2:"Pulm Med", Week3:"Psychiatry", Week4:"Psychiatry", Week5:"Radiology", Week6:"Radiology", Week7:"ObsGynae", Week8:"ObsGynae", Week9:"ObsGynae", Week10:"ObsGynae", Week11:"ObsGynae", Week12:"ObsGynae", Week13:"ObsGynae"}
    },
    D: {
      D1:  {Week1:"Pediatrics", Week2:"Pediatrics", Week3:"Pediatrics", Week4:"Anaesthesia", Week5:"Anaesthesia", Week6:"Casualty", Week7:"Casualty", Week8:"ENT", Week9:"ENT", Week10:"Ophtha", Week11:"Ophtha", Week12:"Ortho", Week13:"Ortho"},
      D2:  {Week1:"Pediatrics", Week2:"Pediatrics", Week3:"Pediatrics", Week4:"Anaesthesia", Week5:"Anaesthesia", Week6:"Casualty", Week7:"Casualty", Week8:"ENT", Week9:"ENT", Week10:"Ophtha", Week11:"Ophtha", Week12:"Ortho", Week13:"Ortho"},
      D3:  {Week1:"Ortho", Week2:"Ortho", Week3:"Pediatrics", Week4:"Pediatrics", Week5:"Pediatrics", Week6:"Anaesthesia", Week7:"Anaesthesia", Week8:"Casualty", Week9:"Casualty", Week10:"ENT", Week11:"ENT", Week12:"Ophtha", Week13:"Ophtha"},
      D4:  {Week1:"Ortho", Week2:"Ortho", Week3:"Pediatrics", Week4:"Pediatrics", Week5:"Pediatrics", Week6:"Anaesthesia", Week7:"Anaesthesia", Week8:"Casualty", Week9:"Casualty", Week10:"ENT", Week11:"ENT", Week12:"Ophtha", Week13:"Ophtha"},
      D5:  {Week1:"Ophtha", Week2:"Ophtha", Week3:"Ortho", Week4:"Ortho", Week5:"Pediatrics", Week6:"Pediatrics", Week7:"Pediatrics", Week8:"Anaesthesia", Week9:"Anaesthesia", Week10:"Casualty", Week11:"Casualty", Week12:"ENT", Week13:"ENT"},
      D6:  {Week1:"Ophtha", Week2:"Ophtha", Week3:"Ortho", Week4:"Ortho", Week5:"Pediatrics", Week6:"Pediatrics", Week7:"Pediatrics", Week8:"Anaesthesia", Week9:"Anaesthesia", Week10:"Casualty", Week11:"Casualty", Week12:"ENT", Week13:"ENT"},
      D7:  {Week1:"ENT", Week2:"ENT", Week3:"Ophtha", Week4:"Ophtha", Week5:"Ortho", Week6:"Ortho", Week7:"Pediatrics", Week8:"Pediatrics", Week9:"Pediatrics", Week10:"Anaesthesia", Week11:"Anaesthesia", Week12:"Casualty", Week13:"Casualty"},
      D8:  {Week1:"ENT", Week2:"ENT", Week3:"Ophtha", Week4:"Ophtha", Week5:"Ortho", Week6:"Ortho", Week7:"Pediatrics", Week8:"Pediatrics", Week9:"Pediatrics", Week10:"Anaesthesia", Week11:"Anaesthesia", Week12:"Casualty", Week13:"Casualty"},
      D9:  {Week1:"Casualty", Week2:"Casualty", Week3:"ENT", Week4:"ENT", Week5:"Ophtha", Week6:"Ophtha", Week7:"Ortho", Week8:"Ortho", Week9:"Pediatrics", Week10:"Pediatrics", Week11:"Pediatrics", Week12:"Anaesthesia", Week13:"Anaesthesia"},
      D10: {Week1:"Casualty", Week2:"Casualty", Week3:"ENT", Week4:"ENT", Week5:"Ophtha", Week6:"Ophtha", Week7:"Ortho", Week8:"Ortho", Week9:"Pediatrics", Week10:"Pediatrics", Week11:"Pediatrics", Week12:"Anaesthesia", Week13:"Anaesthesia"},
      D11: {Week1:"Anaesthesia", Week2:"Anaesthesia", Week3:"Casualty", Week4:"Casualty", Week5:"ENT", Week6:"ENT", Week7:"Ophtha", Week8:"Ophtha", Week9:"Ortho", Week10:"Ortho", Week11:"Pediatrics", Week12:"Pediatrics", Week13:"Pediatrics"},
      D12: {Week1:"Anaesthesia", Week2:"Anaesthesia", Week3:"Casualty", Week4:"Casualty", Week5:"ENT", Week6:"ENT", Week7:"Ophtha", Week8:"Ophtha", Week9:"Ortho", Week10:"Ortho", Week11:"Pediatrics", Week12:"Pediatrics", Week13:"Pediatrics"}
    }
  };

  const Block2A = {
    A1:  {Week14:"Pediatrics", Week15:"Pediatrics", Week16:"Pediatrics", Week17:"Anaesthesia", Week18:"Anaesthesia", Week19:"Casualty", Week20:"Casualty", Week21:"ENT", Week22:"ENT", Week23:"Ophtha", Week24:"Ophtha", Week25:"Ortho", Week26:"Ortho"},
    A2:  {Week14:"Pediatrics", Week15:"Pediatrics", Week16:"Pediatrics", Week17:"Anaesthesia", Week18:"Anaesthesia", Week19:"Casualty", Week20:"Casualty", Week21:"ENT", Week22:"ENT", Week23:"Ophtha", Week24:"Ophtha", Week25:"Ortho", Week26:"Ortho"},
    A3:  {Week14:"Ortho", Week15:"Ortho", Week16:"Pediatrics", Week17:"Pediatrics", Week18:"Pediatrics", Week19:"Anaesthesia", Week20:"Anaesthesia", Week21:"Casualty", Week22:"Casualty", Week23:"ENT", Week24:"ENT", Week25:"Ophtha", Week26:"Ophtha"},
    A4:  {Week14:"Ortho", Week15:"Ortho", Week16:"Pediatrics", Week17:"Pediatrics", Week18:"Pediatrics", Week19:"Anaesthesia", Week20:"Anaesthesia", Week21:"Casualty", Week22:"Casualty", Week23:"ENT", Week24:"ENT", Week25:"Ophtha", Week26:"Ophtha"},
    A5:  {Week14:"Ophtha", Week15:"Ophtha", Week16:"Ortho", Week17:"Ortho", Week18:"Pediatrics", Week19:"Pediatrics", Week20:"Pediatrics", Week21:"Anaesthesia", Week22:"Anaesthesia", Week23:"Casualty", Week24:"Casualty", Week25:"ENT", Week26:"ENT"},
    A6:  {Week14:"Ophtha", Week15:"Ophtha", Week16:"Ortho", Week17:"Ortho", Week18:"Pediatrics", Week19:"Pediatrics", Week20:"Pediatrics", Week21:"Anaesthesia", Week22:"Anaesthesia", Week23:"Casualty", Week24:"Casualty", Week25:"ENT", Week26:"ENT"},
    A7:  {Week14:"ENT", Week15:"ENT", Week16:"Ophtha", Week17:"Ophtha", Week18:"Ortho", Week19:"Ortho", Week20:"Pediatrics", Week21:"Pediatrics", Week22:"Pediatrics", Week23:"Anaesthesia", Week24:"Anaesthesia", Week25:"Casualty", Week26:"Casualty"},
    A8:  {Week14:"ENT", Week15:"ENT", Week16:"Ophtha", Week17:"Ophtha", Week18:"Ortho", Week19:"Ortho", Week20:"Pediatrics", Week21:"Pediatrics", Week22:"Pediatrics", Week23:"Anaesthesia", Week24:"Anaesthesia", Week25:"Casualty", Week26:"Casualty"},
    A9:  {Week14:"Casualty", Week15:"Casualty", Week16:"ENT", Week17:"ENT", Week18:"Ophtha", Week19:"Ophtha", Week20:"Ortho", Week21:"Ortho", Week22:"Pediatrics", Week23:"Pediatrics", Week24:"Pediatrics", Week25:"Anaesthesia", Week26:"Anaesthesia"},
    A10: {Week14:"Casualty", Week15:"Casualty", Week16:"ENT", Week17:"ENT", Week18:"Ophtha", Week19:"Ophtha", Week20:"Ortho", Week21:"Ortho", Week22:"Pediatrics", Week23:"Pediatrics", Week24:"Pediatrics", Week25:"Anaesthesia", Week26:"Anaesthesia"},
    A11: {Week14:"Anaesthesia", Week15:"Anaesthesia", Week16:"Casualty", Week17:"Casualty", Week18:"ENT", Week19:"ENT", Week20:"Ophtha", Week21:"Ophtha", Week22:"Ortho", Week23:"Ortho", Week24:"Pediatrics", Week25:"Pediatrics", Week26:"Pediatrics"},
    A12: {Week14:"Anaesthesia", Week15:"Anaesthesia", Week16:"Casualty", Week17:"Casualty", Week18:"ENT", Week19:"ENT", Week20:"Ophtha", Week21:"Ophtha", Week22:"Ortho", Week23:"Ortho", Week24:"Pediatrics", Week25:"Pediatrics", Week26:"Pediatrics"}
  };

  const Block2B = {
    B1:  {Week14:"Forensic", Week15:"PSM", Week16:"PSM", Week17:"PSM", Week18:"PSM", Week19:"PSM", Week20:"PSM", Week21:"PSM", Week22:"PSM", Week23:"PSM", Week24:"PSM", Week25:"PSM", Week26:"PSM"},
    B2:  {Week14:"PSM", Week15:"Forensic", Week16:"PSM", Week17:"PSM", Week18:"PSM", Week19:"PSM", Week20:"PSM", Week21:"PSM", Week22:"PSM", Week23:"PSM", Week24:"PSM", Week25:"PSM", Week26:"PSM"},
    B3:  {Week14:"PSM", Week15:"PSM", Week16:"Forensic", Week17:"PSM", Week18:"PSM", Week19:"PSM", Week20:"PSM", Week21:"PSM", Week22:"PSM", Week23:"PSM", Week24:"PSM", Week25:"PSM", Week26:"PSM"},
    B4:  {Week14:"PSM", Week15:"PSM", Week16:"PSM", Week17:"Forensic", Week18:"PSM", Week19:"PSM", Week20:"PSM", Week21:"PSM", Week22:"PSM", Week23:"PSM", Week24:"PSM", Week25:"PSM", Week26:"PSM"},
    B5:  {Week14:"PSM", Week15:"PSM", Week16:"PSM", Week17:"PSM", Week18:"Forensic", Week19:"PSM", Week20:"PSM", Week21:"PSM", Week22:"PSM", Week23:"PSM", Week24:"PSM", Week25:"PSM", Week26:"PSM"},
    B6:  {Week14:"PSM", Week15:"PSM", Week16:"PSM", Week17:"PSM", Week18:"PSM", Week19:"Forensic", Week20:"PSM", Week21:"PSM", Week22:"PSM", Week23:"PSM", Week24:"PSM", Week25:"PSM", Week26:"PSM"},
    B7:  {Week14:"PSM", Week15:"PSM", Week16:"PSM", Week17:"PSM", Week18:"PSM", Week19:"PSM", Week20:"Forensic", Week21:"PSM", Week22:"PSM", Week23:"PSM", Week24:"PSM", Week25:"PSM", Week26:"PSM"},
    B8:  {Week14:"PSM", Week15:"PSM", Week16:"PSM", Week17:"PSM", Week18:"PSM", Week19:"PSM", Week20:"PSM", Week21:"Forensic", Week22:"PSM", Week23:"PSM", Week24:"PSM", Week25:"PSM", Week26:"PSM"},
    B9:  {Week14:"PSM", Week15:"PSM", Week16:"PSM", Week17:"PSM", Week18:"PSM", Week19:"PSM", Week20:"PSM", Week21:"PSM", Week22:"Forensic", Week23:"PSM", Week24:"PSM", Week25:"PSM", Week26:"PSM"},
    B10: {Week14:"PSM", Week15:"PSM", Week16:"PSM", Week17:"PSM", Week18:"PSM", Week19:"PSM", Week20:"PSM", Week21:"PSM", Week22:"PSM", Week23:"Forensic", Week24:"PSM", Week25:"PSM", Week26:"PSM"},
    B11: {Week14:"PSM", Week15:"PSM", Week16:"PSM", Week17:"PSM", Week18:"PSM", Week19:"PSM", Week20:"PSM", Week21:"PSM", Week22:"PSM", Week23:"PSM", Week24:"Forensic", Week25:"PSM", Week26:"PSM"},
    B12: {Week14:"PSM", Week15:"PSM", Week16:"PSM", Week17:"PSM", Week18:"PSM", Week19:"PSM", Week20:"PSM", Week21:"PSM", Week22:"PSM", Week23:"PSM", Week24:"PSM", Week25:"Forensic", Week26:"PSM"}
  };

  const Block2C = {
    C1:  {Week14:"DVL", Week15:"MED", Week16:"MED", Week17:"MED", Week18:"MED", Week19:"MED", Week20:"MED", Week21:"Surgery", Week22:"Surgery", Week23:"Surgery", Week24:"Surgery", Week25:"Surgery", Week26:"Surgery"},
    C2:  {Week14:"MED", Week15:"DVL", Week16:"MED", Week17:"MED", Week18:"MED", Week19:"MED", Week20:"MED", Week21:"Surgery", Week22:"Surgery", Week23:"Surgery", Week24:"Surgery", Week25:"Surgery", Week26:"Surgery"},
    C3:  {Week14:"MED", Week15:"MED", Week16:"DVL", Week17:"MED", Week18:"MED", Week19:"MED", Week20:"MED", Week21:"Surgery", Week22:"Surgery", Week23:"Surgery", Week24:"Surgery", Week25:"Surgery", Week26:"Surgery"},
    C4:  {Week14:"MED", Week15:"MED", Week16:"MED", Week17:"MED", Week18:"MED", Week19:"MED", Week20:"DVL", Week21:"Surgery", Week22:"Surgery", Week23:"Surgery", Week24:"Surgery", Week25:"Surgery", Week26:"Surgery"},
    C5:  {Week14:"MED", Week15:"MED", Week16:"MED", Week17:"MED", Week18:"MED", Week19:"MED", Week20:"Surgery", Week21:"DVL", Week22:"Surgery", Week23:"Surgery", Week24:"Surgery", Week25:"Surgery", Week26:"Surgery"},
    C6:  {Week14:"MED", Week15:"MED", Week16:"MED", Week17:"MED", Week18:"MED", Week19:"MED", Week20:"Surgery", Week21:"Surgery", Week22:"DVL", Week23:"Surgery", Week24:"Surgery", Week25:"Surgery", Week26:"Surgery"},
    C7:  {Week14:"Surgery", Week15:"Surgery", Week16:"Surgery", Week17:"Surgery", Week18:"Surgery", Week19:"Surgery", Week20:"MED", Week21:"MED", Week22:"MED", Week23:"MED", Week24:"DVL", Week25:"MED", Week26:"MED"},
    C8:  {Week14:"Surgery", Week15:"Surgery", Week16:"Surgery", Week17:"Surgery", Week18:"Surgery", Week19:"Surgery", Week20:"MED", Week21:"MED", Week22:"MED", Week23:"MED", Week24:"MED", Week25:"DVL", Week26:"MED"},
    C9:  {Week14:"Surgery", Week15:"Surgery", Week16:"Surgery", Week17:"Surgery", Week18:"Surgery", Week19:"Surgery", Week20:"MED", Week21:"MED", Week22:"MED", Week23:"MED", Week24:"MED", Week25:"MED", Week26:"DVL"},
    C10: {Week14:"Surgery", Week15:"Surgery", Week16:"Surgery", Week17:"DVL", Week18:"Surgery", Week19:"Surgery", Week20:"Surgery", Week21:"MED", Week22:"MED", Week23:"MED", Week24:"MED", Week25:"MED", Week26:"MED"},
    C11: {Week14:"Surgery", Week15:"Surgery", Week16:"Surgery", Week17:"Surgery", Week18:"DVL", Week19:"Surgery", Week20:"Surgery", Week21:"MED", Week22:"MED", Week23:"MED", Week24:"MED", Week25:"MED", Week26:"MED"},
    C12: {Week14:"Surgery", Week15:"Surgery", Week16:"Surgery", Week17:"Surgery", Week18:"Surgery", Week19:"DVL", Week20:"Surgery", Week21:"MED", Week22:"MED", Week23:"MED", Week24:"MED", Week25:"MED", Week26:"MED"}
  };

  const Block2D = {
    D1:  {Week14:"ObsGynae", Week15:"ObsGynae", Week16:"ObsGynae", Week17:"ObsGynae", Week18:"ObsGynae", Week19:"ObsGynae", Week20:"ObsGynae", Week21:"Radiology", Week22:"Radiology", Week23:"Pulm Med", Week24:"Pulm Med", Week25:"Psychiatry", Week26:"Psychiatry"},
    D2:  {Week14:"ObsGynae", Week15:"ObsGynae", Week16:"ObsGynae", Week17:"ObsGynae", Week18:"ObsGynae", Week19:"ObsGynae", Week20:"ObsGynae", Week21:"Radiology", Week22:"Radiology", Week23:"Pulm Med", Week24:"Pulm Med", Week25:"Psychiatry", Week26:"Psychiatry"},
    D3:  {Week14:"ObsGynae", Week15:"ObsGynae", Week16:"ObsGynae", Week17:"ObsGynae", Week18:"ObsGynae", Week19:"ObsGynae", Week20:"ObsGynae", Week21:"Psychiatry", Week22:"Psychiatry", Week23:"Radiology", Week24:"Radiology", Week25:"Pulm Med", Week26:"Pulm Med"},
    D4:  {Week14:"ObsGynae", Week15:"ObsGynae", Week16:"ObsGynae", Week17:"ObsGynae", Week18:"ObsGynae", Week19:"ObsGynae", Week20:"ObsGynae", Week21:"Psychiatry", Week22:"Psychiatry", Week23:"Radiology", Week24:"Radiology", Week25:"Pulm Med", Week26:"Pulm Med"},
    D5:  {Week14:"ObsGynae", Week15:"ObsGynae", Week16:"ObsGynae", Week17:"ObsGynae", Week18:"ObsGynae", Week19:"ObsGynae", Week20:"ObsGynae", Week21:"Pulm Med", Week22:"Pulm Med", Week23:"Psychiatry", Week24:"Psychiatry", Week25:"Radiology", Week26:"Radiology"},
    D6:  {Week14:"ObsGynae", Week15:"ObsGynae", Week16:"ObsGynae", Week17:"ObsGynae", Week18:"ObsGynae", Week19:"ObsGynae", Week20:"ObsGynae", Week21:"Pulm Med", Week22:"Pulm Med", Week23:"Psychiatry", Week24:"Psychiatry", Week25:"Radiology", Week26:"Radiology"},
    D7:  {Week14:"Radiology", Week15:"Radiology", Week16:"Pulm Med", Week17:"Pulm Med", Week18:"Psychiatry", Week19:"Psychiatry", Week20:"ObsGynae", Week21:"ObsGynae", Week22:"ObsGynae", Week23:"ObsGynae", Week24:"ObsGynae", Week25:"ObsGynae", Week26:"ObsGynae"},
    D8:  {Week14:"Radiology", Week15:"Radiology", Week16:"Pulm Med", Week17:"Pulm Med", Week18:"Psychiatry", Week19:"Psychiatry", Week20:"ObsGynae", Week21:"ObsGynae", Week22:"ObsGynae", Week23:"ObsGynae", Week24:"ObsGynae", Week25:"ObsGynae", Week26:"ObsGynae"},
    D9:  {Week14:"Psychiatry", Week15:"Psychiatry", Week16:"Radiology", Week17:"Radiology", Week18:"Pulm Med", Week19:"Pulm Med", Week20:"ObsGynae", Week21:"ObsGynae", Week22:"ObsGynae", Week23:"ObsGynae", Week24:"ObsGynae", Week25:"ObsGynae", Week26:"ObsGynae"},
    D10: {Week14:"Psychiatry", Week15:"Psychiatry", Week16:"Radiology", Week17:"Radiology", Week18:"Pulm Med", Week19:"Pulm Med", Week20:"ObsGynae", Week21:"ObsGynae", Week22:"ObsGynae", Week23:"ObsGynae", Week24:"ObsGynae", Week25:"ObsGynae", Week26:"ObsGynae"},
    D11: {Week14:"Pulm Med", Week15:"Pulm Med", Week16:"Psychiatry", Week17:"Psychiatry", Week18:"Radiology", Week19:"Radiology", Week20:"ObsGynae", Week21:"ObsGynae", Week22:"ObsGynae", Week23:"ObsGynae", Week24:"ObsGynae", Week25:"ObsGynae", Week26:"ObsGynae"},
    D12: {Week14:"Pulm Med", Week15:"Pulm Med", Week16:"Psychiatry", Week17:"Psychiatry", Week18:"Radiology", Week19:"Radiology", Week20:"ObsGynae", Week21:"ObsGynae", Week22:"ObsGynae", Week23:"ObsGynae", Week24:"ObsGynae", Week25:"ObsGynae", Week26:"ObsGynae"}
  };

  const Block3A = {
    A1:  {Week27:"ObsGynae", Week28:"ObsGynae", Week29:"ObsGynae", Week30:"ObsGynae", Week31:"ObsGynae", Week32:"ObsGynae", Week33:"ObsGynae", Week34:"Radiology", Week35:"Radiology", Week36:"Pulm Med", Week37:"Pulm Med", Week38:"Psychiatry", Week39:"Psychiatry"},
    A2:  {Week27:"ObsGynae", Week28:"ObsGynae", Week29:"ObsGynae", Week30:"ObsGynae", Week31:"ObsGynae", Week32:"ObsGynae", Week33:"ObsGynae", Week34:"Radiology", Week35:"Radiology", Week36:"Pulm Med", Week37:"Pulm Med", Week38:"Psychiatry", Week39:"Psychiatry"},
    A3:  {Week27:"ObsGynae", Week28:"ObsGynae", Week29:"ObsGynae", Week30:"ObsGynae", Week31:"ObsGynae", Week32:"ObsGynae", Week33:"ObsGynae", Week34:"Psychiatry", Week35:"Psychiatry", Week36:"Radiology", Week37:"Radiology", Week38:"Pulm Med", Week39:"Pulm Med"},
    A4:  {Week27:"ObsGynae", Week28:"ObsGynae", Week29:"ObsGynae", Week30:"ObsGynae", Week31:"ObsGynae", Week32:"ObsGynae", Week33:"ObsGynae", Week34:"Psychiatry", Week35:"Psychiatry", Week36:"Radiology", Week37:"Radiology", Week38:"Pulm Med", Week39:"Pulm Med"},
    A5:  {Week27:"ObsGynae", Week28:"ObsGynae", Week29:"ObsGynae", Week30:"ObsGynae", Week31:"ObsGynae", Week32:"ObsGynae", Week33:"ObsGynae", Week34:"Pulm Med", Week35:"Pulm Med", Week36:"Psychiatry", Week37:"Psychiatry", Week38:"Radiology", Week39:"Radiology"},
    A6:  {Week27:"ObsGynae", Week28:"ObsGynae", Week29:"ObsGynae", Week30:"ObsGynae", Week31:"ObsGynae", Week32:"ObsGynae", Week33:"ObsGynae", Week34:"Pulm Med", Week35:"Pulm Med", Week36:"Psychiatry", Week37:"Psychiatry", Week38:"Radiology", Week39:"Radiology"},
    A7:  {Week27:"Radiology", Week28:"Radiology", Week29:"Pulm Med", Week30:"Pulm Med", Week31:"Psychiatry", Week32:"Psychiatry", Week33:"ObsGynae", Week34:"ObsGynae", Week35:"ObsGynae", Week36:"ObsGynae", Week37:"ObsGynae", Week38:"ObsGynae", Week39:"ObsGynae"},
    A8:  {Week27:"Radiology", Week28:"Radiology", Week29:"Pulm Med", Week30:"Pulm Med", Week31:"Psychiatry", Week32:"Psychiatry", Week33:"ObsGynae", Week34:"ObsGynae", Week35:"ObsGynae", Week36:"ObsGynae", Week37:"ObsGynae", Week38:"ObsGynae", Week39:"ObsGynae"},
    A9:  {Week27:"Psychiatry", Week28:"Psychiatry", Week29:"Radiology", Week30:"Radiology", Week31:"Pulm Med", Week32:"Pulm Med", Week33:"ObsGynae", Week34:"ObsGynae", Week35:"ObsGynae", Week36:"ObsGynae", Week37:"ObsGynae", Week38:"ObsGynae", Week39:"ObsGynae"},
    A10: {Week27:"Psychiatry", Week28:"Psychiatry", Week29:"Radiology", Week30:"Radiology", Week31:"Pulm Med", Week32:"Pulm Med", Week33:"ObsGynae", Week34:"ObsGynae", Week35:"ObsGynae", Week36:"ObsGynae", Week37:"ObsGynae", Week38:"ObsGynae", Week39:"ObsGynae"},
    A11: {Week27:"Pulm Med", Week28:"Pulm Med", Week29:"Psychiatry", Week30:"Psychiatry", Week31:"Radiology", Week32:"Radiology", Week33:"ObsGynae", Week34:"ObsGynae", Week35:"ObsGynae", Week36:"ObsGynae", Week37:"ObsGynae", Week38:"ObsGynae", Week39:"ObsGynae"},
    A12: {Week27:"Pulm Med", Week28:"Pulm Med", Week29:"Psychiatry", Week30:"Psychiatry", Week31:"Radiology", Week32:"Radiology", Week33:"ObsGynae", Week34:"ObsGynae", Week35:"ObsGynae", Week36:"ObsGynae", Week37:"ObsGynae", Week38:"ObsGynae", Week39:"ObsGynae"}
  };

  const Block3B = {
    B1:  {Week27:"Pediatrics", Week28:"Pediatrics", Week29:"Pediatrics", Week30:"Anaesthesia", Week31:"Anaesthesia", Week32:"Casualty", Week33:"Casualty", Week34:"ENT", Week35:"ENT", Week36:"Ophtha", Week37:"Ophtha", Week38:"Ortho", Week39:"Ortho"},
    B2:  {Week27:"Pediatrics", Week28:"Pediatrics", Week29:"Pediatrics", Week30:"Anaesthesia", Week31:"Anaesthesia", Week32:"Casualty", Week33:"Casualty", Week34:"ENT", Week35:"ENT", Week36:"Ophtha", Week37:"Ophtha", Week38:"Ortho", Week39:"Ortho"},
    B3:  {Week27:"Ortho", Week28:"Ortho", Week29:"Pediatrics", Week30:"Pediatrics", Week31:"Pediatrics", Week32:"Anaesthesia", Week33:"Anaesthesia", Week34:"Casualty", Week35:"Casualty", Week36:"ENT", Week37:"ENT", Week38:"Ophtha", Week39:"Ophtha"},
    B4:  {Week27:"Ortho", Week28:"Ortho", Week29:"Pediatrics", Week30:"Pediatrics", Week31:"Pediatrics", Week32:"Anaesthesia", Week33:"Anaesthesia", Week34:"Casualty", Week35:"Casualty", Week36:"ENT", Week37:"ENT", Week38:"Ophtha", Week39:"Ophtha"},
    B5:  {Week27:"Ophtha", Week28:"Ophtha", Week29:"Ortho", Week30:"Ortho", Week31:"Pediatrics", Week32:"Pediatrics", Week33:"Pediatrics", Week34:"Anaesthesia", Week35:"Anaesthesia", Week36:"Casualty", Week37:"Casualty", Week38:"ENT", Week39:"ENT"},
    B6:  {Week27:"Ophtha", Week28:"Ophtha", Week29:"Ortho", Week30:"Ortho", Week31:"Pediatrics", Week32:"Pediatrics", Week33:"Pediatrics", Week34:"Anaesthesia", Week35:"Anaesthesia", Week36:"Casualty", Week37:"Casualty", Week38:"ENT", Week39:"ENT"},
    B7:  {Week27:"ENT", Week28:"ENT", Week29:"Ophtha", Week30:"Ophtha", Week31:"Ortho", Week32:"Ortho", Week33:"Pediatrics", Week34:"Pediatrics", Week35:"Pediatrics", Week36:"Anaesthesia", Week37:"Anaesthesia", Week38:"Casualty", Week39:"Casualty"},
    B8:  {Week27:"ENT", Week28:"ENT", Week29:"Ophtha", Week30:"Ophtha", Week31:"Ortho", Week32:"Ortho", Week33:"Pediatrics", Week34:"Pediatrics", Week35:"Pediatrics", Week36:"Anaesthesia", Week37:"Anaesthesia", Week38:"Casualty", Week39:"Casualty"},
    B9:  {Week27:"Casualty", Week28:"Casualty", Week29:"ENT", Week30:"ENT", Week31:"Ophtha", Week32:"Ophtha", Week33:"Ortho", Week34:"Ortho", Week35:"Pediatrics", Week36:"Pediatrics", Week37:"Pediatrics", Week38:"Anaesthesia", Week39:"Anaesthesia"},
    B10: {Week27:"Casualty", Week28:"Casualty", Week29:"ENT", Week30:"ENT", Week31:"Ophtha", Week32:"Ophtha", Week33:"Ortho", Week34:"Ortho", Week35:"Pediatrics", Week36:"Pediatrics", Week37:"Pediatrics", Week38:"Anaesthesia", Week39:"Anaesthesia"},
    B11: {Week27:"Anaesthesia", Week28:"Anaesthesia", Week29:"Casualty", Week30:"Casualty", Week31:"ENT", Week32:"ENT", Week33:"Ophtha", Week34:"Ophtha", Week35:"Ortho", Week36:"Ortho", Week37:"Pediatrics", Week38:"Pediatrics", Week39:"Pediatrics"},
    B12: {Week27:"Anaesthesia", Week28:"Anaesthesia", Week29:"Casualty", Week30:"Casualty", Week31:"ENT", Week32:"ENT", Week33:"Ophtha", Week34:"Ophtha", Week35:"Ortho", Week36:"Ortho", Week37:"Pediatrics", Week38:"Pediatrics", Week39:"Pediatrics"}
  };

  const Block3C = {
    C1:  {Week27:"Forensic", Week28:"PSM", Week29:"PSM", Week30:"PSM", Week31:"PSM", Week32:"PSM", Week33:"PSM", Week34:"PSM", Week35:"PSM", Week36:"PSM", Week37:"PSM", Week38:"PSM", Week39:"PSM"},
    C2:  {Week27:"PSM", Week28:"Forensic", Week29:"PSM", Week30:"PSM", Week31:"PSM", Week32:"PSM", Week33:"PSM", Week34:"PSM", Week35:"PSM", Week36:"PSM", Week37:"PSM", Week38:"PSM", Week39:"PSM"},
    C3:  {Week27:"PSM", Week28:"PSM", Week29:"Forensic", Week30:"PSM", Week31:"PSM", Week32:"PSM", Week33:"PSM", Week34:"PSM", Week35:"PSM", Week36:"PSM", Week37:"PSM", Week38:"PSM", Week39:"PSM"},
    C4:  {Week27:"PSM", Week28:"PSM", Week29:"PSM", Week30:"Forensic", Week31:"PSM", Week32:"PSM", Week33:"PSM", Week34:"PSM", Week35:"PSM", Week36:"PSM", Week37:"PSM", Week38:"PSM", Week39:"PSM"},
    C5:  {Week27:"PSM", Week28:"PSM", Week29:"PSM", Week30:"PSM", Week31:"Forensic", Week32:"PSM", Week33:"PSM", Week34:"PSM", Week35:"PSM", Week36:"PSM", Week37:"PSM", Week38:"PSM", Week39:"PSM"},
    C6:  {Week27:"PSM", Week28:"PSM", Week29:"PSM", Week30:"PSM", Week31:"PSM", Week32:"Forensic", Week33:"PSM", Week34:"PSM", Week35:"PSM", Week36:"PSM", Week37:"PSM", Week38:"PSM", Week39:"PSM"},
    C7:  {Week27:"PSM", Week28:"PSM", Week29:"PSM", Week30:"PSM", Week31:"PSM", Week32:"PSM", Week33:"Forensic", Week34:"PSM", Week35:"PSM", Week36:"PSM", Week37:"PSM", Week38:"PSM", Week39:"PSM"},
    C8:  {Week27:"PSM", Week28:"PSM", Week29:"PSM", Week30:"PSM", Week31:"PSM", Week32:"PSM", Week33:"PSM", Week34:"Forensic", Week35:"PSM", Week36:"PSM", Week37:"PSM", Week38:"PSM", Week39:"PSM"},
    C9:  {Week27:"PSM", Week28:"PSM", Week29:"PSM", Week30:"PSM", Week31:"PSM", Week32:"PSM", Week33:"PSM", Week34:"PSM", Week35:"Forensic", Week36:"PSM", Week37:"PSM", Week38:"PSM", Week39:"PSM"},
    C10: {Week27:"PSM", Week28:"PSM", Week29:"PSM", Week30:"PSM", Week31:"PSM", Week32:"PSM", Week33:"PSM", Week34:"PSM", Week35:"PSM", Week36:"Forensic", Week37:"PSM", Week38:"PSM", Week39:"PSM"},
    C11: {Week27:"PSM", Week28:"PSM", Week29:"PSM", Week30:"PSM", Week31:"PSM", Week32:"PSM", Week33:"PSM", Week34:"PSM", Week35:"PSM", Week36:"PSM", Week37:"Forensic", Week38:"PSM", Week39:"PSM"},
    C12: {Week27:"PSM", Week28:"PSM", Week29:"PSM", Week30:"PSM", Week31:"PSM", Week32:"PSM", Week33:"PSM", Week34:"PSM", Week35:"PSM", Week36:"PSM", Week37:"PSM", Week38:"Forensic", Week39:"PSM"}
  };

  const Block3D = {
    D1:  {Week27:"DVL", Week28:"MED", Week29:"MED", Week30:"MED", Week31:"MED", Week32:"MED", Week33:"MED", Week34:"Surgery", Week35:"Surgery", Week36:"Surgery", Week37:"Surgery", Week38:"Surgery", Week39:"Surgery"},
    D2:  {Week27:"MED", Week28:"DVL", Week29:"MED", Week30:"MED", Week31:"MED", Week32:"MED", Week33:"MED", Week34:"Surgery", Week35:"Surgery", Week36:"Surgery", Week37:"Surgery", Week38:"Surgery", Week39:"Surgery"},
    D3:  {Week27:"MED", Week28:"MED", Week29:"DVL", Week30:"MED", Week31:"MED", Week32:"MED", Week33:"MED", Week34:"Surgery", Week35:"Surgery", Week36:"Surgery", Week37:"Surgery", Week38:"Surgery", Week39:"Surgery"},
    D4:  {Week27:"MED", Week28:"MED", Week29:"MED", Week30:"MED", Week31:"MED", Week32:"MED", Week33:"DVL", Week34:"Surgery", Week35:"Surgery", Week36:"Surgery", Week37:"Surgery", Week38:"Surgery", Week39:"Surgery"},
    D5:  {Week27:"MED", Week28:"MED", Week29:"MED", Week30:"MED", Week31:"MED", Week32:"MED", Week33:"Surgery", Week34:"DVL", Week35:"Surgery", Week36:"Surgery", Week37:"Surgery", Week38:"Surgery", Week39:"Surgery"},
    D6:  {Week27:"MED", Week28:"MED", Week29:"MED", Week30:"MED", Week31:"MED", Week32:"MED", Week33:"Surgery", Week34:"Surgery", Week35:"DVL", Week36:"Surgery", Week37:"Surgery", Week38:"Surgery", Week39:"Surgery"},
    D7:  {Week27:"Surgery", Week28:"Surgery", Week29:"Surgery", Week30:"Surgery", Week31:"Surgery", Week32:"Surgery", Week33:"MED", Week34:"MED", Week35:"MED", Week36:"MED", Week37:"DVL", Week38:"MED", Week39:"MED"},
    D8:  {Week27:"Surgery", Week28:"Surgery", Week29:"Surgery", Week30:"Surgery", Week31:"Surgery", Week32:"Surgery", Week33:"MED", Week34:"MED", Week35:"MED", Week36:"MED", Week37:"MED", Week38:"DVL", Week39:"MED"},
    D9:  {Week27:"Surgery", Week28:"Surgery", Week29:"Surgery", Week30:"Surgery", Week31:"Surgery", Week32:"Surgery", Week33:"MED", Week34:"MED", Week35:"MED", Week36:"MED", Week37:"MED", Week38:"MED", Week39:"DVL"},
    D10: {Week27:"Surgery", Week28:"Surgery", Week29:"Surgery", Week30:"DVL", Week31:"Surgery", Week32:"Surgery", Week33:"Surgery", Week34:"MED", Week35:"MED", Week36:"MED", Week37:"MED", Week38:"MED", Week39:"MED"},
    D11: {Week27:"Surgery", Week28:"Surgery", Week29:"Surgery", Week30:"Surgery", Week31:"DVL", Week32:"Surgery", Week33:"Surgery", Week34:"MED", Week35:"MED", Week36:"MED", Week37:"MED", Week38:"MED", Week39:"MED"},
    D12: {Week27:"Surgery", Week28:"Surgery", Week29:"Surgery", Week30:"Surgery", Week31:"Surgery", Week32:"DVL", Week33:"Surgery", Week34:"MED", Week35:"MED", Week36:"MED", Week37:"MED", Week38:"MED", Week39:"MED"}
  };

  const Block4A = {
    A1:  {Week40:"DVL", Week41:"MED", Week42:"MED", Week43:"MED", Week44:"MED", Week45:"MED", Week46:"MED", Week47:"Surgery", Week48:"Surgery", Week49:"Surgery", Week50:"Surgery", Week51:"Surgery", Week52:"Surgery"},
    A2:  {Week40:"MED", Week41:"DVL", Week42:"MED", Week43:"MED", Week44:"MED", Week45:"MED", Week46:"MED", Week47:"Surgery", Week48:"Surgery", Week49:"Surgery", Week50:"Surgery", Week51:"Surgery", Week52:"Surgery"},
    A3:  {Week40:"MED", Week41:"MED", Week42:"DVL", Week43:"MED", Week44:"MED", Week45:"MED", Week46:"MED", Week47:"Surgery", Week48:"Surgery", Week49:"Surgery", Week50:"Surgery", Week51:"Surgery", Week52:"Surgery"},
    A4:  {Week40:"MED", Week41:"MED", Week42:"MED", Week43:"MED", Week44:"MED", Week45:"MED", Week46:"DVL", Week47:"Surgery", Week48:"Surgery", Week49:"Surgery", Week50:"Surgery", Week51:"Surgery", Week52:"Surgery"},
    A5:  {Week40:"MED", Week41:"MED", Week42:"MED", Week43:"MED", Week44:"MED", Week45:"MED", Week46:"Surgery", Week47:"DVL", Week48:"Surgery", Week49:"Surgery", Week50:"Surgery", Week51:"Surgery", Week52:"Surgery"},
    A6:  {Week40:"MED", Week41:"MED", Week42:"MED", Week43:"MED", Week44:"MED", Week45:"MED", Week46:"Surgery", Week47:"Surgery", Week48:"DVL", Week49:"Surgery", Week50:"Surgery", Week51:"Surgery", Week52:"Surgery"},
    A7:  {Week40:"Surgery", Week41:"Surgery", Week42:"Surgery", Week43:"Surgery", Week44:"Surgery", Week45:"Surgery", Week46:"MED", Week47:"MED", Week48:"MED", Week49:"MED", Week50:"DVL", Week51:"MED", Week52:"MED"},
    A8:  {Week40:"Surgery", Week41:"Surgery", Week42:"Surgery", Week43:"Surgery", Week44:"Surgery", Week45:"Surgery", Week46:"MED", Week47:"MED", Week48:"MED", Week49:"MED", Week50:"MED", Week51:"DVL", Week52:"MED"},
    A9:  {Week40:"Surgery", Week41:"Surgery", Week42:"Surgery", Week43:"Surgery", Week44:"Surgery", Week45:"Surgery", Week46:"MED", Week47:"MED", Week48:"MED", Week49:"MED", Week50:"MED", Week51:"MED", Week52:"DVL"},
    A10: {Week40:"Surgery", Week41:"Surgery", Week42:"Surgery", Week43:"DVL", Week44:"Surgery", Week45:"Surgery", Week46:"Surgery", Week47:"MED", Week48:"MED", Week49:"MED", Week50:"MED", Week51:"MED", Week52:"MED"},
    A11: {Week40:"Surgery", Week41:"Surgery", Week42:"Surgery", Week43:"Surgery", Week44:"DVL", Week45:"Surgery", Week46:"Surgery", Week47:"MED", Week48:"MED", Week49:"MED", Week50:"MED", Week51:"MED", Week52:"MED"},
    A12: {Week40:"Surgery", Week41:"Surgery", Week42:"Surgery", Week43:"Surgery", Week44:"Surgery", Week45:"DVL", Week46:"Surgery", Week47:"MED", Week48:"MED", Week49:"MED", Week50:"MED", Week51:"MED", Week52:"MED"}
  };

  const Block4B = {
    B1:  {Week40:"ObsGynae", Week41:"ObsGynae", Week42:"ObsGynae", Week43:"ObsGynae", Week44:"ObsGynae", Week45:"ObsGynae", Week46:"ObsGynae", Week47:"Radiology", Week48:"Radiology", Week49:"Pulm Med", Week50:"Pulm Med", Week51:"Psychiatry", Week52:"Psychiatry"},
    B2:  {Week40:"ObsGynae", Week41:"ObsGynae", Week42:"ObsGynae", Week43:"ObsGynae", Week44:"ObsGynae", Week45:"ObsGynae", Week46:"ObsGynae", Week47:"Radiology", Week48:"Radiology", Week49:"Pulm Med", Week50:"Pulm Med", Week51:"Psychiatry", Week52:"Psychiatry"},
    B3:  {Week40:"ObsGynae", Week41:"ObsGynae", Week42:"ObsGynae", Week43:"ObsGynae", Week44:"ObsGynae", Week45:"ObsGynae", Week46:"ObsGynae", Week47:"Psychiatry", Week48:"Psychiatry", Week49:"Radiology", Week50:"Radiology", Week51:"Pulm Med", Week52:"Pulm Med"},
    B4:  {Week40:"ObsGynae", Week41:"ObsGynae", Week42:"ObsGynae", Week43:"ObsGynae", Week44:"ObsGynae", Week45:"ObsGynae", Week46:"ObsGynae", Week47:"Psychiatry", Week48:"Psychiatry", Week49:"Radiology", Week50:"Radiology", Week51:"Pulm Med", Week52:"Pulm Med"},
    B5:  {Week40:"ObsGynae", Week41:"ObsGynae", Week42:"ObsGynae", Week43:"ObsGynae", Week44:"ObsGynae", Week45:"ObsGynae", Week46:"ObsGynae", Week47:"Pulm Med", Week48:"Pulm Med", Week49:"Psychiatry", Week50:"Psychiatry", Week51:"Radiology", Week52:"Radiology"},
    B6:  {Week40:"ObsGynae", Week41:"ObsGynae", Week42:"ObsGynae", Week43:"ObsGynae", Week44:"ObsGynae", Week45:"ObsGynae", Week46:"ObsGynae", Week47:"Pulm Med", Week48:"Pulm Med", Week49:"Psychiatry", Week50:"Psychiatry", Week51:"Radiology", Week52:"Radiology"},
    B7:  {Week40:"Radiology", Week41:"Radiology", Week42:"Pulm Med", Week43:"Pulm Med", Week44:"Psychiatry", Week45:"Psychiatry", Week46:"ObsGynae", Week47:"ObsGynae", Week48:"ObsGynae", Week49:"ObsGynae", Week50:"ObsGynae", Week51:"ObsGynae", Week52:"ObsGynae"},
    B8:  {Week40:"Radiology", Week41:"Radiology", Week42:"Pulm Med", Week43:"Pulm Med", Week44:"Psychiatry", Week45:"Psychiatry", Week46:"ObsGynae", Week47:"ObsGynae", Week48:"ObsGynae", Week49:"ObsGynae", Week50:"ObsGynae", Week51:"ObsGynae", Week52:"ObsGynae"},
    B9:  {Week40:"Psychiatry", Week41:"Psychiatry", Week42:"Radiology", Week43:"Radiology", Week44:"Pulm Med", Week45:"Pulm Med", Week46:"ObsGynae", Week47:"ObsGynae", Week48:"ObsGynae", Week49:"ObsGynae", Week50:"ObsGynae", Week51:"ObsGynae", Week52:"ObsGynae"},
    B10: {Week40:"Psychiatry", Week41:"Psychiatry", Week42:"Radiology", Week43:"Radiology", Week44:"Pulm Med", Week45:"Pulm Med", Week46:"ObsGynae", Week47:"ObsGynae", Week48:"ObsGynae", Week49:"ObsGynae", Week50:"ObsGynae", Week51:"ObsGynae", Week52:"ObsGynae"},
    B11: {Week40:"Pulm Med", Week41:"Pulm Med", Week42:"Psychiatry", Week43:"Psychiatry", Week44:"Radiology", Week45:"Radiology", Week46:"ObsGynae", Week47:"ObsGynae", Week48:"ObsGynae", Week49:"ObsGynae", Week50:"ObsGynae", Week51:"ObsGynae", Week52:"ObsGynae"},
    B12: {Week40:"Pulm Med", Week41:"Pulm Med", Week42:"Psychiatry", Week43:"Psychiatry", Week44:"Radiology", Week45:"Radiology", Week46:"ObsGynae", Week47:"ObsGynae", Week48:"ObsGynae", Week49:"ObsGynae", Week50:"ObsGynae", Week51:"ObsGynae", Week52:"ObsGynae"}
  };

  const Block4C = {
    C1:  {Week40:"Pediatrics", Week41:"Pediatrics", Week42:"Pediatrics", Week43:"Anaesthesia", Week44:"Anaesthesia", Week45:"Casualty", Week46:"Casualty", Week47:"ENT", Week48:"ENT", Week49:"Ophtha", Week50:"Ophtha", Week51:"Ortho", Week52:"Ortho"},
    C2:  {Week40:"Pediatrics", Week41:"Pediatrics", Week42:"Pediatrics", Week43:"Anaesthesia", Week44:"Anaesthesia", Week45:"Casualty", Week46:"Casualty", Week47:"ENT", Week48:"ENT", Week49:"Ophtha", Week50:"Ophtha", Week51:"Ortho", Week52:"Ortho"},
    C3:  {Week40:"Ortho", Week41:"Ortho", Week42:"Pediatrics", Week43:"Pediatrics", Week44:"Pediatrics", Week45:"Anaesthesia", Week46:"Anaesthesia", Week47:"Casualty", Week48:"Casualty", Week49:"ENT", Week50:"ENT", Week51:"Ophtha", Week52:"Ophtha"},
    C4:  {Week40:"Ortho", Week41:"Ortho", Week42:"Pediatrics", Week43:"Pediatrics", Week44:"Pediatrics", Week45:"Anaesthesia", Week46:"Anaesthesia", Week47:"Casualty", Week48:"Casualty", Week49:"ENT", Week50:"ENT", Week51:"Ophtha", Week52:"Ophtha"},
    C5:  {Week40:"Ophtha", Week41:"Ophtha", Week42:"Ortho", Week43:"Ortho", Week44:"Pediatrics", Week45:"Pediatrics", Week46:"Pediatrics", Week47:"Anaesthesia", Week48:"Anaesthesia", Week49:"Casualty", Week50:"Casualty", Week51:"ENT", Week52:"ENT"},
    C6:  {Week40:"Ophtha", Week41:"Ophtha", Week42:"Ortho", Week43:"Ortho", Week44:"Pediatrics", Week45:"Pediatrics", Week46:"Pediatrics", Week47:"Anaesthesia", Week48:"Anaesthesia", Week49:"Casualty", Week50:"Casualty", Week51:"ENT", Week52:"ENT"},
    C7:  {Week40:"ENT", Week41:"ENT", Week42:"Ophtha", Week43:"Ophtha", Week44:"Ortho", Week45:"Ortho", Week46:"Pediatrics", Week47:"Pediatrics", Week48:"Pediatrics", Week49:"Anaesthesia", Week50:"Anaesthesia", Week51:"Casualty", Week52:"Casualty"},
    C8:  {Week40:"ENT", Week41:"ENT", Week42:"Ophtha", Week43:"Ophtha", Week44:"Ortho", Week45:"Ortho", Week46:"Pediatrics", Week47:"Pediatrics", Week48:"Pediatrics", Week49:"Anaesthesia", Week50:"Anaesthesia", Week51:"Casualty", Week52:"Casualty"},
    C9:  {Week40:"Casualty", Week41:"Casualty", Week42:"ENT", Week43:"ENT", Week44:"Ophtha", Week45:"Ophtha", Week46:"Ortho", Week47:"Ortho", Week48:"Pediatrics", Week49:"Pediatrics", Week50:"Pediatrics", Week51:"Anaesthesia", Week52:"Anaesthesia"},
    C10: {Week40:"Casualty", Week41:"Casualty", Week42:"ENT", Week43:"ENT", Week44:"Ophtha", Week45:"Ophtha", Week46:"Ortho", Week47:"Ortho", Week48:"Pediatrics", Week49:"Pediatrics", Week50:"Pediatrics", Week51:"Anaesthesia", Week52:"Anaesthesia"},
    C11: {Week40:"Anaesthesia", Week41:"Anaesthesia", Week42:"Casualty", Week43:"Casualty", Week44:"ENT", Week45:"ENT", Week46:"Ophtha", Week47:"Ophtha", Week48:"Ortho", Week49:"Ortho", Week50:"Pediatrics", Week51:"Pediatrics", Week52:"Pediatrics"},
    C12: {Week40:"Anaesthesia", Week41:"Anaesthesia", Week42:"Casualty", Week43:"Casualty", Week44:"ENT", Week45:"ENT", Week46:"Ophtha", Week47:"Ophtha", Week48:"Ortho", Week49:"Ortho", Week50:"Pediatrics", Week51:"Pediatrics", Week52:"Pediatrics"}
  };

  const Block4D = {
    D1:  {Week40:"Forensic", Week41:"PSM", Week42:"PSM", Week43:"PSM", Week44:"PSM", Week45:"PSM", Week46:"PSM", Week47:"PSM", Week48:"PSM", Week49:"PSM", Week50:"PSM", Week51:"PSM", Week52:"PSM"},
    D2:  {Week40:"PSM", Week41:"Forensic", Week42:"PSM", Week43:"PSM", Week44:"PSM", Week45:"PSM", Week46:"PSM", Week47:"PSM", Week48:"PSM", Week49:"PSM", Week50:"PSM", Week51:"PSM", Week52:"PSM"},
    D3:  {Week40:"PSM", Week41:"PSM", Week42:"Forensic", Week43:"PSM", Week44:"PSM", Week45:"PSM", Week46:"PSM", Week47:"PSM", Week48:"PSM", Week49:"PSM", Week50:"PSM", Week51:"PSM", Week52:"PSM"},
    D4:  {Week40:"PSM", Week41:"PSM", Week42:"PSM", Week43:"Forensic", Week44:"PSM", Week45:"PSM", Week46:"PSM", Week47:"PSM", Week48:"PSM", Week49:"PSM", Week50:"PSM", Week51:"PSM", Week52:"PSM"},
    D5:  {Week40:"PSM", Week41:"PSM", Week42:"PSM", Week43:"PSM", Week44:"Forensic", Week45:"PSM", Week46:"PSM", Week47:"PSM", Week48:"PSM", Week49:"PSM", Week50:"PSM", Week51:"PSM", Week52:"PSM"},
    D6:  {Week40:"PSM", Week41:"PSM", Week42:"PSM", Week43:"PSM", Week44:"PSM", Week45:"Forensic", Week46:"PSM", Week47:"PSM", Week48:"PSM", Week49:"PSM", Week50:"PSM", Week51:"PSM", Week52:"PSM"},
    D7:  {Week40:"PSM", Week41:"PSM", Week42:"PSM", Week43:"PSM", Week44:"PSM", Week45:"PSM", Week46:"Forensic", Week47:"PSM", Week48:"PSM", Week49:"PSM", Week50:"PSM", Week51:"PSM", Week52:"PSM"},
    D8:  {Week40:"PSM", Week41:"PSM", Week42:"PSM", Week43:"PSM", Week44:"PSM", Week45:"PSM", Week46:"PSM", Week47:"Forensic", Week48:"PSM", Week49:"PSM", Week50:"PSM", Week51:"PSM", Week52:"PSM"},
    D9:  {Week40:"PSM", Week41:"PSM", Week42:"PSM", Week43:"PSM", Week44:"PSM", Week45:"PSM", Week46:"PSM", Week47:"PSM", Week48:"Forensic", Week49:"PSM", Week50:"PSM", Week51:"PSM", Week52:"PSM"},
    D10: {Week40:"PSM", Week41:"PSM", Week42:"PSM", Week43:"PSM", Week44:"PSM", Week45:"PSM", Week46:"PSM", Week47:"PSM", Week48:"PSM", Week49:"Forensic", Week50:"PSM", Week51:"PSM", Week52:"PSM"},
    D11: {Week40:"PSM", Week41:"PSM", Week42:"PSM", Week43:"PSM", Week44:"PSM", Week45:"PSM", Week46:"PSM", Week47:"PSM", Week48:"PSM", Week49:"PSM", Week50:"Forensic", Week51:"PSM", Week52:"PSM"},
    D12: {Week40:"PSM", Week41:"PSM", Week42:"PSM", Week43:"PSM", Week44:"PSM", Week45:"PSM", Week46:"PSM", Week47:"PSM", Week48:"PSM", Week49:"PSM", Week50:"PSM", Week51:"Forensic", Week52:"PSM"}
  };

  // MASTER 52-WEEK SCHEDULE LOOKUP DATABASE
  const subdivisionRoster = {
    A1:  { ...Block1.A.A1,  ...Block2A.A1,  ...Block3A.A1,  ...Block4A.A1 },
    A2:  { ...Block1.A.A2,  ...Block2A.A2,  ...Block3A.A2,  ...Block4A.A2 },
    A3:  { ...Block1.A.A3,  ...Block2A.A3,  ...Block3A.A3,  ...Block4A.A3 },
    A4:  { ...Block1.A.A4,  ...Block2A.A4,  ...Block3A.A4,  ...Block4A.A4 },
    A5:  { ...Block1.A.A5,  ...Block2A.A5,  ...Block3A.A5,  ...Block4A.A5 },
    A6:  { ...Block1.A.A6,  ...Block2A.A6,  ...Block3A.A6,  ...Block4A.A6 },
    A7:  { ...Block1.A.A7,  ...Block2A.A7,  ...Block3A.A7,  ...Block4A.A7 },
    A8:  { ...Block1.A.A8,  ...Block2A.A8,  ...Block3A.A8,  ...Block4A.A8 },
    A9:  { ...Block1.A.A9,  ...Block2A.A9,  ...Block3A.A9,  ...Block4A.A9 },
    A10: { ...Block1.A.A10, ...Block2A.A10, ...Block3A.A10, ...Block4A.A10 },
    A11: { ...Block1.A.A11, ...Block2A.A11, ...Block3A.A11, ...Block4A.A11 },
    A12: { ...Block1.A.A12, ...Block2A.A12, ...Block3A.A12, ...Block4A.A12 },

    B1:  { ...Block1.B.B1,  ...Block2B.B1,  ...Block3B.B1,  ...Block4B.B1 },
    B2:  { ...Block1.B.B2,  ...Block2B.B2,  ...Block3B.B2,  ...Block4B.B2 },
    B3:  { ...Block1.B.B3,  ...Block2B.B3,  ...Block3B.B3,  ...Block4B.B3 },
    B4:  { ...Block1.B.B4,  ...Block2B.B4,  ...Block3B.B4,  ...Block4B.B4 },
    B5:  { ...Block1.B.B5,  ...Block2B.B5,  ...Block3B.B5,  ...Block4B.B5 },
    B6:  { ...Block1.B.B6,  ...Block2B.B6,  ...Block3B.B6,  ...Block4B.B6 },
    B7:  { ...Block1.B.B7,  ...Block2B.B7,  ...Block3B.B7,  ...Block4B.B7 },
    B8:  { ...Block1.B.B8,  ...Block2B.B8,  ...Block3B.B8,  ...Block4B.B8 },
    B9:  { ...Block1.B.B9,  ...Block2B.B9,  ...Block3B.B9,  ...Block4B.B9 },
    B10: { ...Block1.B.B10, ...Block2B.B10, ...Block3B.B10, ...Block4B.B10 },
    B11: { ...Block1.B.B11, ...Block2B.B11, ...Block3B.B11, ...Block4B.B11 },
    B12: { ...Block1.B.B12, ...Block2B.B12, ...Block3B.B12, ...Block4B.B12 },

    C1:  { ...Block1CD.C.C1,  ...Block2C.C1,  ...Block3C.C1,  ...Block4C.C1 },
    C2:  { ...Block1CD.C.C2,  ...Block2C.C2,  ...Block3C.C2,  ...Block4C.C2 },
    C3:  { ...Block1CD.C.C3,  ...Block2C.C3,  ...Block3C.C3,  ...Block4C.C3 },
    C4:  { ...Block1CD.C.C4,  ...Block2C.C4,  ...Block3C.C4,  ...Block4C.C4 },
    C5:  { ...Block1CD.C.C5,  ...Block2C.C5,  ...Block3C.C5,  ...Block4C.C5 },
    C6:  { ...Block1CD.C.C6,  ...Block2C.C6,  ...Block3C.C6,  ...Block4C.C6 },
    C7:  { ...Block1CD.C.C7,  ...Block2C.C7,  ...Block3C.C7,  ...Block4C.C7 },
    C8:  { ...Block1CD.C.C8,  ...Block2C.C8,  ...Block3C.C8,  ...Block4C.C8 },
    C9:  { ...Block1CD.C.C9,  ...Block2C.C9,  ...Block3C.C9,  ...Block4C.C9 },
    C10: { ...Block1CD.C.C10, ...Block2C.C10, ...Block3C.C10, ...Block4C.C10 },
    C11: { ...Block1CD.C.C11, ...Block2C.C11, ...Block3C.C11, ...Block4C.C11 },
    C12: { ...Block1CD.C.C12, ...Block2C.C12, ...Block3C.C12, ...Block4C.C12 },

    D1:  { ...Block1CD.D.D1,  ...Block2D.D1,  ...Block3D.D1,  ...Block4D.D1 },
    D2:  { ...Block1CD.D.D2,  ...Block2D.D2,  ...Block3D.D2,  ...Block4D.D2 },
    D3:  { ...Block1CD.D.D3,  ...Block2D.D3,  ...Block3D.D3,  ...Block4D.D3 },
    D4:  { ...Block1CD.D.D4,  ...Block2D.D4,  ...Block3D.D4,  ...Block4D.D4 },
    D5:  { ...Block1CD.D.D5,  ...Block2D.D5,  ...Block3D.D5,  ...Block4D.D5 },
    D6:  { ...Block1CD.D.D6,  ...Block2D.D6,  ...Block3D.D6,  ...Block4D.D6 },
    D7:  { ...Block1CD.D.D7,  ...Block2D.D7,  ...Block3D.D7,  ...Block4D.D7 },
    D8:  { ...Block1CD.D.D8,  ...Block2D.D8,  ...Block3D.D8,  ...Block4D.D8 },
    D9:  { ...Block1CD.D.D9,  ...Block2D.D9,  ...Block3D.D9,  ...Block4D.D9 },
    D10: { ...Block1CD.D.D10, ...Block2D.D10, ...Block3D.D10, ...Block4D.D10 },
    D11: { ...Block1CD.D.D11, ...Block2D.D11, ...Block3D.D11, ...Block4D.D11 },
    D12: { ...Block1CD.D.D12, ...Block2D.D12, ...Block3D.D12, ...Block4D.D12 }
  };
