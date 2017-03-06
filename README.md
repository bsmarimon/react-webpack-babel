A example of a Google Maps component written with React. Adapted using the boilerplate code from https://github.com/alicoding/react-webpack-babel. You can run `npm run-script start` to load a development server with hotreloading.


### Getting started
`jsx` - An extended version of JavaScript that works well with React. Let’s you assign “HTML” to variables, easily make templates, and add simple logic to your DOM. JSX expressions are enclosed in curly braces.

On this note is this kind of JSX practice safe?
```
const name = form.input;
const element = <h1>{name}</h1>
```

Now let’s break down how React works on a high level. You’re going to be a writing a bunch of code - maybe you some idea how React already looks - but how does this get injected into your DOM? Well, look for a line that says ReactDOM.render(a, root). Typically, you’ll have a div with an id that serves as the “top” of the React DOM tree, and the ReactDOM you construct will be attached to this.

### Helpful Tips
* React uses className, not class, for CSS stylings in the DOM
* The location of Berkeley is `{lat: 37.8709987, lng: -122.2680837}`
* You MUST have a singular root in any JSX expression
* Every tag in JSX must have a closing tag or be self-closing

### Components
To be filled out soon.

### Props
Props dictate the appearance of a component.

### State
You can have stateless and stateful components, but in general, you want to follow the practice that data should flow down in your application. If you can manage a particular state higher up in the component hierarchy, it is better to do so and allow the child components to be stateless. Simply pass the state in as props to the child.
