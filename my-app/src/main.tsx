import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

//
import store from "./redux/ConfigStore.ts";

import "./index.css";
import "react-tooltip/dist/react-tooltip.css";

import Routers from "./Routers.tsx";
import { Tooltip } from "react-tooltip";

createRoot(document.getElementById("root")!).render(
	<>
		<Provider store={store}>
			<Routers />
			<Toaster />

			<Tooltip id="my-tooltip" />
		</Provider>
	</>,
);
