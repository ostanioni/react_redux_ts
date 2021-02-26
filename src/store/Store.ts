import {createStore} from 'redux'

type Action = {
  type: string
  [key:string]:string
}

function counterReducer(state = { value: 0 }, action:Action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default: 
      return state
  }
}
const Store = createStore(counterReducer, { value: 5 })
export default Store
