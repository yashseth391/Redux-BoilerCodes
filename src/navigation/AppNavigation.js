//Currently not in use

import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ModalTester = () => {
  const [openModal, setOpenModal] = useState(false);

  const renderModal = () => (
    <Modal
      visible={openModal}
      animationType="slide"
      onRequestClose={() => setOpenModal(false)}
      transparent={true}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text>Modal is open</Text>
          <Button title="Close Modal" onPress={() => setOpenModal(false)} />
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={{ marginTop: 50 }}>
      <Button title="Open Modal" onPress={() => setOpenModal(true)} />
      {renderModal()}
    </View>
  );
};

export default ModalTester;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end', // Align items to the bottom
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContainer: {
    width: '50%', // 50% of screen width
    height: '60%', // 60% of screen height
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0, // Ensure the modal touches the bottom
  },
});