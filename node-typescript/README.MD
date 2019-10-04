NODE com Typescript 
======================

https://medium.com/@oieduardorabelo/node-js-e-typescript-o-como-e-com-testes-7affce2c02a8

npm init -y
npm i typescript nodemon ts-node
./node_modules/.bin/tsc --init

// node-typescript/tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true
}
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.ts"]
}

// node-typescript/package.json
{
  "name": "node-typescript",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    // [A]
    "dev": "nodemon --watch "src/" --exec \"ts-node src/entry.ts\" -e ts"
  },
  "dependencies": {
    "nodemon": "^1.18.4",
    "ts-node": "^7.0.1",
    "typescript": "^3.0.3"
  }
}

// node-typescript/package.json
{
  // ...outras regras do seu `package.json`
  "scripts": {
    // ...outros scripts
    "build": "tsc",
    "prod": "npm run build && node dist/entry.js"
  }
}
ESLINT
======
./node_modules/.bin/eslint --init

vscode settings.json
 {
     ...
 
 "eslint.autoFixOnSave": true,
 "eslint.validate": [
     "javascript",
     "javascpritreact",
     { "language": "typescript", "autoFix": true},
     { "language": "typescriptreact", "autoFix": true},
 ]


 }