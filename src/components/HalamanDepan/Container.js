import React from 'react'
import HalamanDepanComponent from './Component';
import { connect } from 'react-redux'
import { logoutUser  } from '../../store/session';
import PropTypes from 'prop-types';

class HalamanDepanContainer extends React.PureComponent {

   render() {   
    
    return (
      <HalamanDepanComponent 
        logoutProses = {this.props.logoutUser} 
        infoUser = {this.props.infoUser}/>
    )
  }

}

HalamanDepanContainer.propTypes = {
  logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  infoUser: state.session.user,
  statusubah: state.session.statusubah,
})

const mapDispatchToProps = {
  logoutUser: logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(HalamanDepanContainer)
