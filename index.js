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
  if (string === ily) {
    return "I love you, too."
  }
  if (string.toLowerCase === string) {
    return "I can't hear you!"
  }
  else if (string.toUpperCase === string) {
    return "YES INDEED!"
  }
}
