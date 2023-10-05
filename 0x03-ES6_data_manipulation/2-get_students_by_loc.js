function getStudentsByLocation(studentObjects, city) {
  return studentObjects.filter((student) => student.location === city);
}
export default getStudentsByLocation;
