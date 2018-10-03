import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

import {
  Container,
  Form,
  Item,
  Input,
  Header,
  Text,
  Title,
  Body,
  Icon,
  Content,
  Left,
  Button,
  Toast
} from 'native-base'

class BiodataCreateComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { name: ''};

    this.handleNameChange = (name) => {
      this.setState({name: name})
    }

    this.handleCreate = () => {
      this.props.onButtonPress(this.state.name)
      Toast.show({
        text: 'Berhasil DiTambah',
        buttonText: 'Ok'
      })
      this.props.navigation.navigate('BiodataList')

    }
  }

  render() {
    return (
      <Container style={styles.container} >
        <Header style={{ backgroundColor: "white" }} androidStatusBarColor='#000'>   
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("BiodataList")}>
              <Icon style={{color:"black"}} name="arrow-back" />
            </Button>
          </Left>       
          <Body>
            <Title style={{ color: "black" }}>Tambah Biodata</Title>
          </Body>
        </Header>
        <Content padder>
          <Form>
            <Item>
              <Input 
                placeholder="Name" 
                onChangeText={this.handleNameChange}
              />
            </Item>
            
            <Button
              onPress={()=> this.handleCreate()}
              style={{backgroundColor: "rgb(52, 167, 138)"}} full>
                <Text>Tambah</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

export default withNavigation(BiodataCreateComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})
