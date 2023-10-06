interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {

  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: (number | string)) {
  const numericSalary = typeof salary === 'string' ? parseInt(salary) : salary;
  const checkSalary = numericSalary < 500 ? new Teacher() : new Director();
  return checkSalary;
}

function isDirector(employee: TeacherInterface | DirectorInterface) {
  return (employee instanceof Director) ? true : false;
}

function executeWork(employee: TeacherInterface | DirectorInterface) {
  const identity = isDirector(employee) ? (employee as DirectorInterface).workDirectorTasks() : (employee as TeacherInterface).workTeacherTasks();
  return identity;
}


/** Test cases */
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

