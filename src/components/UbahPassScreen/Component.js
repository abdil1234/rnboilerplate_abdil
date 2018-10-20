import React, { Component } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import { withNavigation } from 'react-navigation'

import {
  Container,
  Form,
  Item,
  Input,
  Label,
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
    this.state = { 
      passwordLama: '',
      passwordBaru: '',
    };

    this.handlePasswordLama = (passwordLama) => {
      this.setState({passwordLama: passwordLama})
    }

    this.handlePasswordBaru = (passwordBaru) => {
      this.setState({passwordBaru: passwordBaru})
    }

    
    this.handleUbahPassword = () => {
      
      this.props.onButtonPress(this.state.passwordLama, this.state.passwordBaru)        
    }
  }

  render() {
    return (
      <Container style={styles.container} >
        <Header style={{ backgroundColor: "white" }} androidStatusBarColor='#000'>   
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={{color:"black"}} name="arrow-back" />
            </Button>
          </Left>       
          <Body>
            <Title style={{ color: "black" }}>{this.props.navigation.getParam('title', null)}</Title>
          </Body>
        </Header>
        <Content padder>
          <Form>
            <Item stackedLabel style = {{ marginBottom:20, marginLeft: 15, marginRight: 15 }}>
              <Label style={styles.label}>PASSWORD LAMA</Label>
              <Input 
                style={styles.input} 
                secureTextEntry={true}
                onChangeText={this.handlePasswordLama}
              />
            </Item>

            <Item stackedLabel style = {{ marginBottom:20, marginLeft: 15, marginRight: 15 }}>
              <Label style={styles.label}>PASSWORD BARU</Label>
              <Input 
                style={styles.input}
                secureTextEntry={true}
                onChangeText={this.handlePasswordBaru}
              />
            </Item>
            
            <Button
              onPress={()=> this.handleUbahPassword()}
              style={styles.button} full>
                <Text>Ubah</Text>
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
  },
  button: {
    backgroundColor: "rgb(52, 167, 138)",
    margin: 15
  },
  margin: {       
      margin: 15,
      marginBottom:30
  },
  label:{
      fontSize:13,
      color:"black"
  },
  input:{
      borderBottomWidth:1,        
      borderBottomColor:"#f2f2f2",
      paddingBottom:0
  }
});

