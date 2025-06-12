function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

console.log(calculateNumber(1, 3))
console.log(calculateNumber(1, 3.7))
console.log(calculateNumber(1.2, 3.7))
console.log(calculateNumber(1.5, 3.7))

module.exports = calculateNumber
