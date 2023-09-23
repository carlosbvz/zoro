const GetStatus = (request, response) => {
  const status = {
    Status: "Running",
  };

  response.send(status);
};

const UploadPDF = (request, response) => {
  const data = request;
  console.log(data);
  response.send({ Status: "OK from node..." });
};

export { GetStatus, UploadPDF };
