function takeANumber(katzDeliLine,name) {
katzDeliLine.push(name);
return "Welcome, " + name + ". You are number " +  katzDeliLine.length  + " in line.";
}

function nowServing(x) {
 if (x.length === 0) {
   return "There is nobody waiting to be served!";
 }else {
   var name = x[0];
   x.splice(0, 1);
  return "Currently serving " + name + ".";
 }
}

function currentLine(katzDeliLine) {
  var str = "The line is currently:";
  var  newLine = []; 
  if (katzDeliLine.length === 0) return "The line is currently empty";
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      newLine[i] = `${[i + 1]}. ${katzDeliLine[i]}`;
      }
      str += newLine.join ('.'); 
      return str;
  }
}