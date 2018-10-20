import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, 
    Content, 
    Form, 
    Item, 
    Input, 
    Button, 
    Text, 
    Label, 
    H3,
 } from 'native-base';

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: null,
      password: null
    };    

    this.handleUsername = (username) => {
      this.setState({username: username})
    }

    this.handlePassword = (password) => {
      this.setState({password: password})
    }

    this.handleLogin = () => {
      if(!this.state.username || !this.state.password){
        alert("Username atau Password Tidak Boleh Kosong")
        return null
      }
      this.props.loginProses(this.state.username, this.state.password)
      // Toast.show({
      //   text: 'Login Berhasil',
      //   buttonText: 'Ok'
      // })
      // this.props.navigation.navigate('BiodataList')

    }    
  }

  
  render() {
    
    return (
      <Container>
        <Content>
          <H3 style={styles.margin}>Masuk</H3>
          <Form>
            <Item stackedLabel style={{ marginBottom:20,marginLeft: 15, marginRight: 15 }}>
              <Label style={styles.label}>USERNAME</Label>
              <Input 
                textContentType="username" 
                style={styles.input}
                onChangeText={this.handleUsername} 
              />
            </Item>
            <Item stackedLabel style = {{ marginBottom:20, marginLeft: 15, marginRight: 15 }}>
              <Label style={styles.label}>PASSWORD</Label>
              <Input 
                secureTextEntry={true} 
                style={styles.input}  
                onChangeText={this.handlePassword}
              />
            </Item>

            <Button 
              onPress={()=> this.handleLogin()}
              style={ styles.button } full>
                <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
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

export default FormComponent;
