function sumFirstAndLastDigit(number) {
    const numStr = number.toString();
    const firstDigit = parseInt(numStr.charAt(0));
    const lastDigit = parseInt(numStr.charAt(numStr.length - 1));

    const sum = firstDigit + lastDigit;
    console.log("Сумма первой и последней цифры числа", number, "равна", sum);
}

sumFirstAndLastDigit(1234);
sumFirstAndLastDigit(5);
