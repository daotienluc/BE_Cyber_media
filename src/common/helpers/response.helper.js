export const responseSuccess = (
  metaData = null,
  message = "OK",
  code = 200
) => {
  if (typeof code !== "number") code = 200;
  return {
    status: "success",
    code: code,
    message: message,
    doc: "api.domain.com/doc",
    metaData: metaData,
  };
};

export const responseError = (
  message = "Internal server Error",
  code = 500,
  stack = null
) => {
  if (typeof code !== "number") code = 500;
  return {
    status: "error",
    code: code,
    message: message,
    stack: stack,
  };
};
