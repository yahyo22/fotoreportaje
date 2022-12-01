import { GlobalStyle } from "./assets/style/Globalstyle";
import { BrowserRouter } from "react-router-dom";
import Router from './router/Router';
export default function App() {
  return (
    <>
    <GlobalStyle/>
  <BrowserRouter>
  <Router/>
  </BrowserRouter>
    </>
  )
}

