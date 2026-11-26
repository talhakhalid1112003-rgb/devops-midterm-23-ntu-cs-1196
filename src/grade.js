// Converts a mark out of 100 into a letter grade.
// 85 and above: A; 70 and above: B; 55 and above: C; 50 and above: D; below 50: F.

function grade(marks) {
  if (typeof marks !== 'number' || marks < 0 || marks > 100) {
    throw new RangeError('marks must be a number from 0 to 100');
  }

  if (marks >= 85) return 'A';
  if (marks >= 70) return 'B';
  if (marks >= 55) return 'C';
  if (marks >= 50) return 'D';
  return 'F';
}

module.exports = { grade };
