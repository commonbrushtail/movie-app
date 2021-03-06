import React from 'react'

export default function Footer(props) {
    
    
    return (
        <form action =""  onChange={props.handleChange} onSubmit={props.handleSubmit}className ="searchBar">
            <div style={{'display':'flex'}}>
                <input className ="inputBox"type="text" name="search" />
                <button className ="submit" type="submit"><img src="search.png"/></button>
            </div>
                <div style={{'display':'flex','flexDirection':'column','alignItems':'center','marginTop':'10px'}}>
            
                    <img alt="logo" style ={{'width':'35px'}} src="Tmdb-312x276-logo.png" />
                    <p style={{'fontSize':'7px'}}>Powered by</p>
                </div>
                
            </form>
    )
}
