/* #region Import */

/* #region React */
import React from "react"
import ReactDOM from "react-dom/client"
/* #endregion */

/* #region Style */
import "./global.css"
/* #endregion */

/* #region Component */
import App from "../web/App"
/* #endregion */

/* #endregion */

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
