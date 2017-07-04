/* eslint-disable */
import React from 'react';
import { compose, withHandlers, withState, lifecycle } from 'recompose'

const handleLoad = async ({ load, setComponent }) => {
  try {
    setComponent(null)
    const res = await load();
    const Component = res.default;
    setComponent(<Component {...this.props} />)
  } catch (err) {
    console.error(err);
  }
}

const enhance = compose(
  withState('mod', 'setComponent', null),
  lifecycle({
    componentWillMount() {
      handleLoad(this.props)
    },
    componentWillReceiveProps(nextProps) {
      if (nextProps.load !== this.props.load) {
        handleLoad(nextProps)
      }
    }
  })
);

const Bundle = enhance(({ mod }) => (
  mod ? mod : null
));

export default Bundle;
