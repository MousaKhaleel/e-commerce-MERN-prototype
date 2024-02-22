import React from "react"

class SetProduct extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{borderColor: this.props.color ,borderWidth:'1',borderStyle: 'solid'}}>
                <p>price: {this.props.price}</p>
            </div>
        )
    }
}

export default SetProduct;