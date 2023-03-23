const libCookie = require("cookie");
const db = require("@cyclic.sh/dynamodb");
const { default: axios } = require("axios");
const setCookie = require("set-cookie-parser");

const handleLogin = async (req, res) => {
  const { login, password } = req?.body || null;

  if (!login || !password)
    return res
      .status(400)
      .send("There are missing auth fields login or password");

  const response = await axios
    .post("https://sokker.org/api/auth/login", {
      login,
      password,
      remember: true,
    })
    .then((res) => res.data)
    .catch((error) => {
      console.log("🚀 ~ error:", error);
      let status = 401;

      if (error.response) {
        status = error.response.status;
      }

      return res.status(status).send(error.message);
    });

  if (response.status === 200) {
    console.log("🚀 ~ response: here: ");
    const responseCookies = response.headers["set-cookie"];
    const parsedCookies = setCookie.parse(responseCookies);

    const headers = parsedCookies.map(function (cookie) {
      return libCookie.serialize(cookie.name, cookie.value, cookie);
    });

    res.setHeader("Set-Cookie", headers);

    const item = await db.collection("auth").set(login, headers);
    console.log("🚀 ~ handleLogin item:", item);

    const data = JSON.stringify({
      data: { login, ...response.data },
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });

    res.send(data).end();
  }
};

const handleLogOut = async (req, res) => {
  const { login } = req?.params || null;

  const cookies = await db.collection("auth").get(login);
  console.log("🚀 ~ handleLogOut cookies:", cookies);

  const response = await axios
    .get("https://sokker.org/index/action/start", {
      headers: {
        Cookie: cookies,
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      let status = 401;

      if (error.response) {
        status = error.response.status;
      }

      return res.status(status).send(error.message);
    });

  if (response.status === 200) {
    const item = await db.collection("auth").delete(login);
    console.log("🚀 ~ handleLogOut item:", item);

    const data = JSON.stringify({
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });

    res.send(data).end();
  }
};

const getUser = async (req, res) => {
  const response = axios
    .get("https://sokker.org/api/current")
    .then((res) => res.data)
    .catch((error) => {
      let status = 401;

      if (error.response) {
        status = error.response.status;
      }

      return res.status(status).send(error.message);
    });

  if (response.status === 200) {
    const data = JSON.stringify({
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });

    res.send(data).end();
  }
};

module.exports = {
  handleLogOut,
  handleLogin,
  getUser,
};
