function birthdayCakeCandles(candles) {
    if (candles.length === 0) {
        return 0;
    } 
     let maxHeight = candles[0];
     let count = 1;
     for (let i =1; i < candles.length; i++) {
         if (candles[i] > maxHeight) {
             maxHeight = candles[i];
             count = 1;
         }else if (candles[i] === maxHeight){
             count++;
         }
     }
     return count;
 }
const candles = [3, 7, 2, 7, 7, 5, 7];
console.log(birthdayCakeCandles(candles)); 