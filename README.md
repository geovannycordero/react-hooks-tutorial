## React Hooks

Resouce: Pluralsight tutotrial [Using React Hooks](https://app.pluralsight.com/library/courses/using-react-hooks/table-of-contents)

React Hooks provide a direct API to React concepts you already know about, like props, state, context, refs and lifecycle events. 
_Concepts covered_:
- both basic and advanced techniques for using React Hooks in React functional components where previously there was no good way to manage state or lifecycle events. 
- how to use all of the built-in React Hooks provided by the React team.
- combine the base React Hooks into your own custom React Hooks. 
- how to incorporate Hooks into a real-world React App. 


### Project initialization 

1. Create project directory and add dependencies
  ```bash
  $ mkdir project_name 
  $ npm init -y
  $ npm install --save react react-dom next
  $ mkdir pages
  $ cd pages/
  $ touch index.js
  ```

2. Add [Next.js](https://nextjs.org/) to the project
  ```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
  ```

### Run current project

- Install dependencies

  ```bash
  npm install 
  ```

- Run the project
  ```bash
  npm run dev
  ```
