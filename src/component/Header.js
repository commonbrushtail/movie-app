import React from 'react'

export default function Header() {
    let style = {
        "backgroundColor":"whiteSmoke",
        "display":"flex",
        "width":"100%",
        "justifyContent":"center",
        'fontSize':'30px'
                                       }
    return (
        <div className="headcontainer" style={style}>
            <p>MovieDB</p>
            
        </div>
    )
}


