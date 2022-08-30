import React,{useReducer} from 'react';

type stateType = {
    count:number
}
// type actionType = {
//     type:string,
//     payload:number
// }

type updateAction ={
    type:'INCREMENT'|'DECREMENT',
    payload:number
}
type resetAction = {
    type:"RESET"
}
type counterAction =updateAction | resetAction
const Counter = () => {
    const initialState = {count:0}
    const reducer = (state:stateType,action:counterAction) => {
        switch(action.type){
            case 'INCREMENT':
                return {
                    count:state.count+action.payload
                }
            case 'DECREMENT':
                return {
                    count:state.count-action.payload
                }
            case 'RESET':
                return initialState
            default:
                return state
        }
    }
    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
  <p>{state.count}</p>
  <button onClick={()=>dispatch({type:'INCREMENT',payload:20})}>Increment</button>
  <button onClick={()=>dispatch({type:'DECREMENT',payload:20})}>Decrement</button>
  <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
    </div>
  )
}

export default Counter