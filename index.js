function distanceFromHqInBlocks(newBlock) {
   if (newBlock > 42) {
       return newBlock - 42;
   } else {
       return 42 - newBlock;
   }
}

function distanceFromHqInFeet(newBlock) {
    let distanceFeet;
    distanceFeet = distanceFromHqInBlocks(newBlock);
    return distanceFeet * 264;
}

 function distanceTravelledInFeet(startBlock, endBlock) {
     if (endBlock > startBlock) {
         return ((endBlock - startBlock) * 264);
     } else {
         return ((startBlock - endBlock) * 264);
     }
 }

 function calculatesFarePrice(start, destination) {
     let distanceFeet = distanceTravelledInFeet(start, destination);
     if (distanceFeet <= 400) {
         return 0;
     } else if (distanceFeet > 400 && distanceFeet <= 2000) {
         return (distanceFeet - 400) * .02;
     } else if (distanceFeet > 2000 && distanceFeet <= 2500) {
         return 25; 
     } else {
         return 'cannot travel that far';
     }
    }