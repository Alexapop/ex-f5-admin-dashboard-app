export function initEmployeeFilter(employees, renderEmployees) {
  const filterInput = document.querySelector("#name-filter");
  const allButton = document.querySelector(".all-btn");

  filterInput.addEventListener("input", () => {
    const firstLetter = filterInput.value.trim().charAt(0).toLowerCase();

    if (firstLetter === "") {
      renderEmployees(employees);
      return;
    }

    const filteredEmployees = employees.filter((employee) =>
      employee.name.toLowerCase().startsWith(firstLetter)
    );

    renderEmployees(filteredEmployees);
  });

  allButton.addEventListener("click", () => {
    filterInput.value = "";
    renderEmployees(employees);
  });
}