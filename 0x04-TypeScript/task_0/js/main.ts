interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const StudentA: Student = {
  firstName: 'Muhammed',
  lastName: 'Ajana',
  age: 47,
  location: 'Kaduna'
}
const StudentB: Student = {
  firstName: 'John',
  lastName: 'Akpede',
  age: 34,
  location: 'Bauchi'
}

const studentsList = [ StudentA, StudentB ];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((stu) => {
  const row = document.createElement('tr');
  const nameData = document.createElement('td');
  const locationData = document.createElement('td');
  nameData.textContent = stu.firstName;
  locationData.textContent = stu.location;
  row.appendChild(nameData);
  row.appendChild(locationData);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
