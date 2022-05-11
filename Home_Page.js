// UC4
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();

});
//Template literal ES6 feature
const createInnerHtml = () => {
    const innerHTML = `
<tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
</tr>
<tr>
    <td><img class="profile" alt="" src="profile1.jpg" style="width: 70px;
        height: 52px;" ></td>
    <td>Prateek Pai</td>
    <td>Male</td>
    <td><div class="dept-label">HR</div>
         <div class="dept-label">Finance</div></td>
         <td>800000</td>
         <td>14 Feb 2020</td>
         <td>
             <img id="1" onclick="remove(this)" alt="delete" src="delete-black-18dp.svg">
             <img id="1" onclick="update(this)" alt="edit" src="create-black-18dp.svg">
         </td>
</tr>`;

    document.querySelector('#table-display').innerHTML = innerHtml;
}



//Template literal ES6 feature
/*const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";

    const innerHtml = `${headerHtml}
        
    
<tr>
    <td><img class="profile" alt="" src="profile1.jpg" style="width: 70px; height: 52px;" ></td>
    <td>Prateek Pai</td>
    <td>Male</td>
    <td><div class="dept-label">HR</div>
         <div class="dept-label">Finance</div></td>
         <td>800000</td>
         <td>14 Feb 2020</td>
         <td>
             <img id="1" onclick="remove(this)" alt="delete" src="delete-black-18dp.svg">
             <img id="1" onclick="update(this)" alt="edit" src="create-black-18dp.svg">
         </td>
</tr>`;


    document.querySelector('#table-display').innerHTML = innerHtml;
}*/


