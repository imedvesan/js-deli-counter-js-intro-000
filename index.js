
var katzDeliLine =[];
function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.lenght} in line.`;
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.lenght > 0) {
    var line = `Serving ${katzDeliLine[0].}`;
    katzDeliLine.shift();
    return line;
  } else {return "There is nobody waiting to be served!"}
}
