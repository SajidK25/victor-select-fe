const parseError = error => {
  if (!error || !error.message) return "";

  return error.message.replace("GraphQL error: ", "");
};

export { parseError };
