function greaterThree(num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3) {
      return num1 + " is greater than " + num3;
    } else {
      return num3 + " is greater than " + num1;
    }
  } else {
    if (num2 > num3) {
      return num2 + " is greater than " + num3;
    } else {
      return num3 + " is greater than" + num2;
    }
  }
}

var greaterNumBetweenThree = console.log(greaterThree(-15, 0, -1));
