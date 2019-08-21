import React, {Component} from 'react';

class ServiceForm extends Component{
    render(){
        return(
            <form onSubmit={this.props.onAddService}>
                <input type="text" placeholder="Nombre" name="name"/>
                <input type="text" placeholder="Descripción" name="description"/>
                <input type="submit" value="Guardar"/>
            </form>
        );
    }
}

export default ServiceForm;