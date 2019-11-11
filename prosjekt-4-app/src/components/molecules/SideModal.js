import React, { useState } from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native';

const SideModal = () => {

    const [ visibleModal, setVisibleModal ] = useState(false);

    const visibleModalHandler = (visibility) => {
        setVisibleModal(visibility);
      };

        return (
        <View style={{marginTop: 22}}>
             <Modal
                animationType="fade"
                transparent={true}
                visible={visibleModal}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.sideModal}>
                    <View>
                        <TouchableHighlight style={styles.button}
                            onPress={() => {
                            visibleModalHandler(false);
                            }}>
                        <Text>Apply filter</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

        {/* <TouchableHighlight style={styles.button}
          onPress={() => {
            visibleModalHandler(true);
            }}>
          <Text>Filter result</Text>
        </TouchableHighlight> */}
      </View>
    );
  }

  const styles = StyleSheet.create ({
      sideModal: {
        marginRight: 150,
        backgroundColor: 'gray',
        height: '100%'
      },
      button: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'orange',
        width: 100,
        margin: 20,
      },
  })

export default SideModal;