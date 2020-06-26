exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda deployed by the github action!"),
  };
  return response;
};
