import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity  } from 'react-native'
import { withNavigation } from 'react-navigation';
import { Container, Header, Title, View, Tabs, Tab,Right, TabHeading,Icon, Body, Content,Text, Card,List , ListItem, H3, Fab, Toast } from "native-base";

class HalamanDepanComponent extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      icon1: "#f2f2f2",
      icon2: "rgb(52, 167, 138)",
    }
  
  this.tabColor = (i) => {
    if(i == 1){
      this.setState({icon1: "rgb(52, 167, 138)", icon2: "#f2f2f2"});
    }else{
      this.setState({icon1: "#f2f2f2", icon2: "rgb(52, 167, 138)"});
    }
  }

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
        
        <Tabs 
          locked= {true} 
          onChangeTab={({i}) => this.tabColor(i)}
          tabBarPosition="bottom">
          <Tab 
            heading={ 
            <TabHeading style={{borderTopWidth: 1, borderTopColor: "#F2F2F2", backgroundColor: "white"}}>
              <Icon name="home" style={{color: this.state.icon2}} />
            </TabHeading>
            }
            activeTabStyle={{backgroundColor: 'red'}}
            activeTextStyle={{ color: 'red', fontSize: 12 }}
            >
            <Content padder>          
              <Card transparent style={{ marginBottom : 25 }}>
                <H3>Selamat Datang </H3>
              </Card>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity  onPress={() => alert("hai")} style={styles.card}>
                  <Icon type="FontAwesome" name="address-book-o" style={{fontSize: 80}} />
                  <Text>Mahasiswa</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.card}>
                  <Icon type="FontAwesome" name="address-book-o" style={{fontSize: 80}} />
                  <Text>Berita</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>                  
                  <TouchableOpacity style={styles.card}>
                    <Icon type="FontAwesome" name="address-book-o" style={{fontSize: 80}} />
                    <Text>Biodata</Text>
                  </TouchableOpacity>              
                  <TouchableOpacity style={styles.card}>
                    <Icon type="FontAwesome" name="address-book-o" style={{fontSize: 80}} />
                    <Text>Lain-Lain</Text>
                  </TouchableOpacity>              
              </View>

          </Content>
          </Tab>          
          <Tab 
            heading={ <TabHeading style={{borderTopWidth: 1, borderTopColor: "#F2F2F2", backgroundColor: "white"}}><Icon name="person" style={{color: this.state.icon1}} /></TabHeading>}
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
        width:Dimensions.get('window').width/2.2,
        height:Dimensions.get('window').width/2.2,
        backgroundColor: '#fff',
        borderRadius: 7,
        marginRight: 10,
        marginBottom: 20,
        justifyContent: 'center', 
        alignItems: 'center',
        elevation: 2
      },
});

export default withNavigation(HalamanDepanComponent);