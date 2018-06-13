import React, { Component } from 'react';
import './Search.css';
// import React router

class Search extends Component {
  render() {
	 return (
	 	<div>
		 	<div className="row">
				<div className="inputSection col">
					<span className="fas fa-search"></span>
					<input type="text" id="searchInput" placeholder="Search users"/>
				</div>
				<div className="resultsSection">
					
				</div>
			</div>
		</div>
	 );
  }
}

export default Search;
