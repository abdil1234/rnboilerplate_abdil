import React, { Component } from 'react'
import { Button, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

import {
  Container,
  Form,
  Item,
  Input,
  Header,
  Title,
  Body,
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
          <Body>
            <Title style={{ color: "black" }}>Ubah Biodata</Title>
          </Body>
        </Header>
        <Form>
          <Item>
            <Input 
              placeholder={this.props.nama}
              onChangeText={this.handleNameChange}
            />
          </Item>
          
          <Button
            onPress={()=> this.handleCreate()}
            color= "rgb(52, 167, 138)"
            title="Ubah " />
        </Form>
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
