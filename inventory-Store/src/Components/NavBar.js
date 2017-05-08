import React, {Component} from 'react';
import { StyleSheet,Text, View } from 'react-native';


class NavBar extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>Albums</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color:'#ffffff',
    
  },
  container: {
    // flex: 1,
    height: 80,
    paddingTop: 20,
    backgroundColor: '#4caf50',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative',
  },
});
export default NavBar;