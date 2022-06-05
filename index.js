// Write your solution in this file!
const employee = {
    name: "vinn",
    streetAddress: "moi",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const myEmployee = {...employee};

    myEmployee.name ="Sam";
    myEmployee.streetAddress = "11 Broadway";

    return myEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const myEmployee = {...employee};
    delete myEmployee.name;
    return myEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    delete employee.streetAddress;
    return employee;
}