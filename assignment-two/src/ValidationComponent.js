import React, {Component} from 'react';

export class ValidationComponent extends Component {

    render(){
        let length = this.props.textLength;
        return (
            <div>
            {
                length < 5 ? <p> Text too short </p> : <p> Text long enough </p>
            }
            </div>
        );
    }
}
