import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    prettier,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // More relaxed rules for examples
            "@typescript-eslint/no-unused-vars": "off", // Examples might have unused imports for demonstration
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-explicit-any": "off", // Allow any in examples
            "no-console": "off", // Allow console.log in examples
            "@typescript-eslint/no-floating-promises": "off", // Allow floating promises in examples
            "@typescript-eslint/require-await": "off", // Allow async without await
            "@typescript-eslint/no-unsafe-assignment": "off", // Allow unsafe assignments
            "@typescript-eslint/no-unsafe-member-access": "off", // Allow unsafe member access
            "@typescript-eslint/no-unsafe-call": "off", // Allow unsafe calls
            "@typescript-eslint/no-unsafe-return": "off", // Allow unsafe returns
            "@typescript-eslint/no-unsafe-argument": "off", // Allow unsafe arguments
        },
    },
    {
        ignores: ["dist", "node_modules", "*.js", "eslint.config.mjs"],
    }
);
