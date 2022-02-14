import { WebpackOptionsValidationError } from "webpack"

/* Setup interface */

interface Teacher {
  firstName: string
  lastName: string
  fullTimeEmployee: boolean
  yearsOfExperience: number
  location: string
  contract: boolean
  [propName: string]: any
}

var teacher3 = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  yearsOfExperience: 5,
  location: "London",
  contract: false,
}
console.log(teacher3)
