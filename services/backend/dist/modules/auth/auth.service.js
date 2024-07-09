"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthService", {
    enumerable: true,
    get: function() {
        return AuthService;
    }
});
const _common = require("@nestjs/common");
const _jwt = require("@nestjs/jwt");
const _bcrypt = /*#__PURE__*/ _interop_require_wildcard(require("bcrypt"));
const _authenum = require("../../utils/auth.enum");
const _prismaservice = require("../database/prisma.service");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let AuthService = class AuthService {
    async signinAuth({ email, password }) {
        try {
            const userExists = await this.prismaService.user.findFirstOrThrow({
                where: {
                    email
                }
            });
            if (userExists.signStatus !== _authenum.AuthStatusEnum.ACTIVE) throw new _common.UnauthorizedException('User is not active');
            if (!await this.verifyPassword({
                email,
                password
            })) throw new _common.UnauthorizedException('Invalid password');
            return this.signTokens(userExists);
        } catch (error) {
            throw new _common.UnauthorizedException(error.message);
        }
    }
    async signinOAuth(user) {
        let currentUser = await this.prismaService.user.upsert({
            where: {
                email: user.email
            },
            create: {
                ...user,
                signStatus: _authenum.AuthStatusEnum.ACTIVE,
                password: null
            },
            update: {}
        });
        user.signProviders.forEach((provider)=>{
            if (!currentUser.signProviders.includes(provider)) {
                currentUser.signProviders.push(provider);
            }
        });
        const { accessToken, refreshToken } = await this.signTokens(currentUser);
        currentUser.refreshJwtToken = await _bcrypt.hash(refreshToken, 10);
        await this.prismaService.user.update({
            where: {
                email: currentUser.email
            },
            data: currentUser
        });
        return {
            accessToken,
            refreshToken
        };
    }
    async update(user) {
        const currentUser = await this.prismaService.user.findFirstOrThrow({
            where: {
                email: user.email
            }
        });
        Object.assign(currentUser, user);
        if (user.password) {
            currentUser.password = await _bcrypt.hash(user.password, 10);
            if (!currentUser.signProviders.includes(_authenum.AuthProviderEnum.EMAIL)) currentUser.signProviders.push(_authenum.AuthProviderEnum.EMAIL);
        }
        return this.prismaService.user.update({
            where: {
                email: currentUser.email
            },
            data: currentUser
        });
    }
    async signTokens(user) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync({
                user
            }, this.jwtOptions.access),
            this.jwtService.signAsync({
                user
            }, this.jwtOptions.refresh)
        ]);
        return {
            accessToken,
            refreshToken
        };
    }
    async verifyAccessToken(token) {
        return this.jwtService.verify(token, this.jwtOptions.access);
    }
    async verifyRefresshToken(token) {
        return this.jwtService.verify(token, this.jwtOptions.refresh);
    }
    async verifyPassword({ email, password }) {
        try {
            const currentUser = await this.prismaService.user.findFirstOrThrow({
                where: {
                    email
                }
            });
            return !!await _bcrypt.compare(password, currentUser.password);
        } catch (error) {
            throw new _common.UnauthorizedException(error.message);
        }
    }
    async verifyEmailToken(verifyEmailToken) {
        try {
            const currentUser = await this.prismaService.user.findFirstOrThrow({
                where: {
                    verifyEmailToken
                }
            });
            currentUser.verifyEmailToken = null;
            currentUser.signStatus = _authenum.AuthStatusEnum.ACTIVE;
            return !!await this.prismaService.user.update({
                where: {
                    email: currentUser.email
                },
                data: currentUser
            });
        } catch (error) {
            throw new _common.BadRequestException(error.message);
        }
    }
    async signup(user) {
        const userExists = await this.prismaService.user.findFirst({
            where: {
                email: user.email
            }
        });
        if (userExists) throw new _common.BadRequestException('User already exists');
        user.password = user.password ? await _bcrypt.hash(user.password, 10) : null;
        user.signStatus = _authenum.AuthStatusEnum.PENDING;
        user.signProviders = [
            _authenum.AuthProviderEnum.EMAIL
        ];
        user.verifyEmailToken = await _bcrypt.hash(user.email, 10);
        return this.prismaService.user.create({
            data: user
        });
    }
    constructor(jwtService, prismaService){
        this.jwtService = jwtService;
        this.prismaService = prismaService;
        this.jwtOptions = {
            access: {
                secret: process.env.JWT_SECRET_KEY,
                expiresIn: process.env.JWT_EXPIRATION_TIME
            },
            refresh: {
                secret: process.env.JWT_REFRESH_SECRET_KEY,
                expiresIn: process.env.JWT_REFRESH_EXPIRATION_TIME
            }
        };
    }
};
AuthService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _jwt.JwtService === "undefined" ? Object : _jwt.JwtService,
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], AuthService);

//# sourceMappingURL=auth.service.js.map