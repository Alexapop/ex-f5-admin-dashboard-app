import { getEmployees } from "./api.js";
import { initEmployeeFilter } from "./filters.js";

const employeesGrid = document.querySelector("#employees-grid");

function getAvatarUrl(employeeId) {
  return `../../img/employees/employee${employeeId}.png`;
}

export function renderEmployees(employees) {
  employeesGrid.innerHTML = "";

  employees.forEach((employee) => {
    employeesGrid.innerHTML += `
      <article class="employee-card">
        <img class="employee-card__avatar" src="${getAvatarUrl(employee.id)}" alt="${employee.name}">
        <h2>${employee.name}</h2>
        <a class="employee-card__email" href="mailto:${employee.email}">${employee.email}</a>
        <p class="employee-card__phone">${employee.phone}</p>
        <span class="employee-card__label">Location</span>
        <p class="employee-card__address">
          ${employee.address.street}, ${employee.address.suite}, 
          ${employee.address.city}, ${employee.address.zipcode}
        </p>
      </article>
    `;
  });
}

export async function initEmployeesPage() {
  try {
    const employees = await getEmployees();

    renderEmployees(employees);
    initEmployeeFilter(employees, renderEmployees);
  } catch (error) {
    employeesGrid.innerHTML = "<p>Could not load employees.</p>";
  }
}
