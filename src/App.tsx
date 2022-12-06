import { GlobalStyle } from "./assets/style/Globalstyle";
import { BrowserRouter } from "react-router-dom";
import Router from './router/Router';
import "./index.css"
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

