import { StyleSheet, View } from 'react-native';

export default function Bird({ position }) {
  return (
    <View style={{
        height: 20,
        width: 20,
        backgroundColor: 'red',
        position: 'absolute',
        top: position.y
      }}>
    </View>
  );
}
