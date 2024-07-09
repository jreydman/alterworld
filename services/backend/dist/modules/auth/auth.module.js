"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthModule", {
    enumerable: true,
    get: function() {
        return AuthModule;
    }
});
const _common = require("@nestjs/common");
const _jwt = require("@nestjs/jwt");
const _passport = require("@nestjs/passport");
const _databasemodule = require("../database/database.module");
const _authcontroller = require("./auth.controller");
const _authservice = require("./auth.service");
const _wsjwtguard = require("./guards/ws-jwt.guard");
const _strategymodule = require("./strategys/strategy.module");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AuthModule = class AuthModule {
};
AuthModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _passport.PassportModule,
            _databasemodule.DatabaseModule,
            _strategymodule.StrategyModule,
            _jwt.JwtModule.register({})
        ],
        controllers: [
            _authcontroller.AuthController
        ],
        providers: [
            _authservice.AuthService,
            _wsjwtguard.WsJwtGuard
        ],
        exports: [
            _authservice.AuthService,
            _wsjwtguard.WsJwtGuard
        ]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map