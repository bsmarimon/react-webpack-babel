import React from 'react';
import '../styles/index.scss';
import Map from './map.jsx';
import data from './data/members';
import SearchIcon from './assets/search-blue.png';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data.members,
      filter: '',
    };
  }

  render() {
    const members = this.state.members;

    /** Fill in this function body and modify the input below to make it stateful **/
    const handleSearch = () => {

    }

    return (
      <div className="main-container">
        <div className="search-container">
          <img className="search-icon" src={ SearchIcon } />
          <input
            placeholder="Search"
            className="search-bar"
            onChange={handleSearch}
          />
        </div>
        <Map
          {...this.state}
        />
      </div>
    )
  }
}
