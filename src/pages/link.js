import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class Link extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle} current={null}>
        <SEO title="リンク" lang="ja" />
        <article>
          <header className="p-article__header">
            <h1 className="p-article__title">リンク</h1>
          </header>
          <div className="p-article__body">
            <section className="p-document-section">
              <h2>JavaScript Primer </h2>
              <p>ECMAScript 2019時代のJavaScript入門書</p>
              <a href="https://jsprimer.net/" target="_blank" ref="noopener noreferer">
                jsprimer.net
              </a>
            </section>
          </div>
        </article>
      </Layout>
    );
  }
}

export default Link;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
