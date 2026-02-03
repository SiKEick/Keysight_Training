import React from "react";

class PriceComp extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            price:3500,
            discount:10,
        }
    }
    
    render(){
        // automatic update no need of button now .. 5000 milisec = 5sec afterwards
        setTimeout(()=>{
            this.setState({price:4000,discount:20})
        },5000)
        return(
            <div>
                <p>
                    The price of the Component is {this.state.price}
                </p>
                <p>
                    The discount offered is {this.state.discount}
                </p>
                {/* <button onClick={()=> this.changePrice()}> Update Price </button> */}
            </div>
        )
    }
}


export default PriceComp;