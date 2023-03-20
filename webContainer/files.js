/** @satisfies {import('@webcontainer/api').FileSystemTree} */

export const files = {
  "index.js": {
    file: {
      contents: `
import cors from 'cors';
import express from 'express';
import { Buffer } from "buffer";

const app = express();
const port = 3111;
const router = express.Router();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

const authorization =
  "Basic " + Buffer.from('sokkercuba:QV9SMnG#inVD579').toString("base64");

// Handle external authentication
router.route("/api/v1/login").post(async (req, res) => {
    const { login, password } = req?.body || null;
  
    if (!login || !password)
      return res
        .status(400)
        .send("There are missing auth fields login or password");
  
    const response = await axios.post("https://sokker.org/api/auth/login", {
      login,
      password,
      remember: true,
    }).then((res) => {
      console.log("handleLogin node: ", res);
      return res;
    })
    .catch((err) => {
      console.log("handleLogin node: ", err);
      return err;
    });
  
    if (response.status === 200) {
      const responseCookies = response.headers["set-cookie"];
      const parsedCookies = responseCookies
        .split(";")
        .map((item) => item.split("="))
        .reduce((acc, [k, v]) => (acc[k.trim().replace('"', "")] = v) && acc, {});
  
      // const item = await axios.post("/api/v1/auth/" + login, parsedCookies, {
      //   headers: {
      //     Authorization: authorization,
      //   },
      // });
      // console.log("🚀 ~ item:", item);
      res.cookie(parsedCookies);
    }
  
    res.send(response).end();
  });

// Handle Logout
router.route("/api/v1/logout").get(async (req, res) => {
    const { login } = req?.params || null;
  
    const cookies = await axios.get("/api/v1/auth/" + login, {
      headers: {
        Authorization: authorization,
      },
    });
  
    const response = await axios.get("https://sokker.org/index/action/start", {
      headers: {
        Cookie: cookies,
      },
    });
  
    if (response.status === 200) {
      const item = await axios.delete("/api/v1/auth/" + login, {
        headers: {
          Authorization: authorization,
        },
      });
    }
  
    res.send(response).end();
  });

// Get current user data
router.route("/api/v1/current").get(async (req, res) => {
    const response = axios.get("https://sokker.org/api/current");
  
    res.send(response).end();
  });


app.use("/", router);

// Catch all handler for all other request.
app.use('*', (req,res) => {
  res.json({
      at: new Date().toISOString(),
      method: req.method,
      ip: req.ip,
    })
    .end()
})

app.listen(port, () => {
    console.log(\`App is live at http://localhost:\${port}\`);
});`,
    },
  },
  "package.json": {
    file: {
      contents: `
          {
            "name": "example-app",
            "type": "module",
            "dependencies": {
              "express": "latest",
              "nodemon": "latest",
              "cors": "latest",
              "axios": "latest",
              "buffer": "latest"
            },
            "scripts": {
              "start": "nodemon index.js"
            }
          }`,
    },
  },
};
