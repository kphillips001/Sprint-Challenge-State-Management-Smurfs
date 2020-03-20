import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchSmurfData } from '../../actions/index';

import Smurf from './Smurf';

const Smurfs = (props) => {

    useEffect(()=> {
        props.fetchSmurfData();
    }, []);
 
    return(
        <div className="smurfs-container">
            {props.isLoading && 
               <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} //3 secs
            />
            }
            <h1>Smurfs Page</h1>
            {
                props.data.map((smurf, idx) => (
                    <div key={idx}>
                        <Smurf name={smurf.name} age={smurf.age} height={smurf.height} />
                    </div>
                ))
            }
        </div>
    );
}

const mapStateToProps =  state => {
    return{
        isLoading: state.smurfData.isLoading,
        data: state.smurfData.data
    }
}

export default connect(mapStateToProps, {fetchSmurfData})(Smurfs);