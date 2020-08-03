import React from 'react';
import './App.css';
import Header from "./component/Header"
import Poster from "./component/Poster"
import Footer from "./component/Footer"


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      result: [],
      searchTerm:'MCU',
  }
    this.apiKey = "170c4a2fb4877bde83ee38f48a0e5b8a"
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    
    
 
  }

  componentDidMount(){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data=>data.json())
    .then(data=>{
        console.log(data)
        let totalPage = data.total_pages
        for (let i = 0; i < totalPage; i++) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${i+1}`)

            .then(test=>test.json())
            .then(test=>{
                this.setState((prevState)=>{
                    return {result:[...prevState.result,...test.results.filter(item => !item.overview == '') ]}
                })

            })

        }
        
      })
    
    
    
   
    
  }

  handleSubmit(event){
    event.preventDefault()
    
    if(!this.state.searchTerm==''){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data=>data.json())
    .then(data=>{
      this.setState((prevState) =>{
        return {"result": [...data.results]}
      }
      
      )
    })
    } 
  }
  handleChange(event){
    this.setState({searchTerm:event.target.value})
    
  }
  

 
    
    



  render(){
    
    
  let mapMovie = this.state.result.map((item)=>{

    return (<Poster data={item} key={item.id}/>) })
    
    let style = {'width':"100vw","display":"flex","flexDirection":"column","alignItems":"center"}
    
    
    return(
      <div className="App" style={style}>
        <Header/>
        <div className ="posterContainer" >
          {mapMovie}
        </div>
        <Footer handleSubmit ={this.handleSubmit} handleChange ={this.handleChange}/>
    </div>
    )
  }
}

export default App;
