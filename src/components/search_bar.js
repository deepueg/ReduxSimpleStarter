
import React, { Component } from 'react'

//Component created using a function
// const SearchBar = () => {
//   return <input/>; //JSX -> ES5  would be -> React.createElement()
// }

//Component can be created by extending an ES6 class as well (a.k.a) Class based component)

class SearchBar extends Component {
  render() {
    return <input />
  }
}

export default SearchBar;
