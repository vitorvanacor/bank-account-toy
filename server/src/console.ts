import repl from "repl";
import * as db from "./lib/db";
import * as Tr from "./Transaction/Transaction";
import TrRepo from "./Transaction/TransactionRepository";
import UsrRepo from "./User/UserRepository";

const replServer = repl.start({ prompt: "app> " });

replServer.context["db"] = db;
replServer.context["Tr"] = Tr;
replServer.context["TrRepo"] = TrRepo;
replServer.context["UsrRepo"] = UsrRepo;
