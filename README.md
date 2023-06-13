# BetaGramm2
This is a Website vor Gamers who want to Battle against each other and want to add Games they want to buy to a list.

## Lessons-Learned
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
### Send data via Routing
We wanted to upload the game data to another site. Since we need this data in the form, our goal was to edit the data but not on the same page.

In the end we learned that with 
this.$route.params(name: "viewName",parmas:{ id: '1'})
you can send the data via route and with
read this.$route.params.title.

How ever, we did not manage to give a json object with it.
## Other Problems

### Fronted Navigation
We had a problem with the responsiveness and placement of the navigation, because something from Vue itself probably overwrote our code. Unfortunately we don't have a fix for this :(


## Usecase Diagramm
![image](https://github.com/roxy22r/BetaGramm2/assets/51272296/f71dbc3a-dfed-44fb-be32-ec6c2d4c104e)

##  Guide 
### Style Guide 
Logo: We have no Logo but as a Place holder we will use the vue Logo

Fonts:

- Headings and titles font: 'Press Start 2P',curisive ->Import for the Font-family: @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
- Body text font: Arial, sans-serif

Style Guide:

Colors
Navigation Color: #5F9EA0
Background Color: #1D1D35
Primary color : #00000,
Secondary Blue: #1D1D35


Images:
- Use medium-quality or that seems clear what is on the  images that reinforce the message of the website.
- Use images that are relevant to the content.

Copy:
- Keep copy concise and to-the-point.
- Use language that is easy to understand and free of jargon.
- Use headers and subheads to break up content and make it easier to read.

- General style is in a Retro Game Style
Example:
- Heading: Welcome to our Retro Gaming Shop

### Code Guide
Code Guide Lines:

- Please use ESLint for code formatting
- Try to use bootstrap a much as possible except
- Use axios when rest calls are implemented

Programming style flow the book Clean Code  

### Important Commands
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
