import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

import {
  Container,
  Form,
  Item,
  Input,
  Icon,
  Header,
  Button,
  Title,
  Content,
  Body,
  Text,
  Left,
  Toast
} from 'native-base'

class BiodataUbahComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { name: this.props.nama };

    this.handleNameChange = (name) => {
      this.setState({name: name})
    }
    
    this.handleCreate = () => {
      
      this.props.onButtonPress(this.props.id, this.state.name)
      Toast.show({
        text: 'Berhasil DiUbah',
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
            <Title style={{ color: "black" }}>Ubah Biodata</Title>
          </Body>
        </Header>
        <Content padder>
          <Form>
            <Item>
              <Input 
                placeholder={this.props.nama}
                onChangeText={this.handleNameChange}
              />
            </Item>
            
            <Button
              onPress={()=> this.handleCreate()}
              style={{backgroundColor: "rgb(52, 167, 138)"}} full>
                <Text>Ubah</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

export default withNavigation(BiodataUbahComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})
