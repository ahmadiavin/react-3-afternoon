import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';
import { get } from 'https';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     query:'',
  //     postresults: [],
  //   }
  // }
 
  // onChange = e => {
  //   const { value } = e.target;
  //   this.setState({
  //     query: value
  //   });

  //   this.search(value);
  // };
 
  // search = query => {
  //   const url = `https://practiceapi.devmountain.com/api/posts?search=${query}`;
  //   const token = {};
  //   this.token = token;

  //   fetch(url)
  //     .then(results => results.json())
  //     .then(results => {
  //       if (this.token === token) {
  //         this.setState({postresults: results.data });
  //       }
  //     });
  // };

  // componentDidMount() {
  //   this.search("");
  // }

  
  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input
          type="text"
           placeholder="Search Your Feed"
          //  onChange={this.onChange}
           />
             {/* {this.state.postresults.map( posts => (
               <ul key={posts}>
                 <li>{posts}</li>
               </ul>
             ))} */}
          <SearchIcon id="Search__icon" />
        </div>
        
      </section>
    )
  }
}