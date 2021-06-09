const repl = require("repl");
const db = require("./lib/db");
const Transaction = require("./Transaction/Transaction");
const TransactionRepository = require("./Transaction/TransactionRepository");
const User = require("./User/User");
const UserRepository = require("./User/UserRepository");

const replServer = repl.start({ prompt: "app> " });

replServer.context.db = db;
replServer.context.Transaction = Transaction.default;
replServer.context.TransactionRepository = TransactionRepository.default;
replServer.context.User = User.default;
replServer.context.UserRepository = UserRepository.default;
