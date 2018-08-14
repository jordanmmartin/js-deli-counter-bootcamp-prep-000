var peopleServed = 0
function takeANumber(currentLine) {
  peopleServed ++
  currentLine.push(peopleServed)
  var welcomeMessage =`Welcome, you are ticket number ${peopleServed} `
  return welcomeMessage
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstPerson = katzDeliLine[0]
    katzDeliLine.shift()
    var firstPersonMessage = 'Currently serving ' + firstPerson + '.'
    return firstPersonMessage
  } else{
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(peopleArray) {
  var peopleList = 'The line is currently: '
  var lineLength = peopleArray.length
  if (lineLength > 0){
    for(let i = 0; i < lineLength; i++) {
     var positionNumber = i + 1
     peopleList = peopleList + positionNumber + '. ' + peopleArray[i]
     if (i < lineLength - 1) {
        peopleList += ', '
     } 
    }
  } else {
    return 'The line is currently empty.'
  }
  return peopleList
}