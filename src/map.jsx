import React from 'react';

export default class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markers: [],
    }
  }

  /** When should this component update? When what changes? **/
  shouldComponentUpdate(nextProps, nextState) {
  
  }

  /** Okay, the component updated! What should we do to the markers now? **/
  componentDidUpdate(prevProps, prevState) {

  }

  componentDidMount() {
    // helper for formatting marker descriptions
    String.prototype.format = function() {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
        ;
      });
    };

    /**
    Helper function to async load a script

    @params
    src, the source of the external scripts
    callback, the function that should executed after the script loads
    **/
    function asyncLoad(src, callback) {

    }

    const loadMap = () => {
      // Initialize an array to store the markers in, this will be kept in the component state
      const markers = [];
      // Grab the data passed into the component by its parent
      const data = this.props.data;

      const berkeley = {lat: 37.8709987, lng: -122.2680837};
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: berkeley,
        mapTypeControl: false
      });

      // creating Google Maps markers are storing them in the state of the component
      for (let item of data) {
        const desc = "<div class='info-container'><p class='title'>{0}</p><br/><p class='desc'>{1}</p></div>".format(item.name, item.string);
        const infowindow = new google.maps.InfoWindow({
          content: desc,
        });
        const marker = new google.maps.Marker({
          position: item.position,
          map: map
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
        const markerData = item;
        markerData["marker"] = marker;
        markers.push(markerData);
      }
      this.setState({ markers });
    }

    asyncLoad('https://maps.googleapis.com/maps/api/js?key=AIzaSyAK-0aO8lrEis8_DuFJj8EevofQjhOh9Oc', loadMap);
  }

  render() {
    return (
      <div id="map"></div>
    )
  }
}
