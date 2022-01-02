import React from 'react';
import Slider from 'react-slick';

const divFromPhoto = (photo) => {
  const url = photo.url,
    sender = photo.sender,
    receivedAt = new Date(photo.receivedAt).toLocaleTimeString(),
    // urlType = photo.urlType;
    imgStyle = {
      backgroundImage: `url(${photo.url})`,
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',

      display: 'inline-block',
      width: '31vw',
      height: 'auto',
      maxWidth: '31vw',
      minHeight: '70vh',
      maxHeight: '91vh',
      marginTop: '50vh',
      transform: 'translate3d(0, -50%, 0)',
    }, textStyle = {
      textAlign: 'center',
      fontSize: '20px',
    };

  return (
    <div key={'div_' + url} >

      <div
        key={url}
        style={imgStyle}>
      </div>
      <div key={'sender_' + sender} style={textStyle}>
        {<b>{sender}</b>}{` @ ${receivedAt}`}
      </div>

      {/* <img
          src={url}
          key={url}
          alt={'alt_' + url}
          style={imgStyle}
        />
        <div key={'sender_' + sender} style={textStyle}>
          {<b>{sender}</b>}{` @ ${receivedAt}`}
        </div> */}

    </div>
  );
};


class MySlider extends React.Component {

  settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 13000,
    autoplaySpeed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  interval = null;

  state = {
    photos: null,
    gettingPhotos: true
  };

  getPhotos = () => {
    console.log('getting photos...');
    if (!this.state.gettingPhotos) { this.setState({ gettingPhotos: true }) };
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

  componentDidMount() {
    this.getPhotos();
  };

  render() {
    if (!this.state.photos || this.state.gettingPhotos) {
      return <p>Getting photos...</p>
    } else {
      return (
        <div >
          <Slider {...this.settings}>
            {this.state.photos.map(photo => divFromPhoto(photo))}
          </Slider>
        </div>
      );
    };
  };

};


function App() {
  return <MySlider />
};

export default App;
