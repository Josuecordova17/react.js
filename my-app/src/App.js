import React,{Component} from 'react';
import './App.css';
class App extends Component {
  state={
    hora:''
  }
  reloj=()=>{
    var fecha,hora
    const h=()=>{
      fecha=new Date()
      hora=fecha.toLocaleTimeString()
      this.setState({hora:hora})
    }
    h()
    setInterval(() => {
      h()
    }, 1000);
  }
  h=this.reloj()
  render (){
    setInterval(() => {
    console.log(this.state.hora);
    }, 1000);
    return(
      <h1>Son las{this.state.hora}</h1>
    )
  }
}
export default App;