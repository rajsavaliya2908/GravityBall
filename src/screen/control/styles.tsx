import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';
import {
  fontBold,
  fontRegular,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/StyleConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.background,
  },
  ball: {
    width: moderateScale(130),
    height: moderateScale(130),
    resizeMode: 'contain',
    marginTop: verticalScale(100),
    alignSelf: 'center',
  },
  welcome: {
    fontFamily: fontBold,
    color: Colors.black,
    alignSelf: 'center',
    fontSize: moderateScale(35),
    marginVertical: verticalScale(50),
  },
  startGame: {
    fontSize: moderateScale(28),
    fontFamily: fontBold,
    color: Colors.primary,
    alignSelf: 'center',
    marginVertical: verticalScale(20),
  },
  playContainer: {
    marginTop: verticalScale(130),
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(40),
    alignSelf: 'center',
    backgroundColor: Colors.off_white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  play: {
    width: moderateScale(40),
    height: moderateScale(40),
    resizeMode: 'contain',
  },
});

export default styles;
