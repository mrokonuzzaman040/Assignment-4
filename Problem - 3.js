function sortMaker(arr) {
    let sortedArr = arr.sort((a, b) => b - a);
    let first = sortedArr[0];
    let last = sortedArr[sortedArr.length - 1];

    if (arr.length <= 1) {
        return "Invalid Input";
    }
    else if (first < 0 || last < 0) {
        return "Invalid Input";
    }
    else if (first === last) {
        return "equal";
    }
    return sortedArr;
}