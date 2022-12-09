export interface IInput {
  type: string;
  label?: string;
  placeholder?: string;
  onChange?:React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export interface ISelect {
  list: Array<String>;
  placeholder: string;
  multiple?: Boolean;
}

export interface IButton {
  type: "submit" | "button";
  children: React.ReactNode;
  filter?: Boolean;
  icon?:string;
  onClick?:React.MouseEventHandler<HTMLButtonElement> | undefined;
  btnFilter?: String;
}
