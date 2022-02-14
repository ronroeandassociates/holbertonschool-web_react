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
