import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { CartContextProvider } from "./store/CartContext"
import { MenuContextProvider } from "./store/MenuContext"

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<CartContextProvider>
		<MenuContextProvider>
			<App />
		</MenuContextProvider>
	</CartContextProvider>
)
