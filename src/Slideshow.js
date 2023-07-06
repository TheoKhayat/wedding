import React from 'react';
import Slider from 'react-slick';
import * as constants from './constants';

const divFromPhoto = (photo, timezone, labels) => {
  const url = photo.url,
    sender = photo.sender,
    urlType = photo.urlType,
    receivedAt = new Date(photo.receivedAt)
      .toLocaleTimeString('en-US', { timeZone: constants.TIMEZONES[timezone], timeStyle: 'short' });

    return (
      <div key={`div_${url}`}>
        { labels && 
          <div key={`sender_${sender}`} style={constants.TEXT_STYLE}>
            {<b>{sender}</b>}{` @ ${receivedAt}`}
          </div>
        }
        { urlType.startsWith('image/') ?
          <img
            src={url}
            key={url}
            alt={`alt_${url}`}
            style={constants.SLIDE_STYLE}
          />
          :
          <video autoPlay muted style={constants.SLIDE_STYLE}>
              <source src={url} type={urlType} />
          </video>
        }
      </div>
    );
};


class Slides extends React.Component {
  urlParams = new URLSearchParams(window.location.search);
  refresh = this.urlParams.has('refresh') ? this.urlParams.get('refresh') : 25; // refresh mins
  occasion = this.urlParams.has('occasion') ? this.urlParams.get('occasion') : null;
  timezone = this.urlParams.has('tz') ? this.urlParams.get('tz') : 'est';
  labels = this.urlParams.has('labels') ? this.urlParams.get('labels') === 'time' : false;

  state = {
    eventTitle: null,
    photos: null,
    gettingPhotos: true
  };

  getPhotos = () => {
    if (!this.state.gettingPhotos) { this.setState({gettingPhotos: true}) };

    fetch(`${constants.BASE_URL}?occasion=${this.occasion}`)
      .then(response => response.json())
      .then(response => this.setState({
        eventTitle: response.title,
        photos: response.photos.reverse(), //  for newest to oldest
        gettingPhotos: false
      }))
      .catch(error => console.log('error >>', error));
  };

  componentDidMount() {
    this.getPhotos();
    window.addEventListener('resize', () => window.location.reload(false));
    setInterval(() => this.getPhotos(), this.refresh*60*1000);
  };

  render() {
    document.title = this.state.eventTitle ? `${this.state.eventTitle} | Captured.Day` : 'Captured.Day';
    if (!this.occasion) {
      return <p>Occasion required. If you need help with this, please contact your event coordinator.</p>
    }
    else if (!this.state.photos || this.state.gettingPhotos) {
      return <p>Getting photos...</p>
    } else {
      return (
        <>
          { this.state.eventTitle &&
            <h2 style={constants.HEADER_STYLE}>{this.state.eventTitle}</h2>
          }
          <Slider {...constants.SLIDE_SETTINGS}>
            { this.state.photos.map(photo => divFromPhoto(photo, this.timezone, this.labels)) }
          </Slider>
        </>
      );
    }; 
  };

};

export default Slides;
