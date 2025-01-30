function divideAndConquerSum(a) {
    if (a.lenghth == 0) {
        return 0;
    }
    if (a.length == 1) {
        return a[0];
    }

    const oneThird = Math.floor(a.length / 3);
    const twoThirds = 2 * oneThird;

    const leftSide = a.slice(0, oneThird);
    const middle = a.slice(third, twoThirds);
    const rightSide = a.slice(twoThirds);

    return divideAndConquerSum(leftSide) + divideAndConquerSum(middle) + divideAndConquerSum(rightSide);
}
