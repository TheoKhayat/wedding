import React from 'react';
import Slider from 'react-slick';

const divFromPhoto = (photo) => {
  let url = photo.url,
    sender = photo.sender.slice(photo.sender.length-4),
    msgBody = 'msgBody' in photo ? photo.msgBody : false;
    // receivedAt = new Date(photo.receivedAt * 1000).toString();
    // urlType = photo.urlType;

    return (
      <div key={'div_' + url}>
        <img
          src={url}
          key={url}
          alt={'alt_' + url}
          style={{
            width: '31vw',
            height: '91vh'
          }}
        />
        { msgBody ? <span>{msgBody}</span> : null }
        <div key={'sender_' + sender}>{sender}</div>
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

  state = { photos: null };

  getPhotos = () => {
    console.log('getting photos...');
    if (this.state.photos) { this.setState({photos: null}) };
    fetch('https://y5gfm8ypt6.execute-api.us-east-1.amazonaws.com/default/weddingPhoto')
      .then(response => response.json())
      .then(response => this.setState({photos: response}))
      .catch(error => console.log('e >>', error));
    if (this.interval) { clearInterval(this.interval) };
    this.interval = setInterval(() => this.getPhotos(), 900000); // 900000 = every 15 mins
  };

  componentDidMount(){
    this.getPhotos();
  };

  render() {
    if (!this.state.photos) {
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
