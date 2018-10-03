import React from 'react'
import BiodataCreateComponent from './Component';
import { connect } from 'react-redux'
import { addData } from '../../../store/dashboard/actions';
import PropTypes from 'prop-types';

class BiodataCreateContainer extends React.Component {
  
  render() {
    return (
      <BiodataCreateComponent onButtonPress = {this.props.add}/>
    )
  }

}

BiodataCreateContainer.propTypes = {
  add: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  add: addData
}

export default connect(null, mapDispatchToProps)(BiodataCreateContainer)
