function maximizingXor(l, r) {
    let max = 0;

    for (let i = l; i <= r; i++) {
        for (let j = i; j <= r; j++) {
            let xr = i ^ j;
            if (xr > max) {
                max = xr;
            }
        }
    }

    return max;
}