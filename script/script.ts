
let userAutoInc = 100;
let enrollAutoInc = 1000;
let id;
let eid;
let CurrentUserId:string;
let CurrentUserName : string;

class user{
    userId: string;
    userName : string;
    userAge : number;
    mobileNo : number;
    constructor(name:string,age:number, mobileNo:number){
     userAutoInc++;
     this.userId = "ST" + userAutoInc.toString();
     id=this.userId;
     this.userName = name;
     this.userAge = age;
     this.mobileNo = mobileNo;
    }
}

class enroll{
    enrollId :string;
    courseName :string;
    requiredDays : number;
    userId : string;
    constructor(cousre: string, days: number , userid : string){
        enrollAutoInc++;
        this.enrollId = "EI" + enrollAutoInc.toString();
        this.courseName = cousre;
    }
}

let userArray: Array<user> = new Array<user>();
let enrollArray : Array<enroll> = new Array<enroll>();

userArray.push(new user('Mukilan',24,9626303097));
userArray.push(new user('Anbu',24,7865489612));


function main()
{
    let main = document.getElementById('maindiv') as HTMLDivElement;
    main.style.visibility = "hidden";
}

function newuser1()
{
    let newuser = document.getElementById('newuser') as HTMLDivElement;
    let existinguser = document.getElementById('exist') as HTMLDivElement;
    let mainmenu = document.getElementById('mainmenu') as HTMLDivElement;
    let coursediv = document.getElementById('coursediv') as HTMLDivElement;
    let enrollhisdiv = document.getElementById('enrolldiv') as HTMLDivElement;
    let main = document.getElementById('maindiv') as HTMLDivElement;
    main.style.visibility = "hidden";
    newuser.style.visibility = "visible";
    existinguser.style.visibility = "hidden";
    mainmenu.style.visibility = "hidden";
    coursediv.style.visibility = "hidden";
    enrollhisdiv.style.visibility = "hidden";

}
function existingUser1()
{
    let newuser = document.getElementById('newuser') as HTMLDivElement;
    let existinguser = document.getElementById('exist') as HTMLDivElement;
    let mainmenu = document.getElementById('mainmenu') as HTMLDivElement;
    let coursediv = document.getElementById('coursediv') as HTMLDivElement;
    let enrollhisdiv = document.getElementById('enrolldiv') as HTMLDivElement;
    let main = document.getElementById('maindiv') as HTMLDivElement;
    main.style.visibility = "hidden";
    newuser.style.visibility = "hidden";
    existinguser.style.visibility = "visible";
    mainmenu.style.visibility = "hidden";
    coursediv.style.visibility = "hidden";
    enrollhisdiv.style.visibility = "hidden";

    let exuser = (document.getElementById('existUser') as HTMLLabelElement);

    exuser.innerHTML = "<h4>Existing Users<h4>";

    for(let i =0 ; i<userArray.length;i++)
    {
        exuser.innerHTML += `User Name : ${userArray[i].userName} | User ID : ${userArray[i].userId}<br>`;
    }

}
function register()
{
    let newUserName = (document.getElementById('name') as HTMLInputElement).value;
    let newAge = (document.getElementById('age') as HTMLInputElement).value;
    let newMobileNo = (document.getElementById('mobileno') as HTMLInputElement).value;
    userArray.push(new user(newUserName,+newAge,+newMobileNo));
    alert(newUserName + " Your ID is " + id);
    
    let main = document.getElementById('maindiv') as HTMLDivElement;
    main.style.visibility = "visible";
    let newuser = document.getElementById('newuser') as HTMLDivElement;
    newuser.style.visibility = "hidden";
    
}
function login1()
{
    main();
    let nouserId : Boolean = false;

    let exuid = document.getElementById('uid') as HTMLInputElement;
    main();
    for(let i =0 ; i<userArray.length;i++)
    {
        if(userArray[i].userId==exuid.value)
        {
            CurrentUserId = userArray[i].userId;
            CurrentUserName = userArray[i].userName;
            mainmenu();
            return;
        }
        else
        {
          nouserId= true;
        }
    }
    if(nouserId)
    {
        alert("Enter a valid User ID");
    }

}

function mainmenu()  //Available Course
{
    let newuser = document.getElementById('newuser') as HTMLDivElement;
    let existinguser = document.getElementById('exist') as HTMLDivElement;
    let mainmenu = document.getElementById('mainmenu') as HTMLDivElement;
    let coursediv = document.getElementById('coursediv') as HTMLDivElement;
    let enrollhisdiv = document.getElementById('enrolldiv') as HTMLDivElement;
    
    newuser.style.visibility = "hidden";
    existinguser.style.visibility = "hidden";
    mainmenu.style.visibility = "visible";
    coursediv.style.visibility = "hidden";
    enrollhisdiv.style.visibility = "hidden";

    let wel = document.getElementById('welcome') as HTMLLabelElement;
    wel.innerHTML = `<h3>Welcome ${CurrentUserName}<h3>`
}


function availablecourse1()  //Available Course
{
    let newuser = document.getElementById('newuser') as HTMLDivElement;
    let existinguser = document.getElementById('exist') as HTMLDivElement;
    let mainmenu = document.getElementById('mainmenu') as HTMLDivElement;
    let coursediv = document.getElementById('coursediv') as HTMLDivElement;
    let enrollhisdiv = document.getElementById('enrolldiv') as HTMLDivElement;
    
    newuser.style.visibility = "hidden";
    existinguser.style.visibility = "hidden";
    mainmenu.style.visibility = "hidden";
    coursediv.style.visibility = "visible";
    enrollhisdiv.style.visibility = "hidden";

}
function courseenroll()
{
  

    let coursname = (document.getElementById('course') as HTMLSelectElement).value;
    let day = (document.getElementById('days') as HTMLInputElement).value;

    let uid = CurrentUserId;

    enrollArray.push(new enroll(coursname,+day,uid));

    alert("Enrolled Successfully");
    mainmenu();

}
function enrolledcourse1()
{
    let newuser = document.getElementById('newuser') as HTMLDivElement;
    let existinguser = document.getElementById('exist') as HTMLDivElement;
    let mainmenu = document.getElementById('mainmenu') as HTMLDivElement;
    let coursediv = document.getElementById('coursediv') as HTMLDivElement;
    let enrollhisdiv = document.getElementById('enrolldiv') as HTMLDivElement;
    
    newuser.style.visibility = "hidden";
    existinguser.style.visibility = "hidden";
    mainmenu.style.visibility = "hidden";
    coursediv.style.visibility = "hidden";
    enrollhisdiv.style.visibility = "visible";

    let enrollhistory = document.getElementById('enrollhistory') as HTMLLabelElement;
    
    enrollhistory.style.display = "block";
    let courseCount =0;
    let dayscount : number=0 ;
    let courseDetails : string = "";
    

    
    for (let i =0 ; i < enrollArray.length;i++)
        if( CurrentUserId ==enrollArray[i].userId )
        {
        
            dayscount += enrollArray[i].requiredDays;
            courseDetails += enrollArray[i].courseName +",";
            courseCount++;
           
        
        }

        var v = "Enrolled Courses History : " + courseDetails + " and the count is" + courseCount.toString() + " total due days are:" + dayscount.toString();
    document.getElementById("enrollhistory").style.color = "green";
    document.getElementById("enrollhistory").innerHTML = v;

}

