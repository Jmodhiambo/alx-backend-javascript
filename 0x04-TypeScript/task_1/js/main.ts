interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const teacher: Teacher = {
  firstName: 'John',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'Kisumu',
  contract: false,
};

const director1: Directors = {
  firstName: 'Tom',
  lastName: 'Brook',
  fullTimeEmployee: true,
  yearsOfExperience: 7,
  location: 'Nashville',
  numberOfReports: 14,
};

// Function implementation
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Create instance of StudentClass
const student = new StudentClass('Alice', 'Johnson');

// Testing the implementation
console.log(teacher);
console.log(director1);
console.log(printTeacher("John", "Doe"));
console.log(student.displayName()); // Should print: Alice
console.log(student.workOnHomework()); // Should print: Currently working
