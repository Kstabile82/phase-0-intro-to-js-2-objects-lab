let employee = {
    name: "Dolly",
    streetAddress: "bunnyCove",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, 
        [key]: value,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
     employee[key] = value;
     return employee; 
}
function deleteFromEmployeeByKey(employee, key) {
    let newemp = {...employee}; 
    delete newemp[key]; 
    return newemp; 
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee; 
}