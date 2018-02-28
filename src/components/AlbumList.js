import React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends React.Component {
  state = {albums: []};

  componentWillMount() {
    fetch("https://rallycoding.herokuapp.com/api/music_albums")
      .then((response) => response.json())
      .then((response) => this.setState({albums: response}))
  }

  renderAlbums() {
    return this.state.albums.map((album, index) => <AlbumDetail key={index} album={album}/>)
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

});