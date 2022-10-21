// extraer token
const getSession = async () =>
  await JSON.parse(sessionStorage.getItem("sessionData"));

module.exports = {
    getSession,
};