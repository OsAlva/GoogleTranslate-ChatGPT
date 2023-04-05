import { useReducer } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//1.Create a initial state
const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false   
}

//2. Create a reducer 
function reducer(state: typeof initialState, action){
  const {type, payload} = action

  if(type === 'INTERCHANGE_LANGUAGES'){
    return {
      ...state,
      fromLanguage: action.toLanguage,
      toLanguage: action.fromLanguage
    } 
  }
  //para cambiar idioma de origen
  if(type === 'SET_FROM_LANGUAGE'){
    return{ 
      ...state,
      fromLanguage: payload
    }
  }

  //para cambiar idioma de destino
  if(type === 'SET_TO_LANGUAGE'){
    return{
      ...state,
      toLanguage: payload
    }
  }

  if(type === 'SET_FROM_TEXT'){
    return{
      ...state,
      loading: true,
      fromText: payload,
      result: ''
    }
  }

  if(type === 'SET_RESULT'){
    return{
      ...state,
      loading: false, 
      result: payload
    }
  }

  //si no hay ningun tipo devolver el stado
  return state
}

function App()  {
  //3. Usar el hook useReducer
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <h1>Google Translate</h1>
     
    </div>
  )
}

export default App
