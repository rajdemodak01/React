# Notes

## React

### Redux is a core library, react-redux is a implementation of redux used for wiring so that react and redux can communicate together

### When we use redux-toolkit, some works happened automatically

### First we need to build a store(every application have one store) which needs configureStore

### we need to build reducer in an another file

#### In Simple words we  called features as slice

### To build Slice we need three things name, initialState and a list of reducers. Reducers is an object in which we can add as many key value pair. Reducers also may caontain functions. For functions we have access of State and Action. In State we get updated State value of the Store and in Action we get action.payload. We can build unique id using nanoId. We export main Source of reducers and reducer methods

### To Send values we use useDispatch(). By importing the reducers and through the reducer and using dispatch we send the data

### To use/take the values we use useSelector
