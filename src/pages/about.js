import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class About extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle} current={null}>
        <SEO title="About" lang="ja" />
        <article>
          <div className="p-article__body">
            <h1>このサイトについて</h1>
            <p>大学での講義の為のサイトです。</p>
            <p>
              Webアニメーションごく基礎を学ぶ目的であり、深く掘り下げるものではありません。
              <br />
              また、難しく感じない様に、あえて触れていないこともありますのでご注意を。
            </p>
          </div>
        </article>
      </Layout>
    );
  }
}

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
