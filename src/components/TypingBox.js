import React from 'react';
import { connect } from 'react-redux';

const TypingBox = ({ typedKeys, nextKeys }) => {
  return (
    <div>
      <div>Next keys: {nextKeys}</div>
      <input
        type="text"
        value={typedKeys}
        onChange={(e) => {
          // Dispatch action to update typedKeys in Redux store
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  typedKeys: state.typedKeys,
  nextKeys: state.nextKeys,
});

export default  connect(mapStateToProps)(TypingBox);
