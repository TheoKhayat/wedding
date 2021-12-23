import React from 'react';
import Slider from 'react-slick';

const divFromPhoto = (photo) => {
  let url = photo.url,
    sender = photo.sender,
    vw = 31,
    // vh = 91;
    receivedAt = new Date(photo.receivedAt).toLocaleTimeString();
    // urlType = photo.urlType;

    return (
      <div key={'div_' + url}>
        <img
          src={url}
          key={url}
          alt={'alt_' + url}
          style={{
            width: `${vw}vw`,
            height: `${2.71*vw}vh`
          }}
          onLoad={e => {
            let natHeight = e.target.naturalHeight,
              natWidth = e.target.naturalWidth,
              newHeight = null,
              newWidth = null;
            if (natHeight > natWidth) { // portrait
              console.log('portrait', natHeight, natWidth);
              // newWidth = `${vw*(natWidth/natHeight)}vw`;
              // console.log('newWidth:', newWidth);
              // e.target.style.width = newWidth; // natWidth * (currentHeight/natHeight);
            } else { // landscape
              console.log('landscape', natHeight, natWidth);
              newHeight = `${vw*(natHeight/natWidth)}vh`;
              // console.log('newHeight:', newHeight);
              e.target.style.height = newHeight; // natHeight * (currentWidth/natWidth);
            };
          }}
        />
        <div key={'sender_' + sender}>{`${sender} @ ${receivedAt}`}</div>
      </div>
    );
};


class MySlider extends React.Component {

  settings = { // https://react-slick.neostack.com/docs/api/
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 13000,
    autoplayspeed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  interval = null;

  state = {
    photos: null,
    gettingPhotos: true
  };

  getPhotos = () => {
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
    this.interval = setInterval(() => this.getPhotos(), 600000); // 600000 = every 10 mins
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
