import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, 
    Header, 
    Content, 
    Form, 
    Item, 
    Input, 
    Button, 
    Text, 
    Label, 
    Left,
    H3,
    Body,
    Title
 } from 'native-base';

class FormComponent extends Component {
  render() {
    return (
      <Container>
        <Content>
          <H3 style={styles.margin}>Masuk</H3>
          <Form>
            <Item stackedLabel style={{ marginBottom:20,marginLeft: 15, marginRight: 15 }}>
              <Label style={styles.label}>USERNAME</Label>
              <Input textContentType="username" style={styles.input} />
            </Item>
            <Item stackedLabel style = {{ marginBottom:20, marginLeft: 15, marginRight: 15 }}>
              <Label style={styles.label}>PASSWORD</Label>
              <Input secureTextEntry={true} style={styles.input}  />
            </Item>

            <Button 
              onPress={()=> alert("Login")}
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
