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
              <p>主にJavaScriptの文法などが解説されている入門書。</p>
              <a href="https://jsprimer.net/" target="_blank" ref="noopener noreferer">
                jsprimer.net
              </a>
            </section>
            <section className="p-document-section">
              <h2>JavaScript.INFO</h2>
              <p>文法に加え、ブラウザAPI（DOM）などの解説、ユースケースなど。</p>
              <a href="https://ja.javascript.info/" target="_blank" ref="noopener noreferer">
                ja.javascript.info
              </a>
            </section>
            <section className="p-document-section">
              <h2>MDN </h2>
              <p>FirefoxのMozillaが作っている一番詳細な情報が載っている資料</p>
              <a
                href="https://developer.mozilla.org/ja/docs/Web/JavaScript"
                target="_blank"
                ref="noopener noreferer"
              >
                developer.mozilla.org
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
