//Added By Vaibhav Vyas

function lessBetweenThree(num1, num2, num3) {
  if (num1 < num2) {
    if (num1 < num3) {
      return num1 + " is less than " + num3;
    } else {
      return num3 + " is less than " + num1;
    }
  } else {
    if (num2 < num3) {
      return num2 + " is less than " + num3;
    } else {
      return num3 + " is less than" + num2;
    }
  }
}

console.log(lessBetweenThree(3,6,7));
