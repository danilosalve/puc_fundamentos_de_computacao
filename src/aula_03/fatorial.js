function fatorialRecursivo(n) {
    if (n === 1 || n === 0) {
        return 1;
    } else if (n < 0) {
        return undefined;
    }
    return n * fatorialRecursivo(n - 1);
}

console.info(fatorialRecursivo(5));