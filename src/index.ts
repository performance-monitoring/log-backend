import * as koa from "koa"
import * as bodyParser from "koa-bodyparser"
import signale = require("signale");

const PORT = 8080

const app = new koa();

app.use(bodyParser());

app.listen(PORT, () => {
  signale.info(`server start at ${PORT}`)
})