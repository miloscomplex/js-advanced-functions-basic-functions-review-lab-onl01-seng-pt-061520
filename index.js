// Your code here
function saturdayFun(string= 'roller-skate') {
  return `This Saturday, I want to ${string}!`
}

let mondayWork = function(string= 'go to the office') {
  return `This Monday, I will ${string}.`
}

function wrapAdjective(flair= "*") {
  return function(string= "special") {
    return `You are ${flair}${string}${flair}!`
  }
}

const Calculator = {
  add: (function() { return 1 + 3}),
  subtract: (function() { return 1 - 3}),
  multiply: (function() {return 1 * 3}),
  divide: (function() {return 10 / 5}),
}

function actionApplyer(initVal, b) {
  b.forEach( test => {
    let innerFunction = (test)(initVal)
    initVal = innerFunction
  })
  return initVal
}
//
// arrayOfTransforms = [
//   function(a){ return a * 2 },
//   function(a){ return a + 1000},
//   function(a){ return a % 7 }
// ]
// expect(actionApplyer(13, arrayOfTransforms)).to.equal(4, message)
