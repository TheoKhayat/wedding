import React from 'react';
import Slider from 'react-slick';

const divFromPhoto = (photo) => {
  let url = photo.url,
    sender = photo.sender,
    receivedAt = new Date(photo.receivedAt).toLocaleTimeString();
    // urlType = photo.urlType;
    const imgStyle = {
      width: '31vw',
      height: 'auto',
      maxWidth: '31vw',
      maxHeight: '91vh'
    };

    return (
      <div
        key={'div_' + url}
        style={{contentAlign:'center'}} // Logan halp here!!! <3
      >
        <img
          src={url}
          key={url}
          alt={'alt_' + url}
          style={imgStyle}
        />
        <div
          key={'sender_' + sender}
          style={{
            textAlign: 'center',
            fontSize: '24px'
          }}>
            {<b>{sender}</b>}{` @ ${receivedAt}`}
        </div>
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
