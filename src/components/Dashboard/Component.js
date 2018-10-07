import React from "react";
import { FlatList, StyleSheet, ListView } from 'react-native'
import { withNavigation } from 'react-navigation';
import { Container, Header, Title, Left, Icon, Right, CardItem,Button, Body, Content,Text, Card,List , ListItem, H3, Fab, Toast } from "native-base";

class DashboardComponent extends React.Component { 

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });  

    this.handleEdit = this.handleEdit.bind(this);
    this.handleHapus = this.handleHapus.bind(this);
    this._renderItem = this._renderItem.bind(this);

  }

  handleHapus = (id, secId, rowId, rowMap) =>{

    rowMap[`${secId}${rowId}`].props.closeRow();    
    this.props.actionHapus(id);

    Toast.show({
      text: 'Berhasil Dihapus',
      buttonText: 'Ok'
    })
  }

  handleEdit = (data, secId, rowId, rowMap) => {

    rowMap[`${secId}${rowId}`].props.closeRow(); 

    this.props.navigation.navigate('BiodataUbah', {
      id: data.id,
      nama: data.name
    })
  }

  _renderItem = item => (
    <Card>
      <CardItem>
        <Left>
          <Text>{item.name}</Text>
        </Left>
        {/* <Button  small style={{ backgroundColor: "#007762" }} onPress = {() => this.handleEdit(item.id, item.name)} >
            <Text>Ubah</Text>
        </Button>
        <Button  small style={{ backgroundColor: "#007762" }} onPress = {() => this.handleHapus(item.id)} >
          <Icon name="trash" />
        </Button>  */}
      </CardItem>
    </Card>
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

          <List
            leftOpenValue={75}
            rightOpenValue={-75}
            dataSource={this.ds.cloneWithRows(this.props.biodata)}
            renderRow={ (item) => this._renderItem(item) }
            renderLeftHiddenRow={ (data, secId, rowId, rowMap) =>              
              <Button style={{ margin: 5 }} success onPress={ () => this.handleEdit(data, secId, rowId, rowMap) }>
                <Icon active name="information-circle" />
              </Button>}

            renderRightHiddenRow={ (data, secId, rowId, rowMap) =>
              <Button style={{ margin: 5 }} danger onPress={() => this.handleHapus(data.id, secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
          />
          
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