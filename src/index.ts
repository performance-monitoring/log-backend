import * as koa from "koa"
import * as bodyParser from "koa-bodyparser"
import signale = require("signale");
import { appLog } from "./utils/log"

const PORT = 8080

const app = new koa();

appLog.log("hello")

app.use(bodyParser());

app.listen(PORT, () => {
  signale.info(`server start at ${PORT}`)
})