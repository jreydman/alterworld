"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _common = require("@nestjs/common");
const _core = require("@nestjs/core");
const _swagger = require("@nestjs/swagger");
const _appmodule = require("./modules/app/app.module");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    const document_config = new _swagger.DocumentBuilder().setTitle(process.env.npm_package_name).setVersion(process.env.npm_package_version).build();
    const document = _swagger.SwaggerModule.createDocument(app, document_config);
    _swagger.SwaggerModule.setup('docs', app, document);
    app.enableVersioning({
        type: _common.VersioningType.URI
    });
    app.enableShutdownHooks();
    await app.listen(process.env.BACKEND_PORT || 3001);
}
bootstrap();

//# sourceMappingURL=main.js.map