const db = require("@cyclic.sh/dynamodb");
const { default: axios } = require("axios");

const handleLogin = async (req, res) => {
  const { login, password } = req?.body || null;

  if (!login || !password)
    return res
      .status(400)
      .send("There are missing auth fields login or password");

  const response = await axios.post("https://sokker.org/api/auth/login", {
    login,
    password,
    remember: true,
  });

  if (response.status === 200) {
    const responseCookies = response.headers["set-cookie"];
    const item = await db.collection("auth").set(login, responseCookies);
    console.log("🚀 ~ item response:", item);
  }

  const data = JSON.stringify({
    data: { login },
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });

  res.send(data).end();
};

const handleLogOut = async (req, res) => {
  const { login } = req?.params || null;

  const cookies = await db.collection("auth").get(login);
  console.log("🚀 ~ cookies:", cookies);

  const response = await axios.get("https://sokker.org/index/action/start", {
    headers: {
      Cookie: cookies,
    },
  });

  if (response.status === 200) {
    const item = await db.collection("auth").delete(login);
    console.log("🚀 ~ response:", item);
  }

  const data = JSON.stringify({
    data: response.data,
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });

  res.send(data).end();
};

const getUser = async (req, res) => {
  const response = axios.get("https://sokker.org/api/current");

  const data = JSON.stringify({
    data: response.data,
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });

  res.send(data).end();
};

module.exports = {
  handleLogOut,
  handleLogin,
  getUser,
};
