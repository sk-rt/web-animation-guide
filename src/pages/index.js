import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class BlogIndex extends React.Component {
  state = {
    currentTag: ''
  };

  componentWillMount() {
    const location = this.props.location;
    const posts = this.props.data.allMarkdownRemark.edges;
    this.tags = posts
      .flatMap(({ node }) => node.frontmatter.tags)
      .filter((x, i, self) => self.indexOf(x) === i)
      .map(tag => encodeURI(tag));
    if (
      location.hash &&
      this.tags.includes(location.hash.slice(1)) &&
      location.hash.slice(1) !== this.state.currentTag
    ) {
      this.updateCurrentTag(location.hash.slice(1));
    }
  }

  updateCurrentTag(tag) {
    if (this.state.currentTag === tag || !tag) {
      this.setState({ currentTag: '' });
    } else {
      this.setState({ currentTag: tag });
    }
  }
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle} current={null}>
        <SEO title="Top" lang="ja" />
        <nav className="p-tag-nav">
          <button
            type="button"
            className={`p-tag-nav__btn ${'' === this.state.currentTag ? 'is-current' : ''}`}
            onClick={() => {
              this.updateCurrentTag('');
            }}
          >
            ALL
          </button>
          {this.tags.map((tag, index) => {
            return (
              <Link
                to={`/#${tag}`}
                key={index}
                className={`p-tag-nav__btn ${tag === this.state.currentTag ? 'is-current' : ''}`}
                onClick={() => {
                  this.updateCurrentTag(tag);
                }}
              >
                {decodeURI(tag)}
              </Link>
            );
          })}
        </nav>
        {posts.map(({ node }, index) => {
          const tagList = node.frontmatter.tags.map((tag, index) => <span key={index}>{tag}</span>);
          const number = `00${index + 1}`.slice(-2);
          const title = node.frontmatter.title || node.fields.slug;
          if (
            this.state.currentTag &&
            !node.frontmatter.tags.map(tag => encodeURI(tag)).includes(this.state.currentTag)
          ) {
            return false;
          }
          return (
            <article key={node.fields.slug} className="p-post-item">
              <Link className="p-post-item__link" to={node.fields.slug}>
                <div className="p-post-item__index">{number}</div>
                <div
                  className="p-post-item__featured-image"
                  style={{
                    backgroundImage: `url(/featured/${node.frontmatter.featuredImage})`
                  }}
                />
                <div className="p-post-item__content">
                  <div>
                    <h3>{title}</h3>
                    <p>{node.frontmatter.excerpt}</p>
                    <div className="c-tag-list">{tagList}</div>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            excerpt
            featuredImage
          }
        }
      }
    }
  }
`;
