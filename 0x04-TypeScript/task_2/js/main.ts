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

interface CreateEmployeeInterface {
  (salary: number | string): DirectorInterface | TeacherInterface;
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

const createEmployee: CreateEmployeeInterface = (salary: number | string): DirectorInterface | TeacherInterface => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
};


// Type predicate
function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
  return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

// executeWork function
function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return (employee as TeacherInterface).workTeacherTasks();
  }
}

// --- Example usage ---
console.log(createEmployee(200));     // Teacher
console.log(createEmployee(1000));    // Director
console.log(createEmployee('$500'));  // Director
console.log(executeWork(createEmployee(200)));    // Getting to work
console.log(executeWork(createEmployee(1000)));   // Getting to director tasks
