import React from 'react';
import Slider from 'react-slick';
import * as constants from './constants';

const divFromPhoto = (photo) => {
  const url = photo.url,
    sender = photo.sender,
    urlType = photo.urlType,
    receivedAt = new Date(photo.receivedAt)
      .toLocaleTimeString('en-US', { timeZone: 'America/New_York' }),
    slideStyle = {
      width: '31vw',
      height: 'auto',
      maxWidth: '31vw',
      maxHeight: '91vh',
      marginTop: '50vh',
      transform: 'translate3d(0, -50%, 0)'
    }, textStyle = {
      textAlign: 'center',
      fontSize: '24px'
    };

    return (
      <div key={'div_' + url}>
        <div key={'sender_' + sender} style={textStyle}>
          {<b>{sender}</b>}{` @ ${receivedAt}`}
        </div>
        { urlType.startsWith('image/') ?
          <img
            src={url}
            key={url}
            alt={'alt_' + url}
            style={slideStyle}
          />
          :
          <video autoPlay muted style={slideStyle}>
              <source src={url} type={urlType} />
          </video>
        }
      </div>
    );
};


class MySlider extends React.Component {

  urlParams = new URLSearchParams(window.location.search);
  refresh = this.urlParams.has('refresh') ? this.urlParams.get('refresh') : 300; // refresh mins
  occasion = this.urlParams.has('occasion') ? this.urlParams.get('occasion') : 'khayat-motz';

  interval = null;

  state = {
    photos: null,
    gettingPhotos: true
  };

  getPhotos = () => {

    if (!this.state.gettingPhotos) { this.setState({gettingPhotos: true}) };
    fetch(constants.BASE_URL + '?occasion=' + this.occasion)
      .then(response => response.json())
      .then(response => this.setState({
        photos: response,
        gettingPhotos: false
      }))
      .catch(error => console.log('error >>', error));
    if (this.interval) { clearInterval(this.interval) };
    this.interval = setInterval(() => this.getPhotos(), this.refresh*60*1000);
  };

  componentDidMount(){
    this.getPhotos();
  };

  render() {
    if (!this.state.photos || this.state.gettingPhotos) {
      return <p>Getting photos...</p>
    } else {
      return (
        <Slider {...constants.SETTINGS}>
          { this.state.photos.map(photo => divFromPhoto(photo)) }
        </Slider>
      );
    }; 
  };

};


function App() {
  return <MySlider />
};

export default App;
