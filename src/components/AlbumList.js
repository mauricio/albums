import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class AlbumList extends React.Component {
  state = {albums: []};

  componentWillMount() {
    fetch("https://rallycoding.herokuapp.com/api/music_albums")
      .then((response) => response.json())
      .then((response) => this.setState({albums: response}))
  }

  render() {
    return (
      <View>
        <Text>Album list!!!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

});