import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

class App extends Component {
  state = { pesan: 'Al Wacana' }

  componentDidMount() {
    this.setState({ pesan: 'Anti Wacana Club' });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'ALBUMS'} />
        <AlbumList />
      </View>
    );
  }
}

export default App;
