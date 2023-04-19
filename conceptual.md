### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
React router enacts client side routing
- What is a single page application?
An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.
- What are some differences between client side and server side routing?
The difference between this two routing have been stated above server sides needs to keep making requests to the server in order for the application to rerender, but client side does not need to keep make request to the server
- What are two ways of handling redirects with React Router? When would you use each?
There are two ways of handling redirects with React Router:

1. `<Redirect>` component: This component can be used to redirect a user to another route. You can use it by rendering it in your component's render method with the `to` prop set to the route you want to redirect to. For example, `<Redirect to="/login" />`. You can use this when you want to programmatically redirect a user to a different route based on certain conditions, such as if they are not logged in.

2. `<Switch>` component: This component can be used to render the first child `<Route>` or `<Redirect>` that matches the current location. By placing a `<Redirect>` component inside a `<Switch>`, you can specify multiple redirect rules and the first matching rule will be executed. For example, 

```
<Switch>
  <Route exact path="/" component={Home} />
  <Redirect from="/old-url" to="/new-url" />
  <Route exact path="/about" component={About} />
</Switch>
```

You can use this when you want to specify multiple redirect rules and have them be evaluated in a specific order. 

Both of these methods are useful in different scenarios. If you need to redirect a user programmatically, you should use the `<Redirect>` component. If you need to specify multiple redirect rules and have them evaluated in a specific order, you should use the `<Switch>` component.

- What are two different ways to handle page-not-found user experiences using React Router? 
Using <Switch> and <Route>: You can create a "not found" page by creating a new component and rendering it when the current route does not match any of the defined routes. You can do this by wrapping all your <Route> components inside a <Switch> component and adding a final route that will match any path that has not been matched yet
You can also use <Redirect> to redirect the user to a "not found" page when they try to access a route that does not exist.
- How do you grab URL parameters from within a component using React Router?
you can grab url from within components by using the useParams hook from the react router dom library

- What is context in React? When would you use it?
In React, context is a way to pass data through the component tree without having to pass props down manually at every level. Context allows you to create a "global" state that can be accessed by any component in your application, regardless of its level in the component tree.

- Describe some differences between class-based components and function
  components in React.

- What are some of the problems that hooks were designed to solve?