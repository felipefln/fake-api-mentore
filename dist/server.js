"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const json_server_1 = __importDefault(require("json-server"));
const path_1 = __importDefault(require("path"));
const server = json_server_1.default.create();
const router = json_server_1.default.router(path_1.default.join(__dirname, 'db.json'));
const middlewares = json_server_1.default.defaults();
server.use(middlewares);
server.use(router);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});
