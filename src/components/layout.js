import React from 'react';
import { Link } from 'gatsby';
import Header from './header';
import Navigation from './navigation';
import ThemeContext from '../context/ThemeContext';

class Layout extends React.Component {
  render() {
    const { title, children, current } = this.props;
    return (
      <ThemeContext.Consumer>
        {context => (
          <div className={`page-container ${context.isShowDrawer ? 'is-show-drawer' : ''}`}>
            <Navigation current={current} />
            <div className="page-content">
              <Header title={title} />
              <main>{children}</main>
              <footer className="page-footer">
                <Link to="/about">About</Link>
                <small>
                  © {new Date().getFullYear()}
                  {` Ryuta Sakai`}
                </small>
              </footer>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Layout;
