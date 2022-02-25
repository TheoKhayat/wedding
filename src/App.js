import React from 'react';
import Slider from 'react-slick';

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

  settings = { // https://react-slick.neostack.com/docs/api/
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 5500,
    autoplayspeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  interval = null;

  state = {
    photos: null,
    gettingPhotos: true
  };

  getPhotos = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const refresh = urlParams.has('refresh') ? urlParams.get('refresh') : 150000000; // 1500000 = every 25 mins
    console.log('getting photos...');
    if (!this.state.gettingPhotos) { this.setState({gettingPhotos: true}) };
    fetch('https://y5gfm8ypt6.execute-api.us-east-1.amazonaws.com/default/weddingPhoto')
      .then(response => response.json())
      .then(response => this.setState({
        photos: response,
        gettingPhotos: false
      }))
      .catch(error => console.log('e >>', error));
    if (this.interval) { clearInterval(this.interval) };
    this.interval = setInterval(() => this.getPhotos(), refresh);
  };

  componentDidMount(){
    this.getPhotos();
  };

  render() {
    if (!this.state.photos || this.state.gettingPhotos) {
      return <p>Getting photos...</p>
    } else {
      return (
        <Slider {...this.settings}>
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
