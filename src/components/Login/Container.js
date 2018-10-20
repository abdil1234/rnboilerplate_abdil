import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native'
import { loginUser, restoreSession, logoutUser } from '../../store/session'
import Form from './Component'
import HalamanDepan from '../HalamanDepan'


class FormContainer extends React.PureComponent{

    componentDidMount(){
        this.props.restore();
    }

    render() {
        if (this.props.restoring) {
            return <ActivityIndicator />
        }else{
            if(this.props.logged) {
                return <HalamanDepan logoutProses = {this.props.logoutProses} infoUser = {this.props.infoUser} />
            } else {
                return <Form loginProses = {this.props.loginProses} />
            }        
        }  
    }  
}

const mapStateToProps = state => ({
    restoring: state.session.restoring,
    logged: state.session.user != null,
    infoUser: state.session.user,
})

const mapDispatchToProps = {
    loginProses: loginUser,
    restore: restoreSession,
    logoutProses: logoutUser,
}

FormContainer.propTypes = {
    loginProses: PropTypes.func.isRequired,
    restoring: PropTypes.bool.isRequired,
    logged: PropTypes.bool.isRequired,
    logoutProses: PropTypes.func.isRequired,
    restore: PropTypes.func.isRequired,
    
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)

