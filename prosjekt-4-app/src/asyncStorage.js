import {AsyncStorage} from 'react-native';

export const storeData = async (data) => {
    try {
      await AsyncStorage.setItem('MclocalData', data);
    } catch (error) {
      // Error saving data
    }
  };