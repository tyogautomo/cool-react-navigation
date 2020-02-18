import { Dimensions } from 'react-native';

const deviceWindow = Dimensions.get('window');

const constant = {
  DIMENSIONS: {
    DEVICE_WIDTH: deviceWindow.width,
    DEVICE_HEIGHT: deviceWindow.height
  }
}

export { constant };
