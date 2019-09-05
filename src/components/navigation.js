import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import ThemeContext from '../context/ThemeContext';

class Navigation extends React.Component {
  toggle() {
    return this.props.toggleDrawer();
  }
  render() {
    const { current } = this.props;
    return (
      <ThemeContext.Consumer>
        {context => (
          <StaticQuery
            query={navQuery}
            render={data => {
              const posts = data.allMarkdownRemark.edges;
              const { isShowDrawer, toggleDrawer } = context;
              return (
                <div className={`c-posts-nav ${isShowDrawer ? 'is-show' : ''}`}>
                  <button
                    className={`c-posts-nav__toggle ${isShowDrawer ? 'is-show' : ''}`}
                    type="button"
                    onClick={() => {
                      toggleDrawer();
                    }}
                  >
                    <span />
                  </button>

                  <nav className="c-posts-nav__nav">
                    <Link className="c-posts-nav__top" to={`/`}>
                      INDEX
                    </Link>
                    <div className="c-posts-nav__list">
                      {posts.map(({ node }, index) => {
                        const number = `00${index + 1}`.slice(-2);
                        const title = node.frontmatter.title || node.fields.slug;
                        const isCurrent = current && current.id === node.id;
                        return (
                          <Link
                            className={`c-posts-nav__item ${isCurrent ? 'is-current' : ''}`}
                            to={node.fields.slug}
                            key={node.fields.slug}
                          >
                            <span className="c-posts-nav__index">{number}</span>
                            <div>{title}</div>
                          </Link>
                        );
                      })}
                    </div>
                    <Link className="c-posts-nav__static-page" to={`/documents/`}>
                      2019 素材置き場
                    </Link>
                  </nav>
                </div>
              );
            }}
          />
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Navigation;

export const navQuery = graphql`
  query navQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`;
