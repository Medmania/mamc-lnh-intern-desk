 const specialUnitRoster = [
    // ================= PERIOD 1: 22/08/2026 to 02/10/2026 (6 Weeks) =================
    // Unit I (Dr. C B Singh)
    { sno: 125, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit I", incharge: "Dr. C B Singh" },
    { sno: 131, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit I", incharge: "Dr. C B Singh" },
    { sno: 137, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit I", incharge: "Dr. C B Singh" },
    { sno: 143, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit I", incharge: "Dr. C B Singh" },
    // Unit II (Dr. Pawan Lal)
    { sno: 126, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit II", incharge: "Dr. Pawan Lal" },
    { sno: 132, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit II", incharge: "Dr. Pawan Lal" },
    { sno: 138, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit II", incharge: "Dr. Pawan Lal" },
    { sno: 144, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit II", incharge: "Dr. Pawan Lal" },
    // Unit III (Dr. Rajdeep Singh)
    { sno: 127, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit III", incharge: "Dr. Rajdeep Singh" },
    { sno: 133, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit III", incharge: "Dr. Rajdeep Singh" },
    { sno: 139, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit III", incharge: "Dr. Rajdeep Singh" },
    { sno: 145, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit III", incharge: "Dr. Rajdeep Singh" },
    // Unit IV (Dr. Sushanto Neogi)
    { sno: 128, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit IV", incharge: "Dr. Sushanto Neogi" },
    { sno: 134, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit IV", incharge: "Dr. Sushanto Neogi" },
    { sno: 140, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit IV", incharge: "Dr. Sushanto Neogi" },
    { sno: 146, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit IV", incharge: "Dr. Sushanto Neogi" },
    // Unit V (Dr. Anubhav Vindal)
    { sno: 129, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit V", incharge: "Dr. Anubhav Vindal" },
    { sno: 135, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit V", incharge: "Dr. Anubhav Vindal" },
    { sno: 141, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit V", incharge: "Dr. Anubhav Vindal" },
    { sno: 147, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit V", incharge: "Dr. Anubhav Vindal" },
    // Unit VI (Dr. Deepak Ghuliani)
    { sno: 130, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit VI", incharge: "Dr. Deepak Ghuliani" },
    { sno: 136, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit VI", incharge: "Dr. Deepak Ghuliani" },
    { sno: 142, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit VI", incharge: "Dr. Deepak Ghuliani" },
    { sno: 148, start: "2026-08-22", end: "2026-10-02", dept: "Surgery", unit: "Unit VI", incharge: "Dr. Deepak Ghuliani" },

    // ================= PERIOD 2: 03/10/2026 to 09/10/2026 (1 Week Transition) =================
    { sno: 137, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit I", incharge: "Dr. C B Singh" },
    { sno: 143, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit I", incharge: "Dr. C B Singh" },
    { sno: 121, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit I", incharge: "Dr. C B Singh" },
    { sno: 138, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit II", incharge: "Dr. Pawan Lal" },
    { sno: 144, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit II", incharge: "Dr. Pawan Lal" },
    { sno: 122, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit II", incharge: "Dr. Pawan Lal" },
    { sno: 139, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit III", incharge: "Dr. Rajdeep Singh" },
    { sno: 145, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit III", incharge: "Dr. Rajdeep Singh" },
    { sno: 117, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit III", incharge: "Dr. Rajdeep Singh" },
    { sno: 123, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit III", incharge: "Dr. Rajdeep Singh" },
    { sno: 140, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit IV", incharge: "Dr. Sushanto Neogi" },
    { sno: 146, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit IV", incharge: "Dr. Sushanto Neogi" },
    { sno: 118, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit IV", incharge: "Dr. Sushanto Neogi" },
    { sno: 124, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit IV", incharge: "Dr. Sushanto Neogi" },
    { sno: 141, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit V", incharge: "Dr. Anubhav Vindal" },
    { sno: 147, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit V", incharge: "Dr. Anubhav Vindal" },
    { sno: 119, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit V", incharge: "Dr. Anubhav Vindal" },
    { sno: 142, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit VI", incharge: "Dr. Deepak Ghuliani" },
    { sno: 148, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit VI", incharge: "Dr. Deepak Ghuliani" },
    { sno: 120, start: "2026-10-03", end: "2026-10-09", dept: "Surgery", unit: "Unit VI", incharge: "Dr. Deepak Ghuliani" },

    // ================= PERIOD 3: 10/10/2026 to 20/11/2026 (6 Weeks) =================
    // Unit I
    { sno: 121, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit I", incharge: "Dr. C B Singh" },
    { sno: 100, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit I", incharge: "Dr. C B Singh" },
    { sno: 106, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit I", incharge: "Dr. C B Singh" },
    { sno: 111, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit I", incharge: "Dr. C B Singh" },
    { sno: 116, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit I", incharge: "Dr. C B Singh" },
    // Unit II
    { sno: 122, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit II", incharge: "Dr. Pawan Lal" },
    { sno: 102, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit II", incharge: "Dr. Pawan Lal" },
    { sno: 107, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit II", incharge: "Dr. Pawan Lal" },
    { sno: 207, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit II", incharge: "Dr. Pawan Lal" },
    { sno: 112, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit II", incharge: "Dr. Pawan Lal" },
    // Unit III
    { sno: 103, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit III", incharge: "Dr. Rajdeep Singh" },
    { sno: 108, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit III", incharge: "Dr. Rajdeep Singh" },
    { sno: 204, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit III", incharge: "Dr. Rajdeep Singh" },
    { sno: 117, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit III", incharge: "Dr. Rajdeep Singh" },
    // Unit IV
    { sno: 123, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit IV", incharge: "Dr. Sushanto Neogi" },
    { sno: 104, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit IV", incharge: "Dr. Sushanto Neogi" },
    { sno: 203, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit IV", incharge: "Dr. Sushanto Neogi" },
    { sno: 113, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit IV", incharge: "Dr. Sushanto Neogi" },
    { sno: 118, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit IV", incharge: "Dr. Sushanto Neogi" },
    // Unit V
    { sno: 124, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit V", incharge: "Dr. Anubhav Vindal" },
    { sno: 101, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit V", incharge: "Dr. Anubhav Vindal" },
    { sno: 109, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit V", incharge: "Dr. Anubhav Vindal" },
    { sno: 114, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit V", incharge: "Dr. Anubhav Vindal" },
    { sno: 119, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit V", incharge: "Dr. Anubhav Vindal" },
    // Unit VI
    { sno: 105, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit VI", incharge: "Dr. Deepak Ghuliani" },
    { sno: 110, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit VI", incharge: "Dr. Deepak Ghuliani" },
    { sno: 115, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit VI", incharge: "Dr. Deepak Ghuliani" },
    { sno: 120, start: "2026-10-10", end: "2026-11-20", dept: "Surgery", unit: "Unit VI", incharge: "Dr. Deepak Ghuliani" }
  ];
