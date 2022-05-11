// UC4
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();

});

//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let employeePayrollData=createEmployeePayrollJSON()[0];

    const innerHtml = `${headerHtml}     
    
                <tr>
                    <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
                    <td>${empPayrollData._name}</td>
                    <td>${empPayrollData._gender}</td>
                    <td><div class="dept-label">${empPayrollData._department}</div>
                         <td>${empPayrollData._salary}</td>
                         <td>${empPayrollData._startDate}</td>
                         <td>
                             <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="delete.png">
                             <img id="${empPayrollData._id}" onclick="update(this)" alt="edit" src="edit.png">
                         </td>
                </tr>`;
    document.querySelector('#table-display').innerHTML = innerHtml;
}

// UC5
const getDeptHtml = (deptList) =>{
    let deptHtml = '';
    for (const dept of deptList){
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}


//Template literal ES6 feature
/*const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHTML=`${headerHtml}`;
    let empPayrollList=createEmployeePayrollJSON();
        for (const empPayrollData of empPayrollList){
           innerHtml = `${innerHtml}
        
    
                <tr>
                    <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
                    <td>${empPayrollData._name}</td>
                    <td>${empPayrollData._gender}</td>
                    <td><div class="dept-label">${empPayrollData._department[0]}</div>
                         <div class="dept-label">${empPayrollData._department[1]}</div></td>
                         <td>${empPayrollData._salary}</td>
                         <td>${empPayrollData._startDate}</td>
                         <td>
                             <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="delete.png">
                             <img id="${empPayrollData._id}" onclick="update(this)" alt="edit" src="edit.png">
                         </td>
                </tr>`;
        }

    document.querySelector('#table-display').innerHTML = innerHtml;
}*/

