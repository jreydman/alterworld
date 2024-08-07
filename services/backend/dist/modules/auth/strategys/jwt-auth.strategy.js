"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "JwtGuardStrategy", {
    enumerable: true,
    get: function() {
        return JwtGuardStrategy;
    }
});
const _common = require("@nestjs/common");
const _passport = require("@nestjs/passport");
const _passportjwt = require("passport-jwt");
const _authenum = require("../../../utils/auth.enum");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let JwtGuardStrategy = class JwtGuardStrategy extends (0, _passport.PassportStrategy)(_passportjwt.Strategy, _authenum.AuthStrategyEnum.jwtAuth) {
    constructor(){
        super({
            jwtFromRequest: _passportjwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET_KEY
        });
        this.validate = ({ user })=>user;
    }
};
JwtGuardStrategy = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [])
], JwtGuardStrategy);

//# sourceMappingURL=jwt-auth.strategy.js.map