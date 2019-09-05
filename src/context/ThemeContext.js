import React, { createContext } from 'react';
const defaultState = {
  isShowDrawer: false
};
const ThemeContext = createContext(defaultState);

class ThemeProvider extends React.Component {
  state = {
    isShowDrawer: false
  };
  toggleDrawer = (type = 'toggle') => {
    switch (type) {
      case 'hide':
        this.setState({ isShowDrawer: false });
        break;
      case 'show':
        this.setState({ isShowDrawer: true });
        break;
      case 'toggle':
      default:
        this.setState({ isShowDrawer: !this.state.isShowDrawer });
        break;
    }
  };
  render() {
    const { children } = this.props;
    const { isShowDrawer } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          isShowDrawer,
          toggleDrawer: this.toggleDrawer
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeContext;

export { ThemeProvider };
