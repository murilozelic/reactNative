import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({host: '172.16.12.220'})
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
