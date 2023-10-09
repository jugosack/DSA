function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applePositions = [];
    let orangePositions = [];
    let appleCount = 0;
    let orangeCount = 0;

    for (let i = 0; i < apples.length; i++) {
        let applePosition = apples[i] + a;
        applePositions.push(applePosition);

        if (applePosition >= s && applePosition <= t) {
            appleCount++;
        }
    }

    for (let i = 0; i < oranges.length; i++) {
        let orangePosition = oranges[i] + b;
        orangePositions.push(orangePosition);

        if (orangePosition >= s && orangePosition <= t) {
            orangeCount++;
        }
    }

    return [appleCount, orangeCount];
}
