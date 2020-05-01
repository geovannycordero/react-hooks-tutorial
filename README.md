## React Hooks

**[Tutotrial](https://app.pluralsight.com/library/courses/using-react-hooks/table-of-contents) description**
React versions 16.8 and higher include React Hooks which solves several problems that went unaddressed in previous versions. React Hooks provide a direct API to React concepts you already know about, like props, state, context, refs and lifecycle events. This is not a beginner course on React itself; if you are not comfortable building simple React apps that use state, start out with the React: Getting Started course. In this course, Using React Hooks, you’ll learn both basic and advanced techniques for using React Hooks in React functional components where previously there was no good way to manage state or lifecycle events. First, you'll see how to use all of the built-in React Hooks provided by the React team. Next, you’ll discover that you can combine the base React Hooks into your own custom React Hooks. Finally, you’ll explore how to incorporate Hooks into a real-world React App. When you are finished with this course, you’ll confidently be able to combine functional components with React Hooks to build first class React apps. 


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
