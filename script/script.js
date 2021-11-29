var userAutoInc = 100;
var enrollAutoInc = 1000;
var id;
var eid;
var CurrentUserId;
var CurrentUserName;
var user = /** @class */ (function () {
    function user(name, age, mobileNo) {
        userAutoInc++;
        this.userId = "ST" + userAutoInc.toString();
        id = this.userId;
        this.userName = name;
        this.userAge = age;
        this.mobileNo = mobileNo;
    }
    return user;
}());
var enroll = /** @class */ (function () {
    function enroll(cousre, days, userid) {
        enrollAutoInc++;
        this.enrollId = "EI" + enrollAutoInc.toString();
        this.courseName = cousre;
    }
    return enroll;
}());
var userArray = new Array();
var enrollArray = new Array();
userArray.push(new user('Mukilan', 24, 9626303097));
userArray.push(new user('Anbu', 24, 7865489612));
function main() {
    var main = document.getElementById('maindiv');
    main.style.visibility = "hidden";
}
function newuser1() {
    var newuser = document.getElementById('newuser');
    var existinguser = document.getElementById('exist');
    var mainmenu = document.getElementById('mainmenu');
    var coursediv = document.getElementById('coursediv');
    var enrollhisdiv = document.getElementById('enrolldiv');
    var main = document.getElementById('maindiv');
    main.style.visibility = "hidden";
    newuser.style.visibility = "visible";
    existinguser.style.visibility = "hidden";
    mainmenu.style.visibility = "hidden";
    coursediv.style.visibility = "hidden";
    enrollhisdiv.style.visibility = "hidden";
}
function existingUser1() {
    var newuser = document.getElementById('newuser');
    var existinguser = document.getElementById('exist');
    var mainmenu = document.getElementById('mainmenu');
    var coursediv = document.getElementById('coursediv');
    var enrollhisdiv = document.getElementById('enrolldiv');
    var main = document.getElementById('maindiv');
    main.style.visibility = "hidden";
    newuser.style.visibility = "hidden";
    existinguser.style.visibility = "visible";
    mainmenu.style.visibility = "hidden";
    coursediv.style.visibility = "hidden";
    enrollhisdiv.style.visibility = "hidden";
    var exuser = document.getElementById('existUser');
    exuser.innerHTML = "<h4>Existing Users<h4>";
    for (var i = 0; i < userArray.length; i++) {
        exuser.innerHTML += "User Name : ".concat(userArray[i].userName, " | User ID : ").concat(userArray[i].userId, "<br>");
    }
}
function register() {
    var newUserName = document.getElementById('name').value;
    var newAge = document.getElementById('age').value;
    var newMobileNo = document.getElementById('mobileno').value;
    userArray.push(new user(newUserName, +newAge, +newMobileNo));
    alert(newUserName + " Your ID is " + id);
    var main = document.getElementById('maindiv');
    main.style.visibility = "visible";
    var newuser = document.getElementById('newuser');
    newuser.style.visibility = "hidden";
}
function login1() {
    main();
    var nouserId = false;
    var exuid = document.getElementById('uid');
    main();
    for (var i = 0; i < userArray.length; i++) {
        if (userArray[i].userId == exuid.value) {
            CurrentUserId = userArray[i].userId;
            CurrentUserName = userArray[i].userName;
            mainmenu();
            return;
        }
        else {
            nouserId = true;
        }
    }
    if (nouserId) {
        alert("Enter a valid User ID");
    }
}
function mainmenu() {
    var newuser = document.getElementById('newuser');
    var existinguser = document.getElementById('exist');
    var mainmenu = document.getElementById('mainmenu');
    var coursediv = document.getElementById('coursediv');
    var enrollhisdiv = document.getElementById('enrolldiv');
    newuser.style.visibility = "hidden";
    existinguser.style.visibility = "hidden";
    mainmenu.style.visibility = "visible";
    coursediv.style.visibility = "hidden";
    enrollhisdiv.style.visibility = "hidden";
    var wel = document.getElementById('welcome');
    wel.innerHTML = "<h3>Welcome ".concat(CurrentUserName, "<h3>");
}
function availablecourse1() {
    var newuser = document.getElementById('newuser');
    var existinguser = document.getElementById('exist');
    var mainmenu = document.getElementById('mainmenu');
    var coursediv = document.getElementById('coursediv');
    var enrollhisdiv = document.getElementById('enrolldiv');
    newuser.style.visibility = "hidden";
    existinguser.style.visibility = "hidden";
    mainmenu.style.visibility = "hidden";
    coursediv.style.visibility = "visible";
    enrollhisdiv.style.visibility = "hidden";
}
function courseenroll() {
    var coursname = document.getElementById('course').value;
    var day = document.getElementById('days').value;
    var uid = CurrentUserId;
    enrollArray.push(new enroll(coursname, +day, uid));
    alert("Enrolled Successfully");
    mainmenu();
}
function enrolledcourse1() {
    var newuser = document.getElementById('newuser');
    var existinguser = document.getElementById('exist');
    var mainmenu = document.getElementById('mainmenu');
    var coursediv = document.getElementById('coursediv');
    var enrollhisdiv = document.getElementById('enrolldiv');
    newuser.style.visibility = "hidden";
    existinguser.style.visibility = "hidden";
    mainmenu.style.visibility = "hidden";
    coursediv.style.visibility = "hidden";
    enrollhisdiv.style.visibility = "visible";
    let enrollhistory = document.getElementById('enrollhistory');
    enrollhistory.style.display = "block";
    let courseCount = 0;
    let dayscount = 0;
    let courseDetails = "";
    for (var i = 0; i < enrollArray.length; i++)
        if (CurrentUserId == enrollArray[i].userId) {
            dayscount += enrollArray[i].requiredDays;
            courseDetails += enrollArray[i].courseName + ",";
            courseCount++;
        }
    let v = "Enrolled Courses History : " + courseDetails + " and the count is " + courseCount.toString() + " total due days are:" + dayscount.toString();
    document.getElementById("enrollhistory").style.color = "green";
    document.getElementById("enrollhistory").innerHTML = v;
}
