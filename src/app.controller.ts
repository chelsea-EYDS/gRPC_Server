import {Controller, Inject, Logger} from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices';
import { InputsService } from './inputs.service'
import { AddInputs } from './inputs.interface'
import { InputResponseRO } from './inputsRO.interface'

@Controller()
export class AppController {
  private logger = new Logger('App Controller')
  constructor(private inputsService: InputsService){}
  
  @GrpcMethod('AppController', 'Accumulate')
  addInput(inputs: AddInputs, metdata: any): InputResponseRO {
    console.log(inputs, "data")  
    return this.inputsService.addInput(inputs)
    
  }
}