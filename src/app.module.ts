import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import {InputsService} from './inputs.service'

@Module({
	controllers: [AppController],
	providers: [InputsService],
})
export class AppModule {}
