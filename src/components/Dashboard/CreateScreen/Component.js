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

class BiodataCreateComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { name: ''};

    this.handleNameChange = (name) => {
      this.setState({name: name})
    }

    this.handlePasswordChange = (password) => {
      this.setState({password: password})
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
          <Body>
            <Title style={{ color: "black" }}>Tambah Biodata</Title>
          </Body>
        </Header>
        <Form>
          <Item>
            <Input 
              placeholder="Name" 
              onChangeText={this.handleNameChange}
            />
          </Item>
          
          <Button
            onPress={()=> this.handleCreate()}
            color= "rgb(52, 167, 138)"
            title="Tambah" />
        </Form>
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
