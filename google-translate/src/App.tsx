import { useReducer } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {type Action, type State } from './types.d';


//1.Create a initial state
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false   
}

//2. Create a reducer 
function reducer(state: State, action: Action){
  const {type} = action

  if(type === 'INTERCHANGE_LANGUAGES'){
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    } 
  }
  //para cambiar idioma de origen
  if(type === 'SET_FROM_LANGUAGE'){
    return{ 
      ...state,
      fromLanguage: action.payload
    }
  }

  //para cambiar idioma de destino
  if(type === 'SET_TO_LANGUAGE'){
    return{
      ...state,
      toLanguage: action.payload
    }
  }

  if(type === 'SET_FROM_TEXT'){
    return{
      ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if(type === 'SET_RESULT'){
    return{
      ...state,
      loading: false, 
      result: action.payload
    }
  }

  //si no hay ningun tipo devolver el stado
  return state
}

function App()  {
  //3. Usar el hook useReducer
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
  }, dispatch] = useReducer(reducer, initialState)

  console.log({fromLanguage})

  return (
    <div className="App">
      <h1>Google Translate</h1>
      <button onClick={() =>{
        dispatch({type: 'SET_FROM_LANGUAGE', payload: 'es'})
      }}>Cambiar a Español</button>
     
    </div>
  )
}

export default App
