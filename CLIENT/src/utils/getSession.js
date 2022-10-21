// extraer token
export const getSession = async () =>
  await JSON.parse(sessionStorage.getItem("sessionData"));
