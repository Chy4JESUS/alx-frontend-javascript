function getListStudentIds(studentObjects) {
  return studentObjects.reduce((accumulator, item) => accumulator + item.id, 0);
}
export default getListStudentIds;
