// extraer token
export const getSession = () =>
  JSON.parse(window.localStorage.getItem("sessionData"));

export const setSession = (token) =>
  window.localStorage.setItem("sessionData", JSON.stringify(token));

export const validateUser = () => {
  let value = document.cookie
    ? document.cookie.split("token=")
    : getSession("sessionData");
  //console.log(value);
  const cookie = Array.isArray(value) ? value[1] : value;

  return cookie;
};
