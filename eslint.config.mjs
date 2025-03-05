import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompat ayuda a migrar las configuraciones desde el antiguo formato eslintrc al nuevo formato plano.
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Configuración extendida de Next.js Core Web Vitals
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    ignores: ["node_modules/**"], // Ignorar directorios innecesarios
    rules: {
      // Aquí puedes agregar tus reglas personalizadas
    },
    languageOptions: {
      ecmaVersion: 2020,  // Configuración de ECMAScript
      sourceType: "module",  // Módulos ES
    },
  },
];
