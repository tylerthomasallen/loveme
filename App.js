import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Michelle Skeen PsyD</Text>
        <Image style={styles.image} source={require('./assets/love.jpg')}></Image>
        <Button
          title="Lessons"
          onPress={() => Alert.alert(
            'You pressed the lessons button',
            'You must be ready to learn',
            [
              { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
              { text: 'OK', onPress: this.onDeleteBTN },
            ],
            { cancelable: false }
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },

  image: {
    height: 500,
    width: 300,
    marginBottom: 10
  },

  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
    fontFamily: 'Verdana'
  },


});
