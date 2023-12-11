import React, {useEffect, useRef, useState} from 'react';
import {View, Image, Text} from 'react-native';
import {DashboardScreenProps, GameEngineProps} from '../../types/dashboard';
import styles from './styles';
import {GameEngine} from 'react-native-game-engine';
import entities from '../../components/entities';
import systems from '../../components/systems';
import Images from '../../assets/images';
import ModalControl from '../../components/modalcontrol';
import Sound from 'react-native-sound';

const DashboardScreen = (props: DashboardScreenProps) => {
  const {navigation} = props;
  const [isRun, setIsRun] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [sound, setSound] = useState<Sound>();
  const gameEngineRef = useRef<GameEngineProps>(null);

  const setUpMusic = () => {
    const newSound = new Sound('background.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
      }
      newSound.play();
      setSound(newSound);
    });
  };

  const startMusic = () => {
    sound?.play(() => {});
  };

  const stopMusic = () => {
    sound?.stop(() => {});
  };

  useEffect(() => {
    setUpMusic();
    return () => {
      sound?.release();
    };
  }, []);

  const onEvent = (e: TouchEvent) => {
    if (e.type === 'gameOver') {
      stopMusic();
      setIsRun(false);
      setIsVisible(true);
    } else if (e.type === 'score') {
      setScore(score + 1);
    }
  };

  const handleRequestClose = () => {
    setIsVisible(false);
  };

  const handlePlayAgain = () => {
    setScore(0);
    gameEngineRef.current?.swap(entities());
    setIsVisible(false);
    setTimeout(() => {
      startMusic();
      setIsRun(true);
    }, 500);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image style={styles.background} source={Images.bg_nature} />
      <GameEngine
        ref={gameEngineRef}
        onEvent={onEvent}
        entities={entities()}
        systems={systems}
        running={isRun}
        style={styles.gameContainer}
      />
      {isRun ? <Text style={styles.score}>{score}</Text> : null}
      <ModalControl
        {...{isVisible, score}}
        onRequestClose={handleRequestClose}
        onGoBackPress={handleGoBack}
        onPlayAgainPress={handlePlayAgain}
      />
    </View>
  );
};

export default DashboardScreen;
