import React, { useReducer } from 'react';
import './App.css';

const initialState={
  value:0,
  op:'',
  num1:0,
  num2:'',
  num3:'',

};

function reducer(state, action){

  switch (action.type){
    case "2":
      if(!state.num1){
        return{...state,num1:state.num2,op:action.playload,num2:''}
      };
      if(!state.num2){
        return{...state,op:action.playload}
      }
      if(state.num1 && state.op ){
        return{...state,value:eval(state.value+state.op+state.num2),op:action.playload}
      }
      
      return{...state,value:eval(state.num1+state.op+state.num2),num2:'',op:action.playload,num1:eval(state.num1+state.op+state.num2)}
    
    
    
    case "1":
      if(state.num2==='' && action.playload==='.'){
        return{...state,num2:'0'+action.playload}
      }
      else if(state.num2===''){
        return{...state,num2:action.playload}
      }
      else{
        if(action.playload==='.' && state.num2.includes('.')){
          return state
        }
        else{
          return{...state,num2:state.num2+action.playload}
        }

      }


    case "3":
    if(state.op && state.num2){
      return {...state, value: eval(state.num1+state.op+state.num2), num2: '', num1: eval(state.num1+state.op+state.num2), num3 : state.num2}
    }
    else if(state.op && state.value){
      return {...state, value: eval(state.value+state.op+state.num3)}
    }      
    else{
      return {...state, num2: ''}
    }

    case "c":  
      if (state.num2.length === 2 && state.num2.includes('0.')) {
        return {...state, num2: ''}
      } else if (state.num2.length>1) {
        return {...state, num2: state.num2.slice(0, -1)}
      } else {
        return {...state, num2: ''}
      }
      
      case "ac":
          return{
            value:0,
            op:'',
            num1:0,
            num2:''

          }
      default:
        return state



  };


};


function App() {
  const[state,dispatch]=useReducer(reducer,initialState);
  return (
    <div className="calculator">
      <div className="container">
      <div className="display">
        {!state.num2 ? state.value:state.num2}
        
      </div>

      <div className="calbutton">
      <button onClick={()=>dispatch({type:"ac"})}>AC</button>
      <button onClick={()=>dispatch({type:"c"})}>C</button>
      <button onClick={()=>dispatch({type:"2",playload:'*'})}>*</button>
      <button onClick={()=>dispatch({type:"2",playload:'/'})}>/</button>
      <button onClick={()=>dispatch({type:"2",playload:'+'})}>+</button>
      <button onClick={()=>dispatch({type:"2",playload:'-'})}>-</button>
      <button onClick={()=>dispatch({type:"1",playload:'1'})}>1</button>
      <button onClick={()=>dispatch({type:"1",playload:'2'})}>2</button>
      <button onClick={()=>dispatch({type:"1",playload:'3'})}>3</button>
      <button onClick={()=>dispatch({type:"1",playload:'4'})}>4</button>
      <button onClick={()=>dispatch({type:"1",playload:'5'})}>5</button>
      <button onClick={()=>dispatch({type:"1",playload:'6'})}>6</button>
      <button onClick={()=>dispatch({type:"1",playload:'7'})}>7</button>
      <button onClick={()=>dispatch({type:"1",playload:'8'})}>8</button>
      <button onClick={()=>dispatch({type:"1",playload:'9'})}>9</button>
      <button onClick={()=>dispatch({type:"1",playload:'0'})}>0</button>
      <button onClick={()=>dispatch({type:"1",playload:'.'})}>.</button>
      <button onClick={()=>dispatch({type:"3"})}>=</button>
      </div>
      
      </div>
    </div>
  );
}

export default App;
