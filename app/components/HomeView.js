import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Header, Left, Body, Title, Button, Icon, Right,
  Card, CardItem, Thumbnail, Text,
} from 'native-base';
import { SharedElementTransition } from 'react-native-navigation';
import * as Animatable from 'react-native-animatable';

const SHOW_DURATION = 4000;
const HIDE_DURATION = 300;

class HomeView extends Component {
    static navigatorStyle = {
      navBarHidden: true,
      tabBarHidden: true,
    }

    constructor(props) {
      super(props);
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
      this.state = {
        animationType: 'fadeInRight',
        animationDuration: SHOW_DURATION,
      };
    }

    onNavigatorEvent(event) {
      if (event.id === 'backPress') {
        this.setState({
          animationType: 'fadeOutRight',
          animationDuration: HIDE_DURATION,
        });
        this.props.navigator.pop();
      }
    }
    _header() {
      return (
        <Header>
          <Left>
            <Button
              onPress={() => this.props.navigator.pop()}
              transparent
            >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Home Detail</Title>
          </Body>
          <Right />
        </Header>
      );
    }
    render() {
      const { berita } = this.props;
      return (
        <Container>
          {this._header()}
          <Content>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Text>{this.props.sharedImageId}</Text>
                  <SharedElementTransition
                    style={{ position: 'absolute' }}
                    sharedElementId={this.props.sharedImageId}
                    showDuration={SHOW_DURATION}
                    hideDuration={HIDE_DURATION}
                    animateClipBounds
                    showInterpolation={
                      {
                        type: 'linear',
                        easing: 'FastOutSlowIn',
                      }
                    }
                    hideInterpolation={
                      {
                        type: 'linear',
                        easing: 'FastOutSlowIn',
                      }
                    }
                  >
                    <Thumbnail source={{ uri: `http://pantausiswa.xyz/uploads/${berita.image}` }} />
                  </SharedElementTransition>
                  <Animatable.View
                    duration={this.state.animationDuration}
                    animation={this.state.animationType}
                    useNativeDriver
                  >
                    <Body>
                      <Text>NativeBase</Text>
                      <Text note>April 15, 2016</Text>
                    </Body>
                  </Animatable.View>
                  
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image 
                    source={{ uri: `http://pantausiswa.xyz/uploads/${berita.image}` }} 
                    style={{ height: 200, width: 200, flex: 1, justifyContent: 'center' }}
                  />
                  <Text>
                    {berita.content}
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{ color: '#87838B' }}>
                    <Icon name="logo-github" />
                    <Text>1,926 bintang</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          </Content>
        </Container>
      );
    }
}

export default HomeView;
