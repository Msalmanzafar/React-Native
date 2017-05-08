import React, {Component} from 'react';
import { StyleSheet,Text, View } from 'react-native';
import axios from 'axios';

class AlbumsList extends Component{
    state={
        albums:[]
    };

    componentWillMount(){
        axios.get('https://api.github.com/users?since=XXX')
        .then(response => this.setState({albums: response.data}));
        // console.log("Working==========")
    }
    renderAlbums(){
        return this.state.albums.map(albums => <Text>{albums.login}</Text>)
    }
    render(){
        console.log(this.state.albums)
        return(
            <View >
                {this.renderAlbums()}
            </View>
        );
    }
}

// const styles = StyleSheet.create({
//   textStyle: {
//     fontSize: 20,
//     color:'#ffffff',
    
//   },
//   container: {
//     // flex: 1,
//     height: 80,
//     paddingTop: 20,
//     backgroundColor: '#4caf50',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 4},
//     shadowOpacity: 0.3,
//     elevation: 2,
//     position: 'relative',
//   },
// });
export default AlbumsList;