import './App.css';
import {INCREMENT, DECREMENT, MULTIPLY, DIVIDE} from './store'
import Button from './components/Button';
import Calculadora from './components/Calculadora';
import { connect } from 'react-redux';


function App({increment, decrement, multiply, divide}) {
  return (
    <div className="App">
      <Calculadora/>
      <Button handleClick={increment}>Sumar</Button>
      <Button handleClick={decrement}>Restar</Button>
      <Button handleClick={multiply}>Multiplicar</Button>
      <Button handleClick={divide}>Divide</Button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
    multiply: () => dispatch({type: MULTIPLY}),
    divide: () => dispatch({type: DIVIDE}),
  };
}

export default connect(null, mapDispatchToProps)(App);
