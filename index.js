function distanceFromHqInBlocks(st) {
    if (st > 42)
        return st - 42;
    return 42 - st;
}
function distanceFromHqInFeet(st) {
    return distanceFromHqInBlocks(st) * 264;
}
function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
}
function calculatesFarePrice(start, end) {
    //returns the fare for the customer
    var dist = distanceTravelledInFeet(start, end);
    if (dist < 400)
        return 0;
    if (dist > 2500)
        return 'cannot travel that far';
    if (dist > 2000)
        return 25.00;
    return (dist - 400) * 0.02;
}
