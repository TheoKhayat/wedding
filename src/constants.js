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
  maxHeight: '78vh',
  marginTop: '32vh',
  transform: 'translate3d(0, -39%, 0)'
};

export const HEADER_STYLE = {
  backgroundColor: '#87786B',
  color: 'white',
  fontFamily: 'El Messiri',
  fontSize: '5vh',
  fontStyle: 'italic',
  textAlign: 'left',
  paddingLeft: '3vw',
  paddingTop: '1vw',
  width: '100vw',
  height: '8vh'
};

export const TEXT_STYLE = {
  textAlign: 'center',
  fontFamily: 'El Messiri',
  fontSize: '22px',
  fontStyle: 'italic',
  color: 'white'
};

export const GALLERY_STYLE = {
  justifyContent: 'center',
  textAlign: 'center',
  overflowX: 'auto',
  marginBottom: '8px'
};

export const GALLERY_IMG_STYLE = {
  marginTop: '3px',
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '2px'
};

export const TO_UPLOADER_STYLE = {
  fontSize: '27px'
};

export const TIMEZONES = {
  est: 'America/New_York',
  cst: 'America/Chicago',
  mst: 'US/Arizona',
  pst: 'America/Los_Angeles',
  hst: 'Pacific/Honolulu'
};
