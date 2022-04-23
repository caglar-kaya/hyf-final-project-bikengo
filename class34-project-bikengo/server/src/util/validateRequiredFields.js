const validateRequiredFields = (object, requiredFields) => {
  const missingValues = [];
  requiredFields.map((field) => {
    if (object[field] == null || object[field] == "") {
      return missingValues.push(field);
    }
  });
  if (missingValues.length > 0) {
    return `The following properties are not allowed to be empty: ${missingValues.join(
      ", "
    )}`;
  } else {
    return "";
  }
};

export default validateRequiredFields;
