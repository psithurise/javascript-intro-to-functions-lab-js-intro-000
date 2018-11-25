function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var ily = "I love you, Grandma."
  var lCase = string.toLowerCase === string
  var uCase = string.toUpperCase === string
  if (lCase) {
    return "I can't hear you!"
  }
  else if (uCase) {
    return "YES INDEED!"
  }
  else if (string === ily) {
      return "I love you, too."
  }
}
