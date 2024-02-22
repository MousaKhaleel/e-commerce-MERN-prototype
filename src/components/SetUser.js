import React from "react";

class SetUser extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div>
                <h1>Name: {this.props.name}</h1>
                <h2>Age: {this.props.age}</h2>
                <h3>Feild: {this.props.feild}</h3>
            </div>
         );
    }
}
 
export default SetUser;