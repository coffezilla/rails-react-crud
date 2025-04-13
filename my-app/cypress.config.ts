//
//	needs to check the .env file to use correctly
//	ENVIRONMENT_STAGE: set the stage the cypress will use to get the env variables
//	PS: it's important to run the port for the test on the server, which sould be :3000
//

import { defineConfig } from "cypress";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

type TEnvironments = "DEVELOPMENT" | "PRODUCTION" | "TEST";

const ENVIRONMENT_STAGE: TEnvironments = "DEVELOPMENT";

const getEnvironmentFileName = (env: TEnvironments) => {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);
	let fileEnv = ".env";
	switch (env) {
		case "DEVELOPMENT":
			fileEnv = ".env.development";
			break;
		case "PRODUCTION":
			fileEnv = ".env";
			break;
		case "TEST":
			fileEnv = ".env.test";
			break;
		default:
			break;
	}

	return `${__dirname}/${fileEnv}`;
};

const envFileDirectory = getEnvironmentFileName(ENVIRONMENT_STAGE);
dotenv.config({ path: envFileDirectory });

export default defineConfig({
	e2e: {
		baseUrl: process.env.CYPRESS_FRONTEND_URL || "https://localhost:3000",
		env: {
			dirname: path.dirname,
			enableLogging: false,
		},
		setupNodeEvents(on, config) {
			// Register the createFile task for the log
			on("task", {
				createFile({ fileName, content }) {
					const filePath = path.join(process.cwd() + "/cypress/log/", fileName);
					fs.writeFileSync(filePath, content);
					return null;
				},
			});

			return config;
		},
		watchForFileChanges: false, // Disable automatic test reruns on file changes
		defaultCommandTimeout: 20000,
		defaultBrowser: "chrome",
	},

	component: {
		devServer: {
			framework: "react",
			bundler: "vite",
		},
		specPattern: "src/components/**/*.cy.{js,jsx,ts,tsx}",
	},
});
