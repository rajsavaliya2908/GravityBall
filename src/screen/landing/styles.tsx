import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';
import {fontBold, moderateScale} from '../../utils/StyleConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.off_white,
    fontFamily: fontBold,
    fontSize: moderateScale(50),
  },
});

export default styles;
