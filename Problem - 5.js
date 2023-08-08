function canPay(changeArray, totalDue) {
    let change = 0;
    for (let i = 0; i < changeArray.length; i++) {
        change += changeArray[i];
    }
    if (changeArray.length === 0) {
        return ("The array is empty");
    }
    else if (change >= totalDue) {
        return true;
    }
    else {
        return false;
    }
}