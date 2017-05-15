import React, {Component} from 'react';
import {  ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

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
        return this.state.albums.map(album => 
            <AlbumDetails key={album.id} album={album}/>
        );
    }
    render(){
        console.log(this.state.albums)
        return(
            <ScrollView >
                {this.renderAlbums()}
            </ScrollView>
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