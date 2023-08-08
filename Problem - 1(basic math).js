function cubeNumber(number) {
    if (typeof number === "number") {
        result = number * number * number;
    } else {
        result =  "Invalid Input";
    }
    return result;
}