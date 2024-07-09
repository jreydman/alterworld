"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ChatGateway", {
    enumerable: true,
    get: function() {
        return ChatGateway;
    }
});
const _common = require("@nestjs/common");
const _websockets = require("@nestjs/websockets");
const _chatenum = require("../../utils/chat.enum");
const _wsjwtguard = require("../auth/guards/ws-jwt.guard");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let ChatGateway = class ChatGateway {
    async handleMessage(client, payload) {
        this.server.emit(_chatenum.ChatEventEnum.MESSAGE_RECEIVED, payload);
    }
};
_ts_decorate([
    (0, _websockets.WebSocketServer)()
], ChatGateway.prototype, "server", void 0);
_ts_decorate([
    (0, _websockets.SubscribeMessage)(_chatenum.ChatEventEnum.MESSAGE_SEND),
    (0, _common.UseGuards)(_wsjwtguard.WsJwtGuard),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        void 0,
        void 0
    ]),
    _ts_metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleMessage", null);
ChatGateway = _ts_decorate([
    (0, _websockets.WebSocketGateway)(Number(process.env.BACKEND_SOCKET_PORT), {
        namespace: 'chat'
    })
], ChatGateway);

//# sourceMappingURL=chat.gateway.js.map