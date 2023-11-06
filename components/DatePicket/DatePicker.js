import DateTimePicker from 'react-native-ui-datepicker';
import { StyleSheet, View, TouchableHighlight, Modal } from 'react-native';
import { useState } from 'react';
import Button from '../Button';
import colors from '../../src/assets/colors';
import { XMarck } from '../../src/assets/icons';

export default function DatePicker(props) {

  const {
    onChange = () => { },
    value
  } = props;

  const [isOpen, setIsOpen] = useState(false)

  if (isOpen) return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
    >
      <View style={styles.calendarPrincipalContainer}>
        <View style={styles.calendarContainer}>
          <TouchableHighlight
            style={styles.closeButton}
            onPress={() => setIsOpen(!isOpen)}
          >
            <XMarck fill='#000' stroke='#000' width='25' height='25' />
          </TouchableHighlight>
          <DateTimePicker
            mode='date'
            locale="es"
            value={value}
            onValueChange={(e) => {
              onChange(e.split(' ')[0])
              setIsOpen(false)
            }}
          />
        </View>
      </View>
    </Modal>
  )

  return (
    <Button
      textStyle={styles.buttonOpenModalText}
      style={styles.buttonOpenModal}
      title={`Cambiar fecha - ${value}`}
      onPress={() => setIsOpen(!isOpen)}
    />
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 99,
    height: '100%',
    width: '100%',
  },
  calendarPrincipalContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    paddingHorizontal: 10
  },
  calendarContainer: {
    paddingHorizontal: 20,
    paddingTop: 50,
    height: '80%',
    backgroundColor: '#fff',
    borderRadius: 5,
    position: 'relative',
  },
  buttonOpenModal: {
    flex: 1,
    backgroundColor: colors.principalColor,
    padding: 10,
    borderRadius: 10
  },
  buttonOpenModalText: {
    color: "#fff",
    fontFamily: "Nunito-Bold",
    textAlign: 'center'
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 2
  },
});