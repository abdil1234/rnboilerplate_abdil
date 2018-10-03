import React,{ Component } from 'react';

import DashboardComponent from './Component';
import { getData, deleteData, getDataKosong } from '../../store/dashboard/actions';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class DashboardContainer extends Component {
    
    componentDidMount(){
        this.props.data();
    }

    componentWillUnmount() {
        this.props.kosongData();
    }

    render() {
        return(     
            <DashboardComponent 
                actionHapus = { this.props.hapusData } 
                biodata = {this.props.biodata} 
            />
        ); 
    }
}

const mapStateToProps = state =>({
    biodata: state.biodata.data,
});

const mapDispatchToProps = {
    data: getData,
    hapusData: deleteData,
    kosongData: getDataKosong,
}

DashboardContainer.propTypes = {
    data: PropTypes.func.isRequired,   
    hapusData: PropTypes.func.isRequired,   
    kosongData: PropTypes.func.isRequired,   
    biodata: PropTypes.array.isRequired   
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
