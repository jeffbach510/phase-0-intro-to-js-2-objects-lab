const employee = {};
employee.name = "Jeff";
employee.address ="20 Park Place";
employee;

function updateEmployeeWithKeyAndValue(employee, key, value) {
const newEmp = { ...employee};
newEmp[key] = value;
return newEmp;
};

const newEmp = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Bob"
  );


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)  {
    employee[key] = value;
    return employee;
 };

 destructivelyUpdateEmployeeWithKeyAndValue(employee, employee.name, "Sam");


 function deleteFromEmployeeByKey(employee, name)  {
 const newEmployee = { ...employee};
 delete newEmployee.name;
 return newEmployee;
 };


 deleteFromEmployeeByKey(employee, "Sam");

 function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
 };

 destructivelyDeleteFromEmployeeByKey(employee, key);