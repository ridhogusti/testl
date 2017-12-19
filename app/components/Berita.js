import React, { Component } from 'react';
import { Image, TouchableOpacity, Dimensions, Animated, View,
  StyleSheet,
} from 'react-native';
import { CardItem, Left, Thumbnail, Body, Text, Button, Icon, Card } from 'native-base';
import ReadMore from 'react-native-read-more-text';

const styles = StyleSheet.create({
  
  button: {
    backgroundColor: '#333',
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
  },
});

class Berita extends Component {
  // _renderRevealedFooter = (handlePress) => (
  //   <RegularText style={{ color: Colors.tintColor, marginTop: 5 }} onPress={handlePress}>
  //       Show less
  //   </RegularText>
  // )

  // _handleTextReady = () => {
  //   // ...
  // }

  _renderTruncatedFooter = (handlePress) => (
    <Button 
      bordered
      success
      block
      onPress={handlePress}
      // style={{ alignSelf: 'center' }}
    >
      <Text>Baca lagi ...</Text>
    </Button>
    
  )
  render() {
    const { berita, navigator } = this.props;
    return (

      <TouchableOpacity
        onPress={() => navigator.push({
          screen: 'push.HomeView',
          sharedElements: [`SET${berita.id}`],
          animated: true,
          overrideBackPress: true,
          passProps: {
            berita,
            sharedImageId: `SET${berita.id}`,
            list: 'matematika',
          },
        })}
      >
        <Card
          style={{ flex: 0 }}
        >
          <CardItem>
            <Body>
              <Image 
                source={{ uri: `http://pantausiswa.xyz/uploads/${berita.image}` }} 
                style={{ alignSelf: 'center', height: 200, width: Dimensions.get('window').width - 30, flex: 1, justifyContent: 'center', alignItems: 'center' }} 
              />
              
              <ReadMore
                numberOfLines={2}
                renderTruncatedFooter={this._renderTruncatedFooter}
                renderRevealedFooter={this._renderRevealedFooter}
                onReady={this._handleTextReady}
              >
                <Text>
                  {berita.content}
                </Text>
              </ReadMore>
          
            </Body>
          </CardItem>
          
        </Card> 

      </TouchableOpacity> 
    );
  }
}

export default Berita;

