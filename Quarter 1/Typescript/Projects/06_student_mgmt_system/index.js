import inquirer from 'inquirer';
class Student {
    constructor(name) {
        this.balance = 0;
        this.coursesEnrolled = [];
        this.id = Student.nextID;
        Student.nextID = Student.nextID + 1;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    loadBalance(amount) {
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
    enroll(courseCode, courseFee) {
        this.coursesEnrolled.push(courseCode);
        this.balance -= courseFee;
    }
    showStatus() {
        return [this.id, this.name, this.balance, Student.nextID, this.coursesEnrolled];
    }
    alreadyEnrolled(courseCode) {
        return (this.coursesEnrolled.indexOf(courseCode) !== -1);
    }
}
Student.nextID = 10000;
class Course {
    constructor(name, code, creditHours, courseFee, totalStudentsAllowed) {
        this.studentsEnrolledSoFar = 0;
        this.studentsEnrolled = [];
        this.name = name;
        this.code = code;
        this.creditHours = creditHours;
        this.courseFee = courseFee;
        this.totalStudentsAllowed = totalStudentsAllowed;
    }
    getCode() {
        return this.code;
    }
    getCourseFee() {
        return this.courseFee;
    }
    checkEligibility(studentBalance) {
        if (studentBalance < this.courseFee) {
            return 1;
        }
        else if (this.studentsEnrolledSoFar >= this.totalStudentsAllowed) {
            return 2;
        }
        else {
            return 0;
        }
    }
    enroll(id) {
        this.studentsEnrolled.push(id);
        this.studentsEnrolledSoFar++;
    }
    showStatus() {
        return [this.name, this.code, this.creditHours, this.courseFee, this.totalStudentsAllowed, this.studentsEnrolledSoFar, this.studentsEnrolled];
    }
}
class StudentMgmtSystem {
    constructor() {
        this.studentsArr = [];
        this.coursesArr = [];
    }
    createStudent(name) {
        this.studentsArr.push(new Student(name));
        return this.studentsArr[this.studentsArr.length - 1].getId();
    }
    isDuplicateCode(courseCode) {
        for (const course of this.coursesArr) {
            if (course.getCode().toLowerCase() == courseCode.toLowerCase()) {
                return true;
            }
        }
        return false;
    }
    createCourse(name, code, creditHours, tutionFee, totalStudentsAllowed) {
        if (this.isDuplicateCode(code)) {
            throw Error("Course Code Already Exist!");
        }
        else {
            this.coursesArr.push(new Course(name, code, creditHours, tutionFee, totalStudentsAllowed));
        }
    }
    getStudentIndex(studentID) {
        return this.studentsArr.findIndex((student) => {
            return student.getId() === studentID;
        });
    }
    getCourseIndex(courseCode) {
        return this.coursesArr.findIndex((course) => {
            return course.getCode() === courseCode;
        });
    }
    payTuition(studentID, amount) {
        const studentIndex = this.getStudentIndex(studentID);
        if (studentIndex != -1) {
            this.studentsArr[studentIndex].loadBalance(amount);
        }
        else {
            throw Error("Student not found!");
        }
    }
    enrollCourse(studentID, courseCode) {
        const studentIndex = this.getStudentIndex(studentID);
        const courseIndex = this.getCourseIndex(courseCode);
        if (studentIndex != -1 && courseIndex != -1) {
            const studentBalance = this.studentsArr[studentIndex].getBalance();
            const courseFee = this.coursesArr[courseIndex].getCourseFee();
            if (this.studentsArr[studentIndex].alreadyEnrolled(courseCode)) {
                throw Error("Already Registered to this Course");
            }
            else {
                const errorCode = this.coursesArr[courseIndex].checkEligibility(studentBalance);
                if (errorCode == 0) {
                    this.coursesArr[courseIndex].enroll(studentID);
                    this.studentsArr[studentIndex].enroll(courseCode, courseFee);
                }
                else if (errorCode == 1) {
                    throw Error("insuffiucient Balance!");
                }
                else {
                    throw Error("Course Seats Full!");
                }
            }
        }
        else {
            throw Error("Wrong Student ID or Course Code!");
        }
    }
    showStudentStatus(studentID) {
        const studentIndex = this.getStudentIndex(studentID);
        if (studentIndex != -1) {
            console.log(`[ Student ID, Name, Balance, Next ID, [Enrolled Courses] ]`);
            console.log(this.studentsArr[studentIndex].showStatus());
        }
        else {
            throw Error("Wrong Student ID!");
        }
    }
    showCourseStatus(courseCode) {
        const courseIndex = this.getCourseIndex(courseCode);
        if (courseIndex != -1) {
            console.log(`[ Course Name, Code, Credit Hours, Course Fee, Max Allowed Students, No of Enrolled Students [Enrolled Student's IDs] ]`);
            console.log(this.coursesArr[courseIndex].showStatus());
        }
        else {
            throw Error("Wrong Course Code!");
        }
    }
    allStudentsReport() {
        const tableData = [];
        this.studentsArr.forEach((student) => {
            const [id, name, balance, nextID, coursesEnrolled] = student.showStatus();
            const rowData = {};
            rowData["Student ID"] = id;
            rowData["Name"] = name;
            rowData["Balance"] = balance;
            rowData["Next ID"] = nextID;
            rowData["Enrolled Courses"] = coursesEnrolled.join(", ");
            tableData.push(rowData);
        });
        console.table(tableData, ["Student ID", "Name", "Balance", "Next ID", "Enrolled Courses"]);
    }
    allCoursesReport() {
        const tableData = [];
        this.coursesArr.forEach((course) => {
            const [name, code, creditHours, courseFee, totalStudentsAllowed, studentsEnrolledSoFar, studentsEnrolled] = course.showStatus();
            const rowData = {};
            rowData["Course Name"] = name;
            rowData["Course Code"] = code;
            rowData["Credit Hours"] = creditHours;
            rowData["Course Fee"] = courseFee;
            rowData["Students Allowed"] = totalStudentsAllowed;
            rowData["No of Students Enrolled"] = studentsEnrolledSoFar;
            rowData["Students Enrolled"] = studentsEnrolled.join(", ");
            tableData.push(rowData);
        });
        console.table(tableData, ["Course Name", "Course Code", "Credit Hours", "Course Fee", "Students Allowed", "No of Students Enrolled", "Students Enrolled"]);
    }
    getAllStudentsID() {
        const studentsArr = [];
        this.studentsArr.forEach((student) => studentsArr.push(student.getId()));
        return studentsArr;
    }
    getAllCourseCodes() {
        const coursesArr = [];
        this.coursesArr.forEach((course) => coursesArr.push(course.getCode()));
        return coursesArr;
    }
}
const sms = new StudentMgmtSystem();
sms.createStudent("Haseeb Aslam");
sms.createStudent("Aamir Sher");
sms.createStudent("Hasan Mumtaz");
sms.createStudent("Usman Saleen");
sms.createStudent("Muhammad Faizan");
sms.createStudent("Muhammad Ejaz");
sms.createStudent("Khizar Saleem");
sms.createCourse("Introduction to Circuits", "EE101", 3, 30000, 3);
sms.createCourse("Digital Logic Design", "EE102", 5, 50000, 4);
sms.createCourse("Programming Techniques", "CS101", 4, 50000, 7);
sms.createCourse("Circuit Theory", "EE103", 5, 60000, 3);
sms.createCourse("OOP Using Javascript", "CS102", 3, 55000, 5);
sms.createCourse("Data Structures", "CS103", 3, 45000, 5);
sms.payTuition(10000, 300000);
sms.payTuition(10003, 100000);
sms.payTuition(10006, 155000);
sms.payTuition(10004, 200000);
sms.payTuition(10002, 220000);
try {
    sms.payTuition(20000, 300000);
}
catch (error) {
    console.log(error.message);
}
sms.enrollCourse(10000, "CS101");
sms.enrollCourse(10003, "CS101");
sms.enrollCourse(10000, "EE101");
sms.enrollCourse(10002, "CS103");
sms.enrollCourse(10004, "CS102");
sms.enrollCourse(10006, "EE102");
console.clear();
MainMenu();
async function MainMenu() {
    console.log(`Welcome to Student Management System: Main Menu`);
    const { mainMenu } = await inquirer.prompt([
        {
            type: 'list',
            name: 'mainMenu',
            message: 'Select from Main Menu:',
            choices: [`Student Menu`, `Course Menu`, `Exit`]
        }
    ]);
    if (mainMenu == `Student Menu`) {
        StudentMenu();
    }
    else if (mainMenu == `Course Menu`) {
        CourseMenu();
    }
    else {
        console.log(`Thankyou for using Student Management System!`);
    }
}
async function StudentMenu() {
    console.clear();
    console.log(`Welcome to Student Management System: Student Menu`);
    const { studentMenu } = await inquirer.prompt([
        {
            type: 'list',
            name: 'studentMenu',
            message: 'Select from Main Menu:',
            choices: [`Create Student`, `Pay Tuition`, `Enroll Course`, `All Students Report`, `Back to Main Menu`]
        }
    ]);
    if (studentMenu == `Create Student`) {
        CreateStudentMenu();
    }
    else if (studentMenu == `Pay Tuition`) {
        PayTuitionMenu();
    }
    else if (studentMenu == `Enroll Course`) {
        EnrollCourseMenu();
    }
    else if (studentMenu == `All Students Report`) {
        AllStudentsReportMenu();
    }
    else {
        console.clear();
        MainMenu();
    }
}
async function CourseMenu() {
    console.clear();
    console.log(`Welcome to Student Management System: Course Menu`);
    const { courseMenu } = await inquirer.prompt([
        {
            type: 'list',
            name: 'courseMenu',
            message: 'Select from Main Menu:',
            choices: [`Create Course`, `All Courses Report`, `Back to Main Menu`]
        }
    ]);
    if (courseMenu == `Create Course`) {
        CreateCourseMenu();
    }
    else if (courseMenu == `All Courses Report`) {
        AllCoursesReportMenu();
    }
    else {
        console.clear();
        MainMenu();
    }
}
async function CreateStudentMenu() {
    console.clear();
    console.log(`Welcome to Student Management System: Create Student Menu`);
    const { createStudentMenu } = await inquirer.prompt([
        {
            type: 'input',
            name: 'createStudentMenu',
            message: 'Enter name of New Student:',
            validate(input) {
                const regex = /^.{3,}$/s;
                if (regex.test(input)) {
                    return true;
                }
                throw Error('Please provide a valid Sdtudent Name!');
            }
        }
    ]);
    const studentID = sms.createStudent(createStudentMenu);
    console.log(`Created a new Student by the name: ${createStudentMenu}, having Student ID: ${studentID}`);
    console.log();
    MainMenu();
}
async function PayTuitionMenu() {
    console.clear();
    console.log(`Welcome to Student Management System: Pay Tuition Menu`);
    const { studentID, amnt } = await inquirer.prompt([
        {
            type: 'list',
            name: 'studentID',
            message: 'Select a Student ID to pay fee:',
            choices: sms.getAllStudentsID()
        },
        {
            type: 'number',
            name: 'amnt',
            message: 'Enter the tuition fee amount that student has paid:',
            validate(input) {
                if (!isNaN(input)) {
                    return true;
                }
                throw Error('Please provide numbers as operands!');
            }
        }
    ]);
    sms.payTuition(studentID, amnt);
    console.log(`Updated the balance of Student ID: ${studentID}, after adding amount: ${amnt}`);
    console.log();
    MainMenu();
}
async function EnrollCourseMenu() {
    console.clear();
    console.log(`Welcome to Student Management System: Enroll Course Menu`);
    const { studentID, courseCode } = await inquirer.prompt([
        {
            type: 'list',
            name: 'studentID',
            message: 'Select a Student ID to enroll Course:',
            choices: sms.getAllStudentsID()
        },
        {
            type: 'list',
            name: 'courseCode',
            message: 'Select a Course Code to enroll:',
            choices: sms.getAllCourseCodes()
        },
    ]);
    try {
        sms.enrollCourse(studentID, courseCode);
        console.log(`Student: ${studentID} has enrolled course: ${courseCode}`);
    }
    catch (error) {
        console.log(error.message);
    }
    console.log();
    MainMenu();
}
async function AllStudentsReportMenu() {
    console.clear();
    console.log(`Welcome to Student Management System: All Students Report`);
    sms.allStudentsReport();
    console.log();
    MainMenu();
}
async function CreateCourseMenu() {
    console.clear();
    console.log(`Welcome to Student Management System: Create Course`);
    const { courseName, courseCode, creditHours, tutionFee, totalStudentsAllowed } = await inquirer.prompt([
        {
            type: 'input',
            name: 'courseName',
            message: 'Enter name of New Course:',
            validate(input) {
                const regex = /^.{3,}$/s;
                if (regex.test(input)) {
                    return true;
                }
                throw Error('Please provide a valid Course Name!');
            }
        },
        {
            type: 'input',
            name: 'courseCode',
            message: 'Enter code of New Course:',
            validate(input) {
                const regex = /^[a-zA-Z0-9]{3,}$/;
                if (regex.test(input)) {
                    return true;
                }
                throw Error('Please provide a valid Course Code!');
            }
        },
        {
            type: 'number',
            name: 'creditHours',
            message: 'Enter the Credit Hours of New Course:',
            validate(input) {
                if (!isNaN(input)) {
                    return true;
                }
                throw Error('Please provide numbers as operands!');
            }
        },
        {
            type: 'number',
            name: 'tutionFee',
            message: 'Enter the Tuition Fee of New Course:',
            validate(input) {
                if (!isNaN(input)) {
                    return true;
                }
                throw Error('Please provide numbers as operands!');
            }
        },
        {
            type: 'number',
            name: 'totalStudentsAllowed',
            message: 'Enter the Total seats of New Course:',
            validate(input) {
                if (!isNaN(input)) {
                    return true;
                }
                throw Error('Please provide numbers as operands!');
            }
        }
    ]);
    try {
        sms.createCourse(courseName, courseCode, creditHours, tutionFee, totalStudentsAllowed);
        console.log(`${courseName}(${courseCode}) has been added successfully!`);
    }
    catch (error) {
        console.log(error.message);
    }
    console.log();
    MainMenu();
}
async function AllCoursesReportMenu() {
    console.clear();
    console.log(`Welcome to Student Management System: All Courses Report`);
    sms.allCoursesReport();
    console.log();
    MainMenu();
}
