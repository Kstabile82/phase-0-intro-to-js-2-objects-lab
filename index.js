// Write your solution in this file!
const employee = {
    name: 'Dolly',
    address: 'LongBeach'
};
function updateEmployeeWithKeyAndValue(employee, key, val) {
//dont mutate
let newObj = {...employee}; 
delete newObj[key];
newObj[key] = val; 
return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, val) {
//mutate
delete employee.key;
employee[key] = val; 
return employee; 
}
function deleteFromEmployeeByKey(employee, key) {
//dont mutate
let newObj = {...employee}; 
//delete key in newObj; 
delete newObj[key];
return newObj; 
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
//mutate
delete employee[key]; 
return employee; 
}