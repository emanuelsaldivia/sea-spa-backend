import React, {Component} from 'react';
import Service from './Service';

class ServiceList extends Component{
    render(){
        return(
            <ul>
                {this.props.services.map(s => {
                    if(this.props.price!==undefined){
                        return(
                            <Service
                                    key={s.id}
                                    name={s.name}
                                    description={s.description}
                            />
                        )
                    } else {
                        return (
                            <Service
                                key={s.id}
                                name={s.name}
                                description={s.description}
                                price={s.price}
                            />
                        );
                    }
                })}
            </ul>
        );
    }
}

export default ServiceList;