// UC4
let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList=getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent=empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');


});


//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
        if(empPayrollList.length ==0) return;
    let innerHtml = `${headerHtml}`;
        for (const empPayrollData of empPayrollList){
           innerHtml = `${innerHtml}
        
    
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
        }

    document.querySelector('#table-display').innerHTML = innerHtml;
}
