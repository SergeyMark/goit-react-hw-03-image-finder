import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component{
   state = {
      searchText: '',
   }

   handleSearch = (searchText) =>{
    this.setState({ searchText })
   }

   render(){
      return (
      <div>
          <Searchbar handleSearch={this.handleSearch}/>
      </div>
      )
   }
}