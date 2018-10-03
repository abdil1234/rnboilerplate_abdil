import React from "react";
import { FlatList, StyleSheet, Alert, Platform } from 'react-native'
import { withNavigation } from 'react-navigation';
import { Container, Header, Title, Left, Icon, Right, View,Button, Body, Content,Text, Card,List , ListItem, H3, Fab, Toast } from "native-base";

class DashboardComponent extends React.Component { 

  handleHapus = (id) =>{
    this.props.actionHapus(id)
    Toast.show({
      text: 'Berhasil Dihapus',
      buttonText: 'Ok'
    })
  }

  handleEdit(id, nama){
    this.props.navigation.navigate('BiodataUbah', {
      id: id,
      nama: nama
    })
  }

  _renderItem = ({item}) => (
    <ListItem>     
      <Left>
        <Text>{item.name}</Text>
      </Left>
      
      <Button  small info onPress = {() => this.handleEdit(item.id, item.name)} >
          <Text>Ubah</Text>
      </Button>
      <Button  small danger onPress = {() => this.handleHapus(item.id)} >
        <Icon name="trash" />
      </Button> 
    </ListItem>
  );

  handleCreate(){
    this.props.navigation.navigate('BiodataCreate')
    
  }

  render() {
    return (
      <Container style={ styles.container }>
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

        <Fab style={{ backgroundColor: "rgb(52, 167, 138)" }} onPress={()=> this.handleCreate()} >
          <Icon name="add" />
        </Fab>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default withNavigation(DashboardComponent);