import { WebpackOptionsValidationError } from "webpack"

/* Setup interface  teacher*/

interface Teacher {
  firstName: string
  lastName: string
  fullTimeEmployee: boolean
  yearsOfExperience: number
  location: string
  contract: boolean
  [propName: string]: any
}

/* Setup interface  Directors*/

interface Directors extends Teacher {
  numberOfReports: number
}

/* Setup interface print teacher function */

interface printTeacherFunction {
  (firstName: string, lastName: string): string
}
export let printTeacher: printTeacherFunction
printTeacher = function (firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`
}

/* setup interface studentclass */

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface
}

interface StudentClassInterface {
  firstName: string
  lastName: string
  displayName(): string
  workOnHomework(): string
}
/* output some information */

export const StudentClass: StudentConstructor = class StudentClass
  implements StudentClassInterface
{
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  workOnHomework() {
    return "Currently working"
  }

  displayName() {
    return this.firstName
  }
}
