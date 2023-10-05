function getStudentsByLocation(studentObjects, city, newGrades) {
  return studentObjects
    .filter((item) => item.location === city)
    .map((student) => {
      const gradeClass = newGrades
        .filter((item) => item.studentId === student.id)
        .map((row) => row.grade)[0];
      const grade = gradeClass || 'N/A';
      return { ...student, grade };
    });
}
export default getStudentsByLocation;
