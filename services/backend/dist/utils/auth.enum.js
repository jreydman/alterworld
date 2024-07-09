"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AuthProviderEnum: function() {
        return AuthProviderEnum;
    },
    AuthStatusEnum: function() {
        return AuthStatusEnum;
    },
    AuthStrategyEnum: function() {
        return AuthStrategyEnum;
    }
});
var AuthStrategyEnum;
(function(AuthStrategyEnum) {
    AuthStrategyEnum["anonymousOAuth"] = "anonymous-auth";
    AuthStrategyEnum["googleOAuth"] = "google-oauth";
    AuthStrategyEnum["githubOAuth"] = "github-oauth";
    AuthStrategyEnum["facebookOAuth"] = "facebook-oauth";
    AuthStrategyEnum["twitterOAuth"] = "twitter-oauth";
    AuthStrategyEnum["linkedinOAuth"] = "linkedin-oauth";
    AuthStrategyEnum["jwtAuth"] = "jwt-auth";
    AuthStrategyEnum["jwtRefresh"] = "jwt-refresh";
})(AuthStrategyEnum || (AuthStrategyEnum = {}));
var AuthProviderEnum;
(function(AuthProviderEnum) {
    AuthProviderEnum["ANONYMOUS"] = "ANONYMOUS";
    AuthProviderEnum["GOOGLE"] = "GOOGLE";
    AuthProviderEnum["GITHUB"] = "GITHUB";
    AuthProviderEnum["FACEBOOK"] = "FACEBOOK";
    AuthProviderEnum["TWITTER"] = "TWITTER";
    AuthProviderEnum["LINKEDIN"] = "LINKEDIN";
    AuthProviderEnum["EMAIL"] = "EMAIL";
})(AuthProviderEnum || (AuthProviderEnum = {}));
var AuthStatusEnum;
(function(AuthStatusEnum) {
    AuthStatusEnum["ACTIVE"] = "ACTIVE";
    AuthStatusEnum["INACTIVE"] = "INACTIVE";
    AuthStatusEnum["PENDING"] = "PENDING";
})(AuthStatusEnum || (AuthStatusEnum = {}));

//# sourceMappingURL=auth.enum.js.map