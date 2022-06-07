export const BASE_URL = 'https://y5gfm8ypt6.execute-api.us-east-1.amazonaws.com/default/weddingPhoto';

export const SLIDE_SETTINGS = { // https://react-slick.neostack.com/docs/api/
  autoplay: true,
  dots: false,
  infinite: true,
  speed: 5500,
  autoplayspeed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1
};

export const SLIDE_STYLE = {
  width: '31vw',
  height: 'auto',
  maxWidth: '31vw',
  maxHeight: '91vh',
  marginTop: '50vh',
  transform: 'translate3d(0, -50%, 0)'
};

export const TEXT_STYLE = {
  textAlign: 'center',
  fontSize: '24px'
};

export const TIMEZONES = {
  est: 'America/New_York',
  cst: 'America/Chicago',
  mst: 'US/Arizona',
  pst: 'America/Los_Angeles'
};
