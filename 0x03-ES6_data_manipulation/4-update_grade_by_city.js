export default function updateStudentGradeByCity(arr, city, arr2) {
  if (!Array.isArray(arr) || typeof city !== 'string' || !Array.isArray(arr2)) {
    return [];
  }

  // Filter students by the specified city
  const studentInCity = arr.filter((student) => student.location === city);

  // Map through those students to update their grade
  return studentInCity.map((student) => {
    const match = arr2.find((gradeObj) => gradeObj.studentId === student.id);
    return {
      ...student,
      grade: match ? match.grade : 'N/A',
    };
  });
}
