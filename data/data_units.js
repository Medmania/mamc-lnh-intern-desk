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
 
// ================= D1 to D6 OBS & GYNAE UNITS (22/08/2026 to 09/10/2026 | S.No 149 to 234 Ascending) =================
  // 1. S.No 149: Sakshi Choudhary (D1) -> Unit 1
  { sno: 149, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 1", incharge: "Dr. Latika Sahu" },
  // 2. S.No 150: Sakshi Singh (D1) -> Unit 2
  { sno: 150, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 2", incharge: "Dr. Sangeeta Gupta" },
  // 3. S.No 151: Sangam Yadav (D1) -> Unit 3
  { sno: 151, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 3", incharge: "Dr. Y.M. Mala" },
  // 4. S.No 152: Sanjna Tandon (D1) -> Unit 4
  { sno: 152, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 4", incharge: "Dr. Deepti Goswami" },
  // 5. S.No 153: Sanya Sheoran (D1) -> Unit 5
  { sno: 153, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 5", incharge: "Dr. Madhavi M. Gupta" },
  // 6. S.No 154: Sarit Swaroop (D2) -> Unit 6
  { sno: 154, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 6", incharge: "Dr. Krishna Agarwal" },

  // 7. S.No 155: Sarthak Bakhshi (D2) -> Unit 1
  { sno: 155, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 1", incharge: "Dr. Latika Sahu" },
  // 8. S.No 156: Sarthak Joshi (D2) -> Unit 2
  { sno: 156, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 2", incharge: "Dr. Sangeeta Gupta" },
  // 9. S.No 157: Satyajit Mallick (D2) -> Unit 3
  { sno: 157, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 3", incharge: "Dr. Y.M. Mala" },
  // 10. S.No 158: Sawan Kumar (D3) -> Unit 4
  { sno: 158, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 4", incharge: "Dr. Deepti Goswami" },
  // 11. S.No 159: Shantanu Verma (D3) -> Unit 5
  { sno: 159, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 5", incharge: "Dr. Madhavi M. Gupta" },
  // 12. S.No 160: Shaurya Agarwal (D3) -> Unit 6
  { sno: 160, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 6", incharge: "Dr. Krishna Agarwal" },

  // 13. S.No 161: Shivam Prasad Mehta (D3) -> Unit 1
  { sno: 161, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 1", incharge: "Dr. Latika Sahu" },
  // 14. S.No 162: Shivani (D4) -> Unit 2
  { sno: 162, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 2", incharge: "Dr. Sangeeta Gupta" },
  // 15. S.No 163: Shivani Saini (D4) -> Unit 3
  { sno: 163, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 3", incharge: "Dr. Y.M. Mala" },
  // 16. S.No 164: Shivika Dudani (D4) -> Unit 4
  { sno: 164, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 4", incharge: "Dr. Deepti Goswami" },
  // 17. S.No 165: Shreya Sabherwal (D4) -> Unit 5
  { sno: 165, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 5", incharge: "Dr. Madhavi M. Gupta" },
  // 18. S.No 166: Shreya Singh (D5) -> Unit 6
  { sno: 166, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 6", incharge: "Dr. Krishna Agarwal" },

  // 19. S.No 167: Shubham Solanki (D5) -> Unit 1
  { sno: 167, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 1", incharge: "Dr. Latika Sahu" },
  // 20. S.No 168: Shubhesh Saxena (D5) -> Unit 2
  { sno: 168, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 2", incharge: "Dr. Sangeeta Gupta" },
  // 21. S.No 169: Siddhant Kumar (D5) -> Unit 3
  { sno: 169, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 3", incharge: "Dr. Y.M. Mala" },
  // 22. S.No 170: Siddharth Kumar (D6) -> Unit 4
  { sno: 170, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 4", incharge: "Dr. Deepti Goswami" },
  // 23. S.No 171: Simran Tatwal (D6) -> Unit 5
  { sno: 171, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 5", incharge: "Dr. Madhavi M. Gupta" },
  // 24. S.No 172: Somyam Kumar (D6) -> Unit 6
  { sno: 172, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 6", incharge: "Dr. Krishna Agarwal" },

  // 25. S.No 173: Soni Shlok Mahesh (D6) -> Unit 1
  { sno: 173, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 1", incharge: "Dr. Latika Sahu" },
  // 26. S.No 205: Nikeeta Kumari (20) (D2) -> Unit 2
  { sno: 205, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 2", incharge: "Dr. Sangeeta Gupta" },
  // 27. S.No 206: Deepak Kumar Meena (19) (D3) -> Unit 3
  { sno: 206, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 3", incharge: "Dr. Y.M. Mala" },
  // 28. S.No 208: Farheen Raihan (17) (D4) -> Unit 4
  { sno: 208, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 4", incharge: "Dr. Deepti Goswami" },
  // 29. S.No 233: Rahul Kumar (D5) -> Unit 5
  { sno: 233, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 5", incharge: "Dr. Madhavi M. Gupta" },
  // 30. S.No 234: Rohit Charan (D6) -> Unit 6
  { sno: 234, start: "2026-08-22", end: "2026-10-09", dept: "Obstetrics & Gynaecology", unit: "Unit 6", incharge: "Dr. Krishna Agarwal" }
 ];
