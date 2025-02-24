function divideAndConquerSum(a) {
    if (a.length === 0) {
        return 0;
    }
    if (a.length === 1) {
        return a[0];
    }

    const oneThird = Math.ceil(a.length / 3); // used help from chatgpt to trouble shoot this line
    const twoThirds = Math.ceil(2 * a.length / 3); 

    const leftSide = a.slice(0, oneThird);
    const middle = a.slice(oneThird, twoThirds);
    const rightSide = a.slice(twoThirds);

    return divideAndConquerSum(leftSide) + divideAndConquerSum(middle) + divideAndConquerSum(rightSide);
}
