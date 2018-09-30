import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, ListItem } from "native-base";
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "rgb(52, 167, 138)" }} androidStatusBarColor='#000'>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>DashBoard</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <Text> Hai My app </Text>
          </Card>
        </Content>
      </Container>
    );
  }
}