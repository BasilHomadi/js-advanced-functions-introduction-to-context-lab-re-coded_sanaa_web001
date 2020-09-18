// Your code here
function createEmployeeRecord(srArr){

    let empInfo={
        firstName: srArr[0],
        familyName: srArr[1],
        title: srArr[2],
        payPerHour: srArr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return empInfo;
 }

function createEmployeeRecords(srArr){
     let recor = srArr.map(e=>createEmployeeRecord(e))
 return recor;
 }
 
 function createTimeInEvent(empinfo,time){
     let myTime= time.split(' ');
     let timeIn ={
         type: "TimeIn",
         hour: parseInt(myTime[1]),
         date: myTime[0]
     }
      let myObj= Object.assign({}, empinfo);
      myObj.timeInEvents.push(timeIn);
      return myObj;
 }