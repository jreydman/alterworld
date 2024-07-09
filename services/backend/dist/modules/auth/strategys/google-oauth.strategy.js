"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GoogleGuardStrategy", {
    enumerable: true,
    get: function() {
        return GoogleGuardStrategy;
    }
});
const _common = require("@nestjs/common");
const _passport = require("@nestjs/passport");
const _passportgoogleoauth20 = require("passport-google-oauth20");
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
let GoogleGuardStrategy = class GoogleGuardStrategy extends (0, _passport.PassportStrategy)(_passportgoogleoauth20.Strategy, _authenum.AuthStrategyEnum.googleOAuth) {
    async validate(_accessToken, _refreshToken, profile, callback) {
        const { name, emails, photos } = profile;
        const user = {
            email: emails[0].value,
            name: `${name.givenName} ${name.familyName}`,
            picture: photos[0].value
        };
        callback(null, user);
    }
    constructor(){
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET_KEY,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
            scope: [
                'profile',
                'email'
            ]
        });
    }
};
GoogleGuardStrategy = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [])
], GoogleGuardStrategy);

//# sourceMappingURL=google-oauth.strategy.js.map