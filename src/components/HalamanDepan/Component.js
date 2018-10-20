import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity  } from 'react-native'
import { withNavigation } from 'react-navigation';
import { Container, Header, Title, View, Tabs, Tab,Right, TabHeading,Icon, Body, Content,Text, Card,Button , Thumbnail, H3, Fab, Toast } from "native-base";

class HalamanDepanComponent extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      icon1: "#f2f2f2",
      icon2: "rgb(52, 167, 138)",
      userdata: this.props.infoUser.OtentikasiUser[0]
    }
  
    this.tabColor = (i) => {
      if(i == 1){
        this.setState({icon1: "rgb(52, 167, 138)", icon2: "#f2f2f2"});
      }else{
        this.setState({icon1: "#f2f2f2", icon2: "rgb(52, 167, 138)"});
      }
    }

    this.handleLogout = () => {
      this.props.logoutProses()
      this.props.navigation.navigate('Login')  
    }

    this.handleUbahPassword = () => {
      this.props.navigation.navigate('UbahPassword', {
        title: "Ubah Password"
      })
    }

  }
  
  render() {
    
    return (
      <Container style={ styles.container }>
        <Header style={{ backgroundColor: "rgb(52, 167, 138)" }} androidStatusBarColor='#000'>          
          <Body>
            <Title>UINSU APP</Title>
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
            <Content padder>          
              
              <Card transparent style={{ marginBottom : 25 }}>
                <H3>INFORMASI USER </H3>
              </Card>

              <View style={{flex: 1, flexDirection: 'row'}}>
                
                <View style = {{ width: Dimensions.get('window').width/2}}>
                  <Thumbnail large style={{ height:120, width: 120 }} source={{uri: "https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png", alt:"user"}} />
                </View>

                <View style = {{ justifyContent: 'center', width: Dimensions.get('window').width/2}}>
                  <Button 
                    onPress={()=> this.handleUbahPassword()}
                    light small>
                      <Text>Ubah Password</Text>
                  </Button>
                </View>

              </View>

              <View style={{borderBottomWidth: 2, marginTop: 25, borderBottomColor: "#f2f2f2"}} full></View>

              <View style={{flex: 1, marginBottom:0, backgroundColor: "#f2f2f2", padding:2, paddingLeft:5, height: Dimensions.get('window').height/2}}>
                <Text>Nama  : {this.state.userdata.nama_lengkap}</Text>
                <Text>Nim     : {this.state.userdata.referensi_id}</Text>
                <Text>Prodi   : {this.state.userdata.nama_prodi}</Text>
              </View>

              <Button 
                onPress={()=> this.handleLogout()}
                style={ styles.button } full>
                  <Text>Logout</Text>
              </Button>
          </Content>
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
      button: {
        backgroundColor: "rgb(52, 167, 138)",
        margin: 1
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