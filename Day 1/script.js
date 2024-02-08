document.addEventListener("DOMContentLoaded", function () {
    const employees = [
        { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'IT' },
        { id: 2, name: 'Jane Smith', position: 'UI/UX Designer', department: 'IT' },
        { id: 3, name: 'Bob Johnson', position: 'Project Manager', department: 'HR' },
        { id: 4, name: 'Alice Williams', position: 'Financial Analyst', department: 'Finance' },
    ];
    const table = document.getElementById('employeeTable');
    function populateTable(department) {
        table.innerHTML = '';
        const filteredEmployees = (department === 'All') ? employees : employees.filter(employee => employee.department === department);
        const headerRow = table.insertRow(0);
        const headerCell1 = headerRow.insertCell(0);
        const headerCell2 = headerRow.insertCell(1);
        const headerCell3 = headerRow.insertCell(2);
        headerCell1.innerHTML = '<b>ID</b>';
        headerCell2.innerHTML = '<b>Name</b>';
        headerCell3.innerHTML = '<b>Position</b>';
        filteredEmployees.forEach(employee => {
            const row = table.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            cell1.innerHTML = employee.id;
            cell2.innerHTML = employee.name;
            cell3.innerHTML = employee.position;
        });
    }
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const selectedDepartment = this.textContent;
            populateTable(selectedDepartment);
        });
    });
    populateTable('All');
});
