## Working in App.js
- Initially React starts with boilerplate code
    - this is useful to ensure the app is running
- This code gets deleted, and replaced with functional components
    - this is similar to functional components in javascript
    - the name convention is PascalCase

```jsx
import React from "react"

const App = () => {
  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default App
```

## Nest Components
- It is normal to have many different components working together to create a React App
- When we do, we create a 'components' directory inside the 'src' directory
    - Here we can add components like Headers, Footers, and other components
- Example: src/components/Header.js
```jsx
import React from "react"

const Header = () => {
  return (
    <>
      <h1>Recipe Application</h1>
    </>
  )
}

export default Header
```
- New Component Steps:
    1. Create the component function expression
    2. Return JSX
    3. Export the component
- Return to src/App.js
    - We need to call the component in the App.js file
    - We do this by importing the component at the top
    - Example:
    ```jsx
    import React from "react"
    import Header from "./component/Header"

    const App = () => {
    return (
        <>
        <Header />
        </>
    )
    }

    export default App
    ```

## Challenges:
As a developer, you are tasked with creating an application to share your favorite things. Decide which favorite things you would like to showcase. When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code into individual components.

📚 User Stories
- As a user, I can see a Header component with the title of your app.
- As a user, I can see a Profile component with information about you and your partner.
- As a user, I can see a Footer component with the name of your cohort.
- As a user, I can see a Favorites component with a list of top five favorites (i.e. top five favorite TV shows, top five favorite songs, top five favorite taco shops).
- As a user, I can see a browser tab with a customized name and favicon.