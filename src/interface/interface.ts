

export interface IInput {
  type: string;
  label?: string;
  placeholder: string;
}

export interface ISelect {

}

export interface IButton {
  type:"submit" | "button";
  children: React.ReactNode;
  filter?: Boolean;
  icon?:string;
}