import React from 'react';
import { Link } from 'gatsby';

class Header extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <header className="page-header">
        <h1 className="page-header__title">
          <Link to={`/`}>{title}</Link>
        </h1>
      </header>
    );
  }
}
export default Header;
