interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 20,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "John",
  lastName: "Smith",
  age: 22,
  location: "Mombasa",
};

const studentsList: Array<Student> = [student1, student2];

// Render a table
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
