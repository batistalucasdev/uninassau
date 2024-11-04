import { createroot } from "react-dom/client";

import App from "./App"

const rootElement = document.getElementById("root");
const root = createroot(rootElement);

root.render(
    <App/>
)