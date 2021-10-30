import { Injectable } from "@nestjs/common";
import { AddInputs } from "./inputs.interface";

@Injectable()
export class InputsService {
  public addInput(inputs: AddInputs){
    console.log(inputs)  
    const inputsReturn = {
      status: {
        code: 10000,
        description: "Ok"
      },
      inputs: [
        {
          id: "e82fd13b11354d808cc48dc8f94ec3a9",
          created_at: "2016-11-22T17:16:00Z",
          data: {
            image: {
              url: "https://samples.clarifai.com/puppy.jpeg"
            },
            concepts: [
              {
                id: "charlie",
                name: "charlie",
                app_id: "f09abb8a57c041cbb94759ebb0cf1b0d",
                value: 1
              }
            ]
          },
          status: {
            code: 30000,
            description: "Download complete"
          }
        }
      ]
    }
  
  return inputsReturn
  }

}