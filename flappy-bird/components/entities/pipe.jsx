import { View } from 'react-native';

export default function Pipe({
  height,
  width = 20,
  left,
  gap = 60,
  random,
}) {
  return (
    <>
      <View style={{
        position: 'absolute',
        backgroundColor: 'blue',
        width: width,
        height: height + random,
        left: left,
        top: 0,
      }}>
      </View>
      <View style={{
        position: 'absolute',
        backgroundColor: 'blue',
        width: width,
        height: 250 - (height + random) - gap,
        left: left,
        top: 0 + (height + random) + gap
      }}>
      </View>
    </>
  );
};
