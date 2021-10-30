
export interface AddInputs {
  inputs: Input[]    
}

interface Input{
image: {
url: string;
allow_duplicate_url: boolean;
}
concepts: Concept[];
}

interface Concept {
id: string;
value: number
}