import * as koa from "koa"
import * as bodyParser from "koa-bodyparser"
import * as signale from "signale"
import router from './routes/route'
import { appLog } from "./utils/log"

const PORT = 8080
const app = new koa();

app.use(bodyParser())
app.use(router.routes())

app.listen(PORT, () => {
  appLog.log(`server start at ${PORT}`)
  signale.info(`server start at ${PORT}`)
})