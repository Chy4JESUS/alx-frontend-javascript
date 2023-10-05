function getListStudentIds(studentObjects) {
  if (!Array.isArray(studentObjects)) {
    return [];
  }
  return studentObjects.map((student) => student.id);
}
export default getListStudentIds;
