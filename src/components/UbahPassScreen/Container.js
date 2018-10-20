import React from 'react'
import BiodataCreateComponent from './Component';
import { connect } from 'react-redux'
import { ubahPassword } from '../../store/session';
import PropTypes from 'prop-types';

class BiodataCreateContainer extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { 
      statusubah: null,
    };
  }
  
  componentWillReceiveProps(nextProps) {
    if(this.props.statusubah !== nextProps.statusubah){
      if(nextProps.statusubah){
        this.setState({'statusubah' : nextProps.statusubah})       
        this.props.navigation.navigate('HalamanDepan')
      }
    }
  }
  
  render() {   
    
    return (
      <BiodataCreateComponent 
        onButtonPress = {this.props.ubahPassword} 
        statusubah = {this.state.statusubah} 
        loading = {this.props.loading}
        />
    )
  }

}

BiodataCreateContainer.propTypes = {
  ubahPassword: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  infoUser: state.session.user,
  statusubah: state.session.statusubah,
  loading: state.session.loading,
})

const mapDispatchToProps = {
  ubahPassword: ubahPassword,
}

export default connect(mapStateToProps, mapDispatchToProps)(BiodataCreateContainer)
