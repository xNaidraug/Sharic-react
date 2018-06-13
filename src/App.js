import React, { Component } from 'react';
import './App.css';
import Main from './components/main/Main';

import TodoForm from './components/Form_add_Song/TodoForm';


class App extends Component {
	render() {
		return (
			<div className="App">
				<Main/>

			</div>
	 );
  }
}

export default App;
