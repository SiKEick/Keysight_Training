import React from 'react';

let Price = React.createContext(3000)
let discount = React.createContext(10)


function PriceComp(){
    return (
        <Price.Provider value = {4000}>
         <DiscountComp/>
        </Price.Provider>

    )
}

function DiscountComp(){
    return (
        <discount.Provider value = {30}>
            <AppComp/>
        </discount.Provider>

    )
}


function AppComp(){

    return (
        <div>
        
        <Price.Consumer>
                {(price) => (
                <discount.Consumer>
                    {(discount) => (
                    <>
                        <div>Actual Price: {price}</div>
                        <div>Discount Given: {discount}%</div>
                        <div>Discounted Price: {price - (price * discount) / 100}</div>
                    </>
                    )}
                </discount.Consumer>
                )}
            </Price.Consumer>

        </div>
    )
}


function App() {
  return <PriceComp />;
}

export default App;