module.exports = function solveEquation(equation) { 
  const {a, b, c} = parseEquationMembers(equation);
  const d = Math.pow(b,2) - 4 * a * c;
  const x1 = Math.round((-b - Math.sqrt(d)) / (2 * a));
  const x2 = Math.round((-b + Math.sqrt(d)) / (2 * a));
  const resultArr = [x1, x2].sort((a,b) => a - b);
  return resultArr;
}

function parseEquationMembers(equation) {
  const members = equation.split(' ');
  const a = Number(members[0]);
  const b = Number(members[3] + members[4]);
  const c = Number(members[7] + members[8]);
  return {a, b, c};
}
