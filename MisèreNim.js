function misereNim(s) {
    let xor = s[0], totalStones = s[0];
        for(let i = 1; i < s.length; i++) {
            totalStones += s[i];
            xor = xor ^ s[i];
        }
        
        if (totalStones == s.length) {
            return totalStones % 2 == 0 ? 'First' : 'Second';
        }
        
        return xor ? 'First' : 'Second';
    } 