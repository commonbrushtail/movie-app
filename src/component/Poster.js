import React from 'react'

class Poster extends React.Component {
    constructor(props){
        super(props)
        
    }
    
    
    
    
    
    render() {
       
        let imgStyle = {
            'objectFit':'cover',
            'width':'100%',
            'height':'350px',
                                    
        }
        let titleStyle ={
            'width':'85%',
            'fontSize':'20px',
            'alignSelf':'flex-start',
            'fontWeight':'600'
        }
        let overviewStyle = {
            'marginTop':'0px',
            'width':'85%',
            'height':'maxContent',
            'alignSelf':'flex-start',
            'textAlign':'start',
        }
        
        return (
            <div className="container">
                <img alt="moviePoster" style={imgStyle} src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`}/>
                <p style ={titleStyle}className="title">{this.props.data.title}</p>
                <p className="overview" style={overviewStyle}>{this.props.data.overview}</p>
                
            </div>
        )
    }
}

export default Poster;
