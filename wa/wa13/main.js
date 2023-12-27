console.log("When I log the employeesData JSON to the console, it logs it after all the code is executed. I cannot figure out how to keep it from only logging the current state of the JSON where the command was written :(");
// Problem 1
// Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible
const employeesData = {
    "employees":[
      {"firstName":"Sam", "department":"Tech","designation":"Manager", "salary":"40000","raiseEligible":true},
      {"firstName":"Mary", "department":"Finance","designation":"Trainee", "salary":"18500","raiseEligible":true},
      {"firstName":"Bill", "department":"HR","designation":"Executive", "salary":"21200","raiseEligible":false},
    ]
    }
console.log("Problem 1", employeesData);
// Problem 2
// Create JSON for the company with the following details (companyName, website, employees)
const companyDetails = {
    "employees":[
        {"companyName":"Tech Stars", "website":"www.techstars.site","employees":employeesData.employees}
    ]
    }
console.log("Problem 2", companyDetails);

// Problem 3
// A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of: Anna, Tech, Executive, 25600, false
const newEmployee = {
    "firstName": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": "25600",
    "raiseEligible": false
};

employeesData.employees.push(newEmployee);

console.log("Problem 3", employeesData);

// Problem 4
// Given the JSON for the company, calculate the total salary for all company employees.
let totalSalary = 0;
let i = 0;
for (i =0; i < employeesData.employees.length; i++){
    totalSalary += parseInt(employeesData.employees[i].salary);
}
console.log("Problem 4 ","Total salary for all company employees: ", totalSalary);

// Problem 5
// It's raise time. If an employee is raise eligible, increase their salary by 10%. 
// Given the JSON of the company and its employees, write a function to update the salary for each employee who is raised eligible, then set their eligibility to false.
function updateSalary() {
    for (let i = 0; i < employeesData.employees.length; i++) {
        if (employeesData.employees[i].raiseEligible === true) {
            let currentSalary = parseInt(employeesData.employees[i].salary);
            let newSalary = currentSalary * 1.1; // Increasing salary by 10%
            employeesData.employees[i].salary = newSalary.toString(); // Update the salary
            employeesData.employees[i].raiseEligible = false; // Set raise eligibility to false
        }
    }
}
updateSalary();
console.log("Problem 5", employeesData);

// Problem 6
// Some employees have decided to work from home. The following array indicates who is working from home. Use the array to update the company JSON. 
// For each employee, add another property called 'wfh' and set it to true of false
// Working from home: ['Anna', 'Sam']
const employeesWorkingFromHome = ['Anna', 'Sam'];

function updateWFHStatus() {
    for (let i = 0; i < employeesData.employees.length; i++) {
        const currentEmployee = employeesData.employees[i];
        const isWorkingFromHome = employeesWorkingFromHome.includes(currentEmployee.firstName);

        currentEmployee.wfh = isWorkingFromHome;
    }
}

updateWFHStatus();

console.log("Problem 6", employeesData);
