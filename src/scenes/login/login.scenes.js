import React from 'react';
import connect from 'react-redux/es/connect/connect';
import { setNewIncValue } from 'redux/thunks';
import { getInc } from 'redux/selectors';

interface Props {
  incValue: Number;
  setNewIncValue: Function;
}

class _Login extends React.PureComponent<Props> {

  incAction = () => {
    const { incValue, setNewIncValue } = this.props;
    setNewIncValue(incValue + 1);
  }
  decAction = () => {
    const { incValue, setNewIncValue } = this.props;
    setNewIncValue(incValue - 1);
  }
  render () {
    const { incValue } = this.props;
    return (
      <div>
        <h1>Total = { incValue }</h1>
        <button onClick={this.decAction}>-1</button>
        <button onClick={this.incAction}>+1</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    incValue: getInc(state),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setNewIncValue: (incValue) => dispatch(setNewIncValue(incValue)),
  };
};

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Login);

