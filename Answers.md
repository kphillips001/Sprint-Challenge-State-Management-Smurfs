1. What problem does the context API help solve?

The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It's aimed at solving the problem of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store - A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it. It is the only source of truth because it is not rewritten or reshaped. 

Reducers - Reducers specify how the application's state changes in response to actions sent to the store

Actions - Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. 


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Your application state is global, and your component state is local. That means any component, anywhere in the app can access it (kind of like a database) so long as they hook into it. 
Your application state is global, and your component state is local. That means any component, anywhere in the app can access it (kind of like a database) so long as they hook into it. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.

1. What is your favorite state management system you've learned and this sprint? Please explain why! Redux because it has a lot of moving parts, was hard to learn, but can definitely understand the concept now and how it can handle large scale applications. 
