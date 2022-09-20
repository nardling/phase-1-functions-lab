function distanceFromHqInBlocks(st: number): number {
    if (st > 42) return st - 42;
    return 42 - st;
  }

function distanceFromHqInFeet(st: number): number {
    return distanceFromHqInBlocks(st) * 264;
}

function distanceTravelledInFeet(start: number, end: number): number {
    return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start: number, end: number): any {
    //returns the fare for the customer
    const dist = distanceTravelledInFeet(start, end);
    if (dist < 400) return 0;
    if (dist > 2500) return 'cannot travel that far'
    if (dist > 2000) return 25.00;
    return (dist - 400) * 0.02;
  }