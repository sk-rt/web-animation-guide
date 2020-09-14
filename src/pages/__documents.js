import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class About extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle} current={null}>
        <SEO title="2019 素材置き場" lang="ja" />
        <article>
          <header className="p-article__header">
            <h1 className="p-article__title">2019 素材置き場</h1>
          </header>
          <div className="p-article__body">
            <section className="p-document-section">
              <h1>課題提出</h1>
              <p>
                <small>2020.1.8</small>
              </p>
              <h5>● 提出前に確認</h5>
              <a href={`/docs/mp_2019_work.pdf`} target="_blank" rel="noopener noreferrer">
                提出フォーマット
              </a>
              を良く読むこと。
              <ul>
                <li>提出フォルダ名が自分の学籍番号になっているか確認。ex. "x18001"</li>
                <li>
                  フォルダ直下に<em>"index.html"</em>と<em>"author.json"</em>が入っているか確認。
                </li>
                <li>
                  ファイル名・フォルダ名に<em>日本語や記号</em>が使われていないか確認。
                </li>
                <li>
                  ファイルが重すぎないか、余計なファイルが入っていないか確認。(多くても50MB以内になる様に)
                </li>
              </ul>
              <h5>
                ● 作品一覧ページ <small>＊後日こちらでアップロードします。</small>
              </h5>
              <h6>
                <a
                  href={`https://mp-works-2019.netlify.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://mp-works-2019.netlify.com/
                </a>
              </h6>
            </section>
            <section className="p-document-section">
              <h1>最終課題制作</h1>
              <p>
                <small>2019.11.21</small>
              </p>
              <h6>
                <a href={`/docs/mp_2019_work.pdf`} target="_blank" rel="noopener noreferrer">
                  提出課題内容(PDF)
                </a>
              </h6>
              <h6>
                <a href="/docs/x18000.zip" target="_blank" rel="noopener noreferrer">
                  提出テンプレートサンプル(ZIP)
                </a>
              </h6>
              <h4>【参考】</h4>
              <ul>
                <li>
                  <a
                    href="http://takeodoman.jp/kadai/ex01.zip"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    サンプル(道満)
                  </a>
                </li>
                <li>
                  <a
                    href="https://x-ten.2018.sakairyuta.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    2018年 前期 Webデザイン - X展
                  </a>
                </li>
                <li>
                  <a
                    href="https://mp.sakairyuta.com/works/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    2018年 後期モーションプランニング
                  </a>
                </li>
              </ul>
            </section>
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
