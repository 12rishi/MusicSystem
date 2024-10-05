import expresss, { Application } from "express";
import * as dotenv from "dotenv";

dotenv.config();
import "./database/connection";
import helmet from "helmet";
const app: Application = expresss();
const contentSecurePolicyConfig = {
  directives: {
    defaultSrc: ["'self'", "https:"],
    connectSrc: ["'self'", "http://localhost:3000"],
    formAction: ["'self'", "http://localhost:3000"],
    upgradeInsecureRequests: [],
  },
};

app.use(
  helmet({
    contentSecurityPolicy: contentSecurePolicyConfig,
    frameguard: true,
    hidePoweredBy: true,
    noSniff: true,
  })
);
const port: number = Number(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log("server has connected at port no 3000");
});
