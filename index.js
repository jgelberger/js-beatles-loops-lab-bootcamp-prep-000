// add solution here
function theBeatlesPlay(musicianArray, instrumentArray) {
  var array = [];
  
  for (var i=0; i < musicianArray.length; i++) {
    var string = musicianArray[i] + ' plays ' + instrumentArray[i];
    array.push(string);
  }
  
  return array;
}

function johnLennonFacts(factsArray) {
  var i = 0;
  while (i < factsArray.length) {
    factsArray[i] = factsArray[i] + '!!!';
    i++;
  }
  return factsArray;
}