<<<<<<< HEAD
function theBeatlesPlay(musician , instrument){
  let var1 = [];
for (let i = 0 ; i<=(musician.length-1) ; i++)
{ 
  var1.push(musician[i] + " plays " + instrument[i]);
}
  return var1;
=======
function theBeatlesPlay(x , y){
  let vari = [];
for (i = 0 ; i<=(x.length-1) ; i++)
{ 
  vari[i] += x[i] + " plays " +  y[i];
}
  return vari;
>>>>>>> 56f7b4ed6f3ed4fe609ca93e1d5b22a5a6c4a01a
}

function johnLennonFacts(fact){
  var i = 0;
  while (i<fact.length){
    fact[i] +=  "!!!";
    i++;
  }
  return fact;
<<<<<<< HEAD
}

function iLoveTheBeatles(number){
  let var1 = [];
  let var2 = "I love the Beatles!";
  let i =0;
  do {var1.push(var2);
    i++;
    
  }
  while (i<(15-number))
  return var1
=======
>>>>>>> 56f7b4ed6f3ed4fe609ca93e1d5b22a5a6c4a01a
}