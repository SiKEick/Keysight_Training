import React, {useContext} from "react";

let Price = React.createContext(2000);
let Plan = React.createContext("Basic")

function App(){   // Producer/Provider   // only sending value to cart n dashboard
    return(
        <div> 
            <Price.Provider value ={{val1:3500, discount: 20}}>
                <Cart />          
                <Dashboard />
            </Price.Provider>

            <Plan.Provider value ={"Gold"}>
                <Cart />
            </Plan.Provider>

            <ProductPage />
        </div>
    )
}

function Cart(){

    const value = useContext(Price);

    return(
        <div>The price in cart comp is {value.val1} and discount is {value.discount}</div>
    )
}

function Dashboard(){
    const value = useContext(Price);
    return(
           
            <div>The price in dash comp is {value.val1}</div>

        
    )
}

function ProductPage(){   //Consumer
    return(
        <div>
            <Price.Consumer>
                {(value) => <div>The price in product page  comp is {value}</div>}
            </Price.Consumer>

            <Plan.Consumer>
                {(value) => <div>The plan in product page comp is {value}</div>}
            </Plan.Consumer>
        </div>
    )
}

export default App;