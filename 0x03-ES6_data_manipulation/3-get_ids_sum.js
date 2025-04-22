export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }

  return arr.reduce((accumulator, current) => accumulator + current.id, 0);
}
