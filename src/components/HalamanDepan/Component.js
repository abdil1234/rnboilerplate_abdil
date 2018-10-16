import React from "react";
import { StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation';
import { Container, Header, Title, View, Tabs, Tab,Right, TabHeading,Icon, Body, Content,Text, Card,List , ListItem, H3, Fab, Toast } from "native-base";

class HalamanDepanComponent extends React.Component { 

  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <Container style={ styles.container }>
        <Header style={{ backgroundColor: "rgb(52, 167, 138)" }} androidStatusBarColor='#000'>          
          <Body>
            <Title>DashBoard</Title>
          </Body>
          <Right />
        </Header>
        
        <Tabs locked= {true} tabBarPosition="bottom" tabBarUnderlineStyle={{borderBottomColor:"#f2f2f2"}}>
          <Tab 
            heading={ <TabHeading textStyle={{ color: 'red', fontSize: 12 }} style={{backgroundColor: '#f2f2f2', color:"red"}}><Icon name="home" /></TabHeading>}
            tabStyle={{backgroundColor: '#f2f2f2'}}
            textStyle={{ color: 'red', fontSize: 12 }}
            >
            <Content padder>          
              <Card transparent>
                <H3>Selamat Datang </H3>
              </Card>

              <View>
                  <View style={styles.card} />
              </View>
          </Content>
          </Tab>
          <Tab             
            heading={ <TabHeading style={{backgroundColor: '#f2f2f2', color:"red"}}><Icon name="camera" /></TabHeading>}
            tabStyle={{backgroundColor: '#f2f2f2'}}
            >
            
            <Text> Tab 1</Text>
          </Tab>
          <Tab 
            heading={ <TabHeading style={{backgroundColor: '#f2f2f2', color:"red"}}><Icon name="person" /></TabHeading>}
            tabStyle={{backgroundColor: '#f2f2f2'}}
            >
            <Text> Tab 2</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      card: {
        height: 159,
        width: 159,
        backgroundColor: '#fff',
        borderRadius: 7,
        elevation: 2
      },
});

export default withNavigation(HalamanDepanComponent);