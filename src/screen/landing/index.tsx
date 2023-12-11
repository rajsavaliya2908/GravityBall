import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ControlScreenProps} from '../../types/controlscreen';
import styles from './styles';
import {LandingScreenProps} from '../../types/landingscreen';
import Strings from '../../utils/Strings';
import appRoutes from '../../router/routes';

const LandingScreen = (props: LandingScreenProps) => {
  const {navigation} = props;
  useEffect(() => {
    handleNavigation();
  }, []);

  const handleNavigation = () => {
    setTimeout(() => {
      navigation.replace(appRoutes.Control);
    }, 1500);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Strings.GravityBall}</Text>
    </View>
  );
};

export default LandingScreen;
