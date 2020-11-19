import { string } from "prop-types";

export function firstLetters(input) {
  if (input) {
    const inputArray = input.split(" ");
    
    if (inputArray.length === 1) {
      return inputArray[0][0].toString();
    } else if (inputArray.length > 1) {
      return `${inputArray[0][0]}${inputArray[1][0]}`
    }
  }
}
