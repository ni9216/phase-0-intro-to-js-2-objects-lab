// Write your solution in this file!
// Initialize the employee object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Non-destructive update: returns a new object with updated key-value pair
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Destructive update: mutates the original object with updated key-value pair
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Non-destructive delete: returns a new object without the specified key
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Destructive delete: mutates the original object by removing the specified key
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Export the functions and the employee object
  module.exports = {
    employee,
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey,
  };
  