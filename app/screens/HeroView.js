import React, { Component, PropTypes } from 'react';
import { Container, Content, Text, Header, Left, Right, Body, Icon,
    List, ListItem, Thumbnail
 } from 'native-base';
import { TouchableOpacity } from 'react-native';

class HeroView extends Component {

    static navigatorStyle = {
        navBarHidden: true,
        tabBarHidden: true
    }

    renderHeader() {
        return (
            <Header>
                <Left>
                    <TouchableOpacity onPress={() => this.props.navigator.pop()}>
                        <Icon name='arrow-back' style={{color: '#62AFEF'}} />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Text>Hero Detail</Text>
                </Body>
                <Right></Right>
            </Header>
        )
    }
    render() {
        const {hero} = this.props;

        return (
            <Container>
                {this.renderHeader()}
                <Content>
                    <List>
                        <ListItem>
                            <Thumbnail square size={80} source={{ uri: hero.imageUri}}></Thumbnail>
                            <Body>
                                <Text>{hero.name}</Text>
                                <Text note>{hero.title}</Text>
                            </Body>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>Role</Text>
                        </ListItem>
                        <ListItem>
                            <Text>{hero.role}</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>Speciality</Text>
                        </ListItem>
                        <ListItem>
                            <Text>{hero.speciality}</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>Skills</Text>
                        </ListItem>
                        <ListItem>
                            <Text>...</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

HeroView.propTypes = {
    hero: PropTypes.object.isRequired
};
export default HeroView;