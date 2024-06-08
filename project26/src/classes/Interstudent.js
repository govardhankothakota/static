class InterStudent {
  static languagePassMarks = 35;
  static mathsPassMarks = 26;
  static sciPassMarks = 21;
  static labPassMarks = 10;

  static calculateFirstYearResult = (
    studentName,
    eng1stMarks,
    sans1stMarks,
    m1AMarks,
    m1BMarks,
    phy1stMarks,
    chem1stMarks
  ) => {
    this.firstYearMarks =
      eng1stMarks +
      sans1stMarks +
      m1AMarks +
      m1BMarks +
      phy1stMarks +
      chem1stMarks;
    this.firstYearPerc = (this.firstYearMarks / 470) * 100;

    if (
      eng1stMarks >= InterStudent.languagePassMarks &&
      sans1stMarks >= InterStudent.languagePassMarks &&
      m1AMarks >= InterStudent.mathsPassMarks &&
      m1BMarks >= InterStudent.mathsPassMarks &&
      phy1stMarks >= InterStudent.sciPassMarks &&
      chem1stMarks >= InterStudent.sciPassMarks
    ) {
      console.log(
        `${this.firstYearMarks} , ${this.firstYearPerc.toFixed(2)}, ${studentName} Passed in 1stInter.`);
    } else {
      console.log(
        `${this.firstYearMarks} , ${this.firstYearPerc.toFixed(2)},  ${studentName} Failed in 1stInter.`);
    }
  };

  static calculateSecondYearResult = (
    studentName,
    eng2ndMarks,
    sans2ndMarks,
    m2AMarks,
    m2BMarks,
    phy2ndMarks,
    chem2ndMarks,
    phyLabMarks,
    chemLabMarks
  ) => {
    this.secondYearMarks =
      eng2ndMarks +
      sans2ndMarks +
      m2AMarks +
      m2BMarks +
      phy2ndMarks +
      chem2ndMarks +
      phyLabMarks +
      chemLabMarks;
    this.secondYearPerc = (this.secondYearMarks / 530) * 100;

    if (
      eng2ndMarks >= InterStudent.languagePassMarks &&
      sans2ndMarks >= InterStudent.languagePassMarks &&
      m2AMarks >= InterStudent.mathsPassMarks &&
      m2BMarks >= InterStudent.mathsPassMarks &&
      phy2ndMarks >= InterStudent.sciPassMarks &&
      chem2ndMarks >= InterStudent.sciPassMarks &&
      phyLabMarks >= InterStudent.labPassMarks &&
      chemLabMarks >= InterStudent.labPassMarks
    ) {
      console.log(
        `${this.secondYearMarks} , ${this.secondYearPerc.toFixed(2)}, ${studentName} Passed in 2ndInter.`);
    } else {
      console.log(
        `${this.secondYearMarks} , ${this.secondYearPerc.toFixed(2)},  ${studentName} Failed in 2ndInter.`)}
  };
  static totalResult = () => {
    this.totalMarks = this.firstYearMarks + this.secondYearMarks;
    this.totalPerc = (this.totalMarks / 1000) * 100;
    console.log(
      `TotalMarks : ${this.totalMarks},TotalPercentage ; ${this.totalPerc.toFixed(2)}`);
  };
}
export default InterStudent;
