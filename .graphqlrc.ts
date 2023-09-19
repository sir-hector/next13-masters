import { loadEnvConfig } from "@next/env";
import type { CodegenConfig } from "@graphql-codegen/cli";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
	overwrite: true,
	schema: process.env.GRAPHQL_URL,
	documents: [
		"src/graphql/**/*.graphql",
		"src/{app,ui,api,lib}/**/*.{ts,tsx}",
	],
	ignoreNoDocuments: true,
	generates: {
		"src/gql/": {
			preset: "client",
			config: {
				useTypeImports: true,
				enumsAsTypes: true,
				defaultScalarType: "unknown",
				skipTypename: true,
				documentMode: "string",
			},
			presetConfig: {
				fragmentMasking: { unmaskFunctionName: "getFragmentData" },
			},
			plugins: [],
		},
	},
};

export default config;
