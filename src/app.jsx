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

    // http://stackoverflow.com/questions/36683770/react-how-to-get-the-value-of-an-input-field
    const handleSearch = (e) => {
      this.setState({ filter: e.target.value });
    }

    return (
      <div className="main-container">
        <div className="search-container">
          <img className="search-icon" src={ SearchIcon } />
          <input
            placeholder="Search"
            className="search-bar"
            onChange={handleSearch}
            value={this.state.filter}
          />
        </div>
        <Map
          {...this.state}
        />
      </div>
    )
  }
}
