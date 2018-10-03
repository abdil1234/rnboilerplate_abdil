import React from 'react'
import BiodataUbahComponent from './Component';
import { connect } from 'react-redux'
import { addData, editData } from '../../../store/dashboard/actions';
import PropTypes from 'prop-types';

class BiodataUbahContainer extends React.Component {  
  
  render() { 
    return (
      <BiodataUbahComponent 
        onButtonPress = {this.props.edit} 
        id = {this.props.navigation.getParam('id', null)} 
        nama = {this.props.navigation.getParam('nama', null)} 
      />
    )
  }
}

BiodataUbahContainer.propTypes = {
  add: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  add: addData,
  edit: editData
}

export default connect(null, mapDispatchToProps)(BiodataUbahContainer)
