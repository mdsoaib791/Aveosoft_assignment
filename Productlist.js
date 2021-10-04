import React from 'react'

function Productlist({soaib}) {
    return (
        <div className="p-data">
            <p>{soaib.name}</p>
            <p>{soaib.model}</p>
            <p>{soaib.price}</p>
        </div>
    )
}

export default Productlist;

