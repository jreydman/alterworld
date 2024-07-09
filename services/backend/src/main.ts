import { ValidationPipe, VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './modules/app/app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const document_config = new DocumentBuilder()
		.setTitle(process.env.npm_package_name)
		.setVersion(process.env.npm_package_version)
		.build()
	const document = SwaggerModule.createDocument(app, document_config)
	SwaggerModule.setup('docs', app, document)

	app.enableVersioning({
		type: VersioningType.URI,
	})

	app.enableShutdownHooks()

	app.useGlobalPipes(new ValidationPipe())

	await app.listen(process.env.BACKEND_PORT || 3001)
}

bootstrap()
