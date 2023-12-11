import {StyleSheet} from 'react-native';
import {fontBold, height, moderateScale, width} from '../../utils/StyleConfig';
import Colors from '../../utils/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: 'stretch',
  },
  gameContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  score: {
    color: Colors.white,
    fontSize: moderateScale(50),
    textAlign: 'center',
    top: 100,
    fontFamily: fontBold,
  },
});

export default styles;
