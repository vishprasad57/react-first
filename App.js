import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';








// Body Component for body section: It contain all restaurant cards
// We are mapping resList array and passing data to RestaurantCard component as props with unique key as index
// We are mapping for each restuarant and rendering the RestaurantCard Component




const AppLayout = () => {
    return (
        <div className="app">
            {<Header /> }
            {Body()}

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);