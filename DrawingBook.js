function pageCount(n, p) {
    let turnsFromFront = Math.floor(p / 2);
    let turnsFromBack = Math.floor((n / 2) - Math.floor(p / 2));
  
    return Math.min(turnsFromFront, turnsFromBack);
  }
  
  console.log(pageCount(6, 2));
  