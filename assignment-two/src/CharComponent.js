import React , {Component} from 'react';

export class CharComponent extends Component{
    styles = {
        display : "inline-block",
        padding : "16px",
        textAlign : "center",
        margin : "16px",
        border : "1px solid black"
    }

    render(){
        return (
                <div style = {this.styles} onClick={this.props.onClick}>
                    {this.props.char}
                </div>
        );
    }
}