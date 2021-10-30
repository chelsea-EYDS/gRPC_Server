import { AddInputs } from "src/inputs.interface";
const {ClarifaiStub, grpc} = require("clarifai-nodejs-grpc");
const apiKey =process.env.YOUR_CLARIFAI_API_KEY

export const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call.
export const metadata = new grpc.Metadata();
metadata.set("authorization", `Key ${apiKey}`);


// TO DO  connect to controller
export class ClarifaiService {
async addInputs(inputs: AddInputs){
  stub.PostInputs(inputs,
 metadata,
  (err, response) => {
    console.log(err && err, response && response)
      if (err) {
        console.log(response.status.description)
          throw new Error(err);
      }
      if (response.status.code !== 10000) {
          console.log("error")
          for (const input of response.inputs) {
              console.log("Input " + input.id + " status: ");
              console.log(JSON.stringify(input.status, null, 2) + "\n");
          }
          throw new Error("Post inputs failed, status: " + response.status.description);
      }
      console.log(response)
      return response
  }
);

}
}