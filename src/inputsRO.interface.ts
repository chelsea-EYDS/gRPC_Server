export class InputResponseRO {
  status: {
    code: number;
    description: string;
  }
  inputs: Inputs[]  
}

interface Inputs {  
    id: string;
    created_at: string;
   data:{
     image:{
       url: string;
     }
   concepts: Concept[];
 }  
   status: {
      code: number;
      description: string;
   }
 } 


interface Concept {
  id: string ;
  name: string ;
  app_id: string ;
  value: number;
}  

