import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../../../store/dashboard/actions'
import Form from './Component'

const FormContainer = props => 
    <Form 
        loginProses = {props.loginProses}
    />

export default FormContainer;


const mapDispatchToProps = {
    loginProses: loginUser
}

FormContainer.propTypes = {
    loginProses: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(FormContainer)
