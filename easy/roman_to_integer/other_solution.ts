const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToIntOther(s: string): number {
  const integers = s.split('').map((c) => roman[c]);

  return integers.reduce((acc, x, i) => (x < integers[i + 1] ? acc - x : acc + x), 0);
}

// It converts all Roman numerals into a numeric array,
// and then folds it from left to right using reduce: "If it's smaller than the next one, subtract it; if not, add it."

// This might be smarter than my own.
// The main difference is whether I use a for statement or map/reduce.
