export const post = (
  path, //  /users/new
  requestBody,
  onSuccess = () => {},
  onError = () => {},
  onFinally = () => {}
) => {
  // eslint-disable-next-line no-undef
  const baseUrl = import.meta.env.VITE_BASE_URL;

  fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.status === "success") {
        onSuccess(response.data);
      } else {
        throw new Error(response.message);
      }
    })
    .catch((error) => {
      onError(error);
    })
    .finally(() => {
      onFinally();
    });
};
