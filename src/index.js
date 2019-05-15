import Index from "./pages/index";
import ButtonAppBar from "./pages/appbar";
import * as serviceWorker from "./serviceWorker";
import { registerCustomElement } from "react-custom-element";

registerCustomElement(ButtonAppBar, "appbar-vkb");
registerCustomElement(Index, "gami-app");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
