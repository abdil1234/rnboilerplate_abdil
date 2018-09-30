import React,{ Component } from 'react';

import DashboardComponent from './Component';
import { getData } from '../../store/dashboard/actions';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class DashboardContainer extends Component {
    
    componentDidMount(){
        this.props.data();
    }

    render() {
        return(     
            <DashboardComponent biodata = {this.props.biodata} />
        ); 
    }
}

const mapStateToProps = state =>({
    biodata: state.biodata.data,
});

const mapDispatchToProps = {
    data: getData,
}

DashboardContainer.propTypes = {
    data: PropTypes.func.isRequired,   
    biodata: PropTypes.array.isRequired   
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
