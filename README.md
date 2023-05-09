# Vue 3 with TypeScript

## Introduction
Welcome to my talk on Vue 3 with TypeScript! In this talk, I will be discussing how to use TypeScript in your Vue 3 project. TypeScript is a superset of JavaScript that provides static typing and allows for better code organization, making it a great choice for large-scale Vue projects.

In this talk, I will be covering various aspects of using TypeScript with Vue 3, including setting up your project, typing various aspects of Vue components, and using TypeScript with third-party libraries.

# Table of contents

- Spinning up 🚀 a new Vue 3 project with TypeScript
- Setting up 🛠️ your IDE
- Catch type errors across files 🧲
- Typing Ref and Reactive
- Typing Computed properties
- Typing Props and Emit
- Typing Component Template Ref
- Typing Routes 🛣
- Typing Slots 🧩
- Generic Components 🧬
- 3rd Party Libraries 📚 (bonus)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
