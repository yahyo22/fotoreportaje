export interface IInput {
  type: string;
  label?: string;
  placeholder?: string;
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
  btnFilter?: String;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
