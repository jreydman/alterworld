"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthController", {
    enumerable: true,
    get: function() {
        return AuthController;
    }
});
const _common = require("@nestjs/common");
const _passport = require("@nestjs/passport");
const _express = require("express");
const _authenum = require("../../utils/auth.enum");
const _authservice = require("./auth.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let AuthController = class AuthController {
    async signinGoogle({ user }) {
        return this.authService.signinOAuth({
            email: user.email,
            signProviders: [
                _authenum.AuthProviderEnum.GOOGLE
            ]
        });
    }
    async signinEmail({ email, password }, res) {
        const tokens = await this.authService.signinAuth({
            email,
            password
        });
        return res.cookie('access_token', tokens.accessToken).cookie('refresh_token', tokens.refreshToken).send();
    }
    async signupEmail(user) {
        return this.authService.signup(user);
    }
    async verifyEmail(verifyEmailToken) {
        return this.authService.verifyEmailToken(verifyEmailToken);
    }
    async resetPassword({ user }, { password, resetPassword }) {
        if (!await this.authService.verifyPassword({
            email: user.email,
            password
        })) throw new _common.BadRequestException('Invalid password');
        return this.authService.update({
            email: user.email,
            password: resetPassword
        });
    }
    async refresh(req) {
        const cookies = req.headers.cookie.split(';');
        let refreshToken = '';
        for (let cookie of cookies){
            cookie = cookie.trim();
            if (cookie.startsWith('refresh_token=')) {
                refreshToken = cookie.split('=')[1];
                break;
            }
        }
        return {
            refreshEmailToken: refreshToken
        };
    }
    async me({ user }) {
        return user;
    }
    constructor(authService){
        this.authService = authService;
    }
};
_ts_decorate([
    (0, _common.Post)('signin/provider/google'),
    (0, _common.UseGuards)((0, _passport.AuthGuard)(_authenum.AuthStrategyEnum.googleOAuth)),
    _ts_param(0, (0, _common.Req)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        void 0
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "signinGoogle", null);
_ts_decorate([
    (0, _common.Post)('signin/provider/email'),
    (0, _common.HttpCode)(_common.HttpStatus.OK),
    _ts_param(0, (0, _common.Body)()),
    _ts_param(1, (0, _common.Res)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        void 0,
        typeof _express.Response === "undefined" ? Object : _express.Response
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "signinEmail", null);
_ts_decorate([
    (0, _common.Post)('signup/provider/email'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        void 0
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "signupEmail", null);
_ts_decorate([
    (0, _common.Get)('verify/provider/email'),
    _ts_param(0, (0, _common.Query)('verifyEmailToken')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        void 0
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "verifyEmail", null);
_ts_decorate([
    (0, _common.Post)('reset-password'),
    (0, _common.UseGuards)((0, _passport.AuthGuard)(_authenum.AuthStrategyEnum.jwtAuth)),
    _ts_param(0, (0, _common.Req)()),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        void 0,
        void 0
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
_ts_decorate([
    (0, _common.Get)('refresh'),
    (0, _common.UseGuards)((0, _passport.AuthGuard)(_authenum.AuthStrategyEnum.jwtAuth)),
    _ts_param(0, (0, _common.Req)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        void 0
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
_ts_decorate([
    (0, _common.Get)('me'),
    (0, _common.UseGuards)((0, _passport.AuthGuard)(_authenum.AuthStrategyEnum.jwtAuth)),
    _ts_param(0, (0, _common.Req)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        void 0
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "me", null);
AuthController = _ts_decorate([
    (0, _common.Controller)({
        path: 'auth',
        version: '1'
    }),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _authservice.AuthService === "undefined" ? Object : _authservice.AuthService
    ])
], AuthController);

//# sourceMappingURL=auth.controller.js.map