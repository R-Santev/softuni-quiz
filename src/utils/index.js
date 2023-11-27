function buildQuery(queryObj) {
  console.log(queryObj);

  // const params = Object.entries(queryObj)
  //   .map(([key, value]) => `"${key}": "${value}"`)
  //   .join(", ");

  return `where={"title":{"$regex": "^.*${queryObj.title}.*$"}, "topic": "${queryObj.topic}"}`;
}

export const utils = {
  buildQuery,
};
