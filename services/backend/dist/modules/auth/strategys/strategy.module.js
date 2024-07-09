"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "StrategyModule", {
    enumerable: true,
    get: function() {
        return StrategyModule;
    }
});
const _common = require("@nestjs/common");
const _anonymousauthstrategy = require("./anonymous-auth.strategy");
const _googleoauthstrategy = require("./google-oauth.strategy");
const _jwtauthstrategy = require("./jwt-auth.strategy");
const _jwtrefreshauthstrategycopy = require("./jwt-refresh-auth.strategy copy");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let StrategyModule = class StrategyModule {
};
StrategyModule = _ts_decorate([
    (0, _common.Module)({
        providers: [
            _jwtauthstrategy.JwtGuardStrategy,
            _jwtrefreshauthstrategycopy.JwtRefreshGuardStrategy,
            _googleoauthstrategy.GoogleGuardStrategy,
            _anonymousauthstrategy.AnonymousGuardStrategy
        ],
        exports: [
            _jwtauthstrategy.JwtGuardStrategy,
            _jwtrefreshauthstrategycopy.JwtRefreshGuardStrategy,
            _googleoauthstrategy.GoogleGuardStrategy,
            _anonymousauthstrategy.AnonymousGuardStrategy
        ]
    })
], StrategyModule);

//# sourceMappingURL=strategy.module.js.map