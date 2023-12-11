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
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: horizontalScale(320),
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(15),
  },
  scorecard: {
    marginVertical: verticalScale(5),
    fontSize: moderateScale(30),
    fontFamily: fontBold,
    alignSelf: 'center',
    color: Colors.off_black,
  },
  scoreContainer: {
    marginVertical: verticalScale(10),
  },
  scoreTitle: {
    fontSize: moderateScale(22),
    fontFamily: fontBold,
    alignSelf: 'center',
    color: Colors.primary,
  },
  score: {
    fontSize: moderateScale(22),
    fontFamily: fontRegular,
    alignSelf: 'center',
    color: Colors.off_black,
    marginVertical: verticalScale(5),
  },
  goBackBtn: {
    backgroundColor: Colors.off_white,
  },
  goBackTxt: {
    color: Colors.primary,
  },
});

export default styles;
