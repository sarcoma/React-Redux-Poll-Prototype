import React from 'react';
import {VOTE_TYPE} from '../actions/types';
import PropTypes from 'prop-types';

const PollCheckBox = ({pollId, onClick}) =>
    <div className={'poll-check-boxes'}>
        <button onClick={() => onClick(pollId, VOTE_TYPE.YES)}>Yes</button>
        <button onClick={() => onClick(pollId, VOTE_TYPE.NOT_SURE)}>Not Sure</button>
        <button onClick={() => onClick(pollId, VOTE_TYPE.NO)}>No</button>
    </div>
;

PollCheckBox.propTypes = {
    pollId: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};


export default PollCheckBox;


