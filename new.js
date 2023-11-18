var verseShower = document.querySelector(".verse-shower");
var remainBears = 99;
var i;
const displayVerse = async () => {
 for (i = remainBears; i >= 0; i--) {
  
  var bottleStatues = i > 1 ? "bottles" : "bottle";
  var remainBottleStatues = i-1 > 1 ? "bottles" : "bottle";
  var firstVerse = i > 0 ?  `${i} ${bottleStatues} of beer on the wall. ${i} ${bottleStatues} of beer. Take one down, pass it around, ${i - 1} ${remainBottleStatues} of beer on the wall.` : "There is no more bear. But you go to the store and buy more bear."
  var eachWords = firstVerse.split(" ");
  var verseElm = document.createElement("div");
  verseElm.classList.add("verse");
  verseShower.appendChild(verseElm);

  for (const word of eachWords) {
   var wordElem = document.createElement("div");
   wordElem.classList.add("word-element");
   wordElem.innerHTML = word + "&nbsp;";
   verseElm.appendChild(wordElem);
   await delay(1000);
  }
  if (i === 0) {
   await delay(10000);
   location.reload()
  }

 }
}

const delay = (ms) => {
 return new Promise(resolve => setTimeout(resolve, ms));
}

displayVerse();