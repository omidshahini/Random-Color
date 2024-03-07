setInterval (function () {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  let r1 = Math.floor(Math.random() * 256)
  let g1 = Math.floor(Math.random() * 256)
  let b1 = Math.floor(Math.random() * 256)
  let RndmColor = 'rgb(' + r + ',' + g + ',' + b + ')'
  let RndmColor1 = 'rgb(' + r1 + ',' + g1 + ',' + b1 + ')'

  console.log(RndmColor)

  let bodyElem = document.querySelector('.title') 
  bodyElem.style.color = RndmColor
  document.body.style.backgroundColor = RndmColor1
}, 1000)

let master = {
  name : 'omid',
  family : 'shahini',
  age : 29,
  job : 'programmer',
  knowledge : 'entry level',
  skill : 'fronend',
  eye : 'brown',
  haircolor : 'dark',
  height : 175,
  favouritecolor : 'blue',
  nationality : 'persian'
}
