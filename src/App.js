import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ServiceForm from './ServiceForm';
import ServiceList from './ServiceList'

class App extends Component{
  constructor(){
    super();
    this.state = {
      services: [
        {id:1, name:"Estacionamiento", description: "Parking lot por reserva", price: 100},
        {id:2, name:"Piscina", description: "Acceso ilimitado a la piscina"}
      ]
    }
  }

  handleOnAddService(event){
    event.preventDefault();

    let service = {
      name: event.target.name.value,
      description: event.target.description.value
    };

    this.setState({
      services: this.state.services.concat([service])
    });
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <ServiceList services={this.state.services}/>
          <ServiceForm onAddService={this.handleOnAddService.bind(this)}/>
        </header>
      </div>
    );
  }
}

export default App;
