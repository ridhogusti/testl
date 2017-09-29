import React, { Component } from 'react';
import { Container, Content, Text, Thumbnail, Button } from 'native-base';

function Home(props) {
    return (
        <Container style={{ justifyContent: "center", alignSelf: "center" }}>
            <Content>
                <Text style={nbStyles.subtitle}>
                    Welcome to Mobile Legends
                </Text>
                <Text style={nbStyles.subtitle}>
                    Heroes Dictionary
                </Text>
                <Text style={nbStyles.subtitle}>
                    Start Exploring/Creating
                </Text>
                <Text style={nbStyles.subtitle}>
                    Your Favourites Heroes
                </Text>

               <Button 
               onPress={() => props.navigator.switchToTab({
                   tabIndex: 1
               })}
               block style={nbStyles.btn}>
                   <Text>
                       Start
                   </Text>
               </Button> 
            </Content>
        </Container>
    )
}

export default Home;

const nbStyles = {
    subtitle: {
        textAlign: 'center',
        color: '#ACD2FA'
    },
    btn: {
        marginTop: 15
    }
}