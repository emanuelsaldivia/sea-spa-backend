import React, {Component} from 'react';

class Service extends Component{
    render() {
        if(this.props.price!==undefined){
            return(
                <div>
                    <li>
                        {this.props.name} - {this.props.description} - {this.props.price}
                    </li>
                </div>
            )
        }
        else {
            return(
                <div>
                    <li>
                        {this.props.name} - {this.props.description}
                    </li>
                </div>
            )
        }
    }
}

export default Service;