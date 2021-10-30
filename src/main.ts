import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { join } from 'path'
import { AppModule } from './app.module'

const microserviceOptions: MicroserviceOptions = {
transport: Transport.GRPC,
options: {
  package: 'inputs',
  protoPath: join(__dirname, '../src/inputs.proto'),
}
}

async function bootstrap() {
	const app = await NestFactory.createMicroservice(AppModule, microserviceOptions)

	console.log(await app.listen())

}
bootstrap()