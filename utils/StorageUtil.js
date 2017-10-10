import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

var storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,   
  // defaultExpires: 1000 * 3600 * 24,
  defaultExpires: null,
  enableCache: true
})  

global.storage = storage;
