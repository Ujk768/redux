![image](https://github.com/Ujk768/redux/assets/63089923/3dd97013-d093-47c0-8682-f2e05f0ba24f)


Store -> Holds the state of your application
Action -> describes the changes in the state of your application
Reducer -> actually carries out state transition depending on the action

3 principles
1.	The state of your application is stored in an object tree within a single store.
-	Maintain our application state in a single object which would be managed by the Redux store.
2.	The only way to change the state is to emit an action, an object describing what ha
- To update the state of your application, you need to let Redux know about that with an action.
- Not allowed to directly update the state object.
3.	To specify how the state tree is transformed by actions, you write pure reducers

Actions
Only way to interact with the redux store.
Carry out some information from your app to redux store.
Have a type property that indicates type of action being performed.
Action is an object with a type property
Action Creator- Function that returns an action

Reducers
Specify how the apps state changes in response to the actions sent to the store.
Function that accepts state and actions as arguments, and returns the next state of the application.

Redux Store
One store for entire application
Responsibilities
-	Holds the application state
-	Allows access to state via getState()
-	Allows state to be updated via dispatch (Action)
-	Register Listeners via subscribe(listener) -> accepts a function as a parameter which executes any time the state in the store changes.
-	Handles unregistering of listeners via the function returned by subscribe(listener) 



Steps
1.	Create a store
2.	Declare the initial state and reducer
3.	Define action and action creators
4.	Subscribe to the store
5.	Dispatch actions to update the store
6.	Unsubscribe the changes

 Middleware
Suggested way to extend Redux with custom functionality.
Provides a third-party point between dispatching an action and reaching the reducer.
Use middleware for logging, crash reporting, perform async operations

Actions
Synchronous actions -> As soon as action is dispatched, state was immediately updated.
Async Actions -> Async API calls to fetch data from an endpoint and use the data in your application.
Redux thunk -> Define async action creators. Middleware applying to the redux store
