import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';
import {
  fontRegular,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/StyleConfig';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: horizontalScale(200),
    alignSelf: 'center',
    marginVertical: verticalScale(10),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(10),
  },
  title: {
    fontFamily: fontRegular,
    color: Colors.white,
    fontSize: moderateScale(18),
  },
});

export default styles;
