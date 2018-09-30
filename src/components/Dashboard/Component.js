import React from "react";
import { FlatList } from 'react-native'

import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card,List , ListItem, H3 } from "native-base";

export default class DashboardComponent extends React.Component { 

  _renderItem = ({item}) => (
    <ListItem>
      <Text> {item.name} </Text>
    </ListItem>
  );

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
          
          <Card transparent>
            <H3>List Biodata</H3>
          </Card>

          <Card>
            <List>
              <FlatList
                data={this.props.biodata}
                keyExtractor={(item, index) => item.name}
                renderItem={this._renderItem}
              />
            </List>
          </Card>
          
        </Content>

        <Fab onPress={()=> this.handleCreate()} >
          <Icon name="add" />
        </Fab>

      </Container>
    );
  }
}