import React, { Component } from 'react';
import {
  Container, Content, Text, ListItem, List, Thumbnail, Body,
  Header, Left, Right, Icon, View,
} from 'native-base';
import { TouchableOpacity } from 'react-native';
import Hero from '../components/Hero';

export default class Heroes extends Component {
  constructor() {
    super();
    this.state = {
      heroes: [],
    };
  }
  componentDidMount() {
    this.props.fetchHeroes();
  }

  renderHeader() {
    return (
      <Header>
        <Left />
        <Body>
          <Text>Heroes</Text>
        </Body>
        <Right>
          <TouchableOpacity
            onPress={() => this.props.navigator.push({ screen: 'push.HeroAdd' })}
          >
            <Icon name="add" style={{ color: '#62AFEF' }} />
          </TouchableOpacity>
        </Right>
      </Header>

    );
  }
  render() {
    if (this.props.data.fetching) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
                
      );
    }
    return (
      <Container>
        {this.renderHeader()}

        <Content>
          {/* <Text>{this.props.data}</Text>*/}
          <List>
            {
              this.props.data.heroes.map((hero, key) => <Hero key={key} hero={hero} {...this.props} />)
            }
          </List>
        </Content>
      </Container>
    );
  }
}
