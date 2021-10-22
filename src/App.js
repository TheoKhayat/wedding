import React from 'react';
import Slider from 'react-slick';

const divFromPhoto = (photo) => {
  console.log('photo:', photo);
  let url = photo.url,
    sender = photo.sender.slice(photo.sender.length-4),
    receivedAt = new Date(photo.receivedAt * 1000);
    // urlType = photo.urlType;

    return (
      <div key={'div_' + url}>
        <img
          src={url}
          key={url}
          alt={'alt_' + url}
          style={{
            width: '31vw',
            height: '87vh'
          }}
        />
        <div key={'sender_' + sender}>{'From: ' + sender}</div>
        <div key={'timed_' + receivedAt.toString()}>{receivedAt.toString()}</div>
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

  state = { photos: null };

  componentDidMount(){
    fetch('https://y5gfm8ypt6.execute-api.us-east-1.amazonaws.com/default/weddingPhoto')
      .then(response => response.json())
      .then(response => this.setState({photos: response}))
      .catch(error => console.log('e >>', error));
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
