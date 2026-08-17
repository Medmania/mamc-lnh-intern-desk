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
