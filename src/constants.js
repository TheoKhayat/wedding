export const BASE_URL = 'https://y5gfm8ypt6.execute-api.us-east-1.amazonaws.com/default/weddingPhoto';

export const SLIDE_SETTINGS = { // https://react-slick.neostack.com/docs/api/
  autoplay: true,
  autoplayspeed: 1500,
  dots: false,
  infinite: true,
  pauseOnHover: false,
  // slidesToScroll: 1,
  slidesToShow: 3,
  speed: 5500,
  swipeToSlide: true
};

export const SLIDE_STYLE = {
  borderRadius: 10,
  width: '31vw',
  height: 'auto',
  maxWidth: '31vw',
  maxHeight: '75vh',
  marginTop: '32vh',
  transform: 'translate3d(0, -32%, 0)'
};

export const HEADER_STYLE = {
  backgroundColor: '#C6B8AC',
  color: 'white',
  fontFamily: 'El Messiri',
  fontSize: '31px',
  fontStyle: 'italic',
  textAlign: 'left',
  paddingLeft: '3vw',
  width: '100vw'
};

export const TEXT_STYLE = {
  textAlign: 'center',
  fontFamily: 'El Messiri',
  fontSize: '22px',
  fontStyle: 'italic'
};

export const TIMEZONES = {
  est: 'America/New_York',
  cst: 'America/Chicago',
  mst: 'US/Arizona',
  pst: 'America/Los_Angeles'
};
