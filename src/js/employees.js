import { getEmployees } from "./api.js";
import { initEmployeeFilter } from "./filters.js";

const employeesGrid = document.querySelector("#employees-grid");

function getAvatarUrl(employeeId) {
  return `https://i.pravatar.cc/80?img=${employeeId}`;
}

export function renderEmployees(employees) {
  employeesGrid.innerHTML = "";

  employees.forEach((employee) => {
    employeesGrid.innerHTML += `
      <article class="employee-card">
        <img src="${getAvatarUrl(employee.id)}" alt="${employee.name}">
        <h2>${employee.name}</h2>
        <a href="mailto:${employee.email}">${employee.email}</a>
        <p>
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