function anagram(s) {
    let midpoint = Math.floor(s.length / 2);
    let firstHalf = s.substring(0, midpoint);
    let secondHalf = s.substring(midpoint);
    let count = 0;
    if (s.length % 2 !== 0) {
        return -1;
    }
    for (let i = 0; i < firstHalf.length; i++) {
        secondHalf.includes(firstHalf[i]) ? 
        secondHalf = secondHalf.replace(firstHalf[i],"") : count++;
    }
    return count;
}