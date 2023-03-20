import { StyleSheet, Text, Pressable } from 'react-native';


export default function Button({ onPress, text }) {    
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
  container: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ef6724',
    borderRadius: 42,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
