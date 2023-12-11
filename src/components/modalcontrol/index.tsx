import React from 'react';
import {View, Modal, Text} from 'react-native';
import {ModalControlProps} from '../types';
import styles from './styles';
import Strings from '../../utils/Strings';
import Button from '../button';

const ModalControl = ({
  score,
  onRequestClose,
  onGoBackPress,
  onPlayAgainPress,
  isVisible,
}: ModalControlProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onRequestClose}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text style={styles.scorecard}>{Strings.ScoreCard}</Text>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreTitle}>{Strings.Score}</Text>
            <Text style={styles.score}>{score}</Text>
          </View>
          <Button title={Strings.PlayAgain} onPress={onPlayAgainPress} />
          <Button
            title={Strings.GoBack}
            onPress={onGoBackPress}
            buttonStyle={styles.goBackBtn}
            textStyle={styles.goBackTxt}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalControl;
