import * as log4js from "log4js"
import * as config from "../config/log4js.json"
log4js.configure(config)

export const appLog = log4js.getLogger("app");
export const accessLog = log4js.getLogger("access");
export const errorLog = log4js.getLogger("errorFile");