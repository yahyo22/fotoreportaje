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
<<<<<<< HEAD
  icon?:string;
  onClick?:React.MouseEventHandler<HTMLButtonElement> | undefined;
}
=======
  icon?: string;
  btnFilter?: String;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
>>>>>>> d87c9e2d1fe7b0dc8cb30e5a32d7a31b4fe2f09e
