import { Component } from "react";
import "./searchbox.css"
class Searchbox extends Component{
    render(){
         
    return (
        <input 
        className='search-box' 
        type="search" 
        placeholder={this.props.placeholder} 
        onChange={this.props.onSearchHandler}/>
    )
}}
export default Searchbox;