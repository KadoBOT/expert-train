What you will find here is a customized version of an ejected `create-react-app`. Besides the addition of the _airbnb styleguide_ and some custom _eslint rules_, the project also contains some other tools, which are listed below.
Also, on this repo, the routes makes use of dynamic `import()`'s. Which splits the code into smaller chunks and download them only when the new route is requested.

---
# Good Practices    
- No need for CSS. Instead, create reusable components using `styled-components`. Reusable components should be placed in the `./src/commons` folder.   
Example of common reusable components:  
  - Button, Input, Title, etc...
- For structuring your project, I recommend reading the article [Three Rules For Structuring (Redux) Applications](https://jaysoo.ca/2016/02/28/organizing-redux-application/) by Jack Hsu, IMO there is no better way to do it.
- Use `reselect` to compute derived data. `reselect` memoize the values and is not recomputed unless the data changes. In the article mentioned above, you can find a good example about how to use it.
- The usage of `recompose` allows you to have only function components, which has [many advantages](https://github.com/acdlite/recompose#why) over Class based components.
- Think of `ramda` as `lodash` but for functional JavaScript. Try understanding it, and once you get used to it, it will help you writing smaller and reusable blocks of code.

---
# The Tools
## Main dependencies
###### Don't remove them. Or you will have a lot of work if you decide to replace any of these with something else.
- [Redux](#redux)
- [Styled Components](#styled-components)
- [React Router](#react-router)

## Highly recommended dependencies
###### Dependencies that we recommend you to use, but can be easily replaced by some other package... or just not being used at all.
- [Redux Saga](#redux-saga)
- [Recompose](#recompose)
- [Reselect](#reselect)

## Optional dependencies
###### I like them. But that doesn't mean you have to like them too. Just remove those that you don't like it.
- [Redux-act](#redux-act)
- [Polished](#polished)
- [Ramda](#ramda)
- [Redux Devtools](#redux-devtools)

-----
# About the Tools
## <a id="redux"></a>Redux
###### https://github.com/reactjs/redux
__(WIP)__ You probably already heard about Redux. So I won't go into more details why this project uses it. If you want to try some other alternatives to Redux, try [MobX](https://github.com/mobxjs/mobx) or [Freactal](https://github.com/FormidableLabs/freactal).

What you should know about Redux on this project:
- Store configurations can be found inside `./src/store`
  - Two configurations. One for `dev` and another for `prod`
- Root reducer can be found in `./src/components/reducers.js`
- Each component hold their own actions and reducer. Whenever you create a stateful component, don't forget to import the new reducer into the root reducer.

## <a id="styled-components"></a>Styled Components
###### https://www.styled-components.com/  
__(WIP)__ CSS-in-JS. Write like you usually do with CSS and instead of reusing classnames, create and reuse  smaller components. Check styled-components docs for more detailed and advanced usage.
```javascript
// Using <Div> now returns a styled <div>!
const Div = styled.div`
  font-family: 'Rubik', sans-serif;
  color: white;
`;
```
## <a id="react-router"></a>React Router
###### https://reacttraining.com/react-router/
__(WIP)__ React router helps us navigating between components. The difference in this project is that it does not download all components at once, but only when they are requested. The `./utils/Bundle` is responsible for this.  
The routes can be found in `./src/components/routes`. To add new routes, simply add a new object inside the array, containing the `path` and the `component` it refers to. Since this project uses dynamic import you have to import it like this:
```javascript
// /* webpackChunkName: 'MyApp' */ will generated a MyApp.chunk.js file
{
  path: '/my-app', // url path for routing
  component: Chunk(() => import(/* webpackChunkName: 'MyApp' */ './MyApp')),
},
```
## Redux Saga <a id="redux-saga"></a>
###### https://github.com/redux-saga/redux-saga  
__(WIP)__ Redux-saga is a middleware for redux. Copy and pasting from redux-saga repo:  

_"Redux-Saga uses an ES6 feature called Generators to make those asynchronous flows easy to read, write and test. Contrary to redux thunk, you don't end up in callback hell, you can test your asynchronous flows easily and your actions stay pure."_

A 'root-saga' can be found in `./src/components/sagas.js`. Also, each stateful component has theirs on `saga` file which listens for dispatch actions. When adding a new stateful component, don't forget to imported it on the 'root-saga'.
## Recompose <a id="recompose"></a>
__WIP__
## Reselect <a id="reselect"></a>
__WIP__
## Redux-act <a id="redux-act"></a>
__WIP__
## Polished <a id="polished"></a>
__WIP__
## Ramda <a id="ramda"></a>
__WIP__
## Redux Devtools <a id="redux-devtools"></a>
__WIP__
