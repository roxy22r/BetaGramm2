# BetaGramm2
This is a instagram like website for a Project

## Lessons-Learned
- Racism Bad
- MEGELTOME EH 
- Andrew Tate is the one and only TOP G!
### What is Vue?
Vue is a client sided Java-Script Webframework for the creation of Single-Page-Webapplications for the MVVM-Pattern.
It can be used for some Multipage-Websites though.
Version 2.0 Supports Serversided rendering.
### Bootstrap-Vue
We have learned that with Vue 3 or generally with
it was very difficult to use the node package bootstraap-vue.
Because no matter how much changing and rearranging we did, it didn't work.
In the end we did most of the design ourselves.
Up to the point that we realised very late, that we could also install the normal bootstrap without this special variant.
Well we should've done tinyer steps
### Creating a form
We stuggled to send the form data to the logic part from Vue.
The solution was quite simple and easy in retrospect, but the problem was that it was very unusual for us that the logic was also in the same file. Conclusion don't be afraid of new things even if they are not your personal preference.
## Usecase Diagramm
![image](https://github.com/roxy22r/BetaGramm2/assets/51272296/f71dbc3a-dfed-44fb-be32-ec6c2d4c104e)

### Important Info
## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
