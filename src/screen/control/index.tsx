import React from 'react';
import {Image, Pressable, SafeAreaView, Text} from 'react-native';
import {ControlScreenProps} from '../../types/controlscreen';
import styles from './styles';
import Images from '../../assets/images';
import Strings from '../../utils/Strings';
import appRoutes from '../../router/routes';

const ControlScreen = (props: ControlScreenProps) => {
  const {navigation} = props;

  const handlePlayBtn = () => {
    navigation.navigate(appRoutes.Dashboard);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>{Strings.Welcome}</Text>
      <Image style={styles.ball} source={Images.ic_ball} />

      <Pressable style={styles.playContainer} onPress={handlePlayBtn}>
        <Image style={styles.play} source={Images.ic_play} />
      </Pressable>
      <Text style={styles.startGame}>{Strings.StartGame}</Text>
    </SafeAreaView>
  );
};

export default ControlScreen;
