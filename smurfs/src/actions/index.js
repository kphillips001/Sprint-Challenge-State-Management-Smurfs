import axios from 'axios';

export const FETCH_DATA =  'FETCHING_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const POST_DATA = 'POST_DATA';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';


export const fetchSmurfData = () => {
    return dispatch => {
        dispatch({ type: FETCH_DATA});
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: FETCH_DATA_SUCCESS, payload: { data: res.data}});
            console.log('Fetched: ',  res.data);
        })
        .catch(err => {
            dispatch({ type: FETCH_DATA_FAILURE, payload: { error: err}});
        })
    }
}

export const addNewSmurf = smurf => {
    return dispatch => {
        dispatch({ type: POST_DATA});
        console.log(smurf);
        axios.post('http://localhost:3333/smurfs',
        {
            id: smurf.id,
            name: smurf.name,
            age: smurf.age,
            height: smurf.height
        })
        .then(res => {
            dispatch({ type: POST_DATA_SUCCESS, payload: {data: res.data}});
            console.log('Posted: ', res);
        })
        .catch(err => {
            dispatch({ type: POST_DATA_FAILURE});
            console.log(err)
        });
    }
}

