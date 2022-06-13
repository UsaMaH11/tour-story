import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
// import {
//   responsiveHeight,
//   responsiveWidth,
//   responsiveFontSize,
//   responsiveScreenHeight
// } from 'react-native-responsive-dimensions';

const scale = (size: number) => (width / 375) * size;
const scaleHeight = (size: number) => (height / 667) * size;
const heightScale = (size: number) => size + (scaleHeight(size) - size);
const widthScale = (size: number) => size + (scale(size) - size);
const widthScaleSub = (size: number) => width - resize.widthScale(size);
const square = (size: number) =>
  height < width
    ? size + (scaleHeight(size) - size)
    : size + (scale(size) - size);
const resize = {
  width: width,
  height: height,
  heightScale: (size: number) => heightScale(size),
  widthScale: (size: number) => widthScale(size),
  square: (size: number) => square(size),
  widthScaleSub: (size: number) => width - resize.widthScale(size),
};
export {
  // responsiveHeight,
  // responsiveWidth,
  // responsiveFontSize,
  resize,
  heightScale,
  widthScale,
  widthScaleSub,
  square,
  width,
  height,
};
