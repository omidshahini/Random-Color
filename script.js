/* in this script im trying to change background and style color 
with the help of setInterval which used to repeat a specified function
 at every given time-interval */

setInterval (function () {
  // Math.floor rounds down a number to its nearest integer
  // Math.random rounds a number to the nearest integer
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  let r1 = Math.floor(Math.random() * 256)
  let g1 = Math.floor(Math.random() * 256)
  let b1 = Math.floor(Math.random() * 256)
  let RndmColor = 'rgb(' + r + ',' + g + ',' + b + ')'
  let RndmColor1 = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')'

  let bodyElem = document.querySelector('.title') 
  bodyElem.style.color = RndmColor
  document.body.style.backgroundColor = RndmColor1
  
  // every 1000 ms is equal to 1 second
  // so basicaly our function repeates itself every 1 secound
}, 1000)
