import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            count:0
        }
    }
    addButton(){
        this.setState(
            {count:this.state.count+1}
        )
    }

    subButton(){
        this.setState(
           {count:this.state.count-1}
        )
    }
    resetButton(){
        this.setState({
           count:0
        })
    }
    render()
{
    return(
        <div>
            <h2>
                Counter
            </h2>
            <p>
                Current Value : {this.state.count}
            </p>
            
            <button onClick={()=>this.addButton()}>Add</button>
            <button onClick={()=>this.subButton()}>Subtract</button>
            <button onClick={()=>this.resetButton()}>Reset</button>

        </div>
    );
}
}

export default Counter;



