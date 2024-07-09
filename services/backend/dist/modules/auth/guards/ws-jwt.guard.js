"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "WsJwtGuard", {
    enumerable: true,
    get: function() {
        return WsJwtGuard;
    }
});
const _common = require("@nestjs/common");
const _chatenum = require("../../../utils/chat.enum");
const _authservice = require("../auth.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let WsJwtGuard = class WsJwtGuard {
    async canActivate(context) {
        const client = context.switchToWs().getClient();
        try {
            const user = await this.authService.verifyAccessToken(client.handshake.headers.authorization.split(' ')[1]);
            if (user) context.switchToWs().getClient().user = user;
            return user;
        } catch (error) {
            client.emit(_chatenum.ChatEventEnum.CHAT_LOG, new _common.UnauthorizedException(error.message));
            return false;
        }
    }
    constructor(authService){
        this.authService = authService;
    }
};
WsJwtGuard = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _authservice.AuthService === "undefined" ? Object : _authservice.AuthService
    ])
], WsJwtGuard);

//# sourceMappingURL=ws-jwt.guard.js.map