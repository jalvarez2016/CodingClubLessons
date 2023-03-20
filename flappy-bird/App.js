import Button from './components/button/button';
import Bird from './components/entities/bird';
import Pipe from './components/entities/pipe';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const screenWidth = Dimensions.get('screen').width;
  const [score, setScore] = useState(0);
  const [isAlive, setIsAlive] = useState(false);
  const [position, setPosition] = useState({
    y: 230
  });
  const [grav, setGrav] = useState({
    force : .3,
    velocity: .1,
  });
  // pipe properties
  const pipeWidth = 60;
  const pipeHeight = 130
  const gap = 60
  const [pipeLeft, setPipeLeft] = useState(screenWidth - pipeWidth)
  const [pipeRand, setPipeRand] = useState(0)
  let gameTimerInstance;
  let pipeTimerInstance;

  // bird fall logic
  useEffect(() => {
    if (isAlive) { //This runs 20 times every second
      gameTimerInstance = setInterval(() => {

        if (position.y + grav.velocity >= 230) {
          // Player is going to touch the bottom border
          setGrav({
            force: grav.force,
            velocity: .1,
          });
          
          setPosition({
            y: 230,
          });
          setIsAlive(false);
          gameOver();
        } else if (position.y + grav.velocity + grav.force >= 0) {
          // Player is between the top and bottom borders
          setGrav({
            force: grav.force,
            velocity: grav.velocity + grav.force,
          });

          setPosition({
            y: position.y + grav.velocity,
          });
        } else {
          // When the player is above the top border
          setGrav({
            force: grav.force,
            velocity: .1,
          });

          setPosition({
            y: .1,
          });

        }
        
      }, 1000/20); //20 Frames Per Second

      return () => {
         // Keeps the game loop to one
        clearInterval(gameTimerInstance);
      }
    }
  }, [position]);


  // Pipe logic
  useEffect(() => {
    if (isAlive) {
      if (pipeLeft > -60) {
        pipeTimerInstance = setInterval(() => {
          setPipeLeft(pipeLeft - 5);
        }, 1000/20);
        
        return () => {
          clearInterval(pipeTimerInstance);
        }
      } else {
        setScore(score + 1);
        setPipeLeft(screenWidth - pipeWidth)
        setPipeRand( - Math.random() * 100)
      }
    }
    

  }, [pipeLeft, isAlive]);

  // check collision on pipes
  useEffect(() => {
    if (
      (pipeLeft <= 20)
      && 
      ((position.y < (pipeHeight + pipeRand) ||
      position.y + 20 > (pipeRand + pipeHeight + gap))
      )
    ) {
      gameOver()
    }

  })

  function gameOver() {
    clearInterval(gameTimerInstance);
    clearInterval(pipeTimerInstance);
    setIsAlive(false);
    setScore(0);
    setPipeLeft(screenWidth - pipeWidth);
    setPipeRand( - Math.random() * 100);
    setPosition({
      y: 230
    });
  }

  function jump() {
    // Only runs when the jump button is pushed
    if (!isAlive) {
      setIsAlive(true)
    }

    if (position.y <= 0 || position.y + grav.velocity <= 0) {
      setGrav({
        force: grav.force,
        velocity: .1,
      });
      setPosition({
        y: 0,
      });
    } else {
      setGrav({
        force: grav.force,
        velocity: -3,
      });
      setPosition({
        y: position.y + grav.velocity
      });
    }
    

  };

  return (
    <View style={styles.container}>
      <Text>
        Score : {score}
      </Text>
      <View style={{
        borderColor: 'black',
        borderWidth: 1,
        width: screenWidth,
        height: 252,
        marginBottom: '5%'
      }}>
        <Bird position={position}/>
        <View>
          <Pipe
           width={pipeWidth}
           height={pipeHeight}
           gap={gap}
           left={pipeLeft}
           random={pipeRand}
          />
        </View>
      </View>
      <View>
        <Button text="Jump" onPress={jump}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
