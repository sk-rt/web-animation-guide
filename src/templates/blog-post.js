import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { fixExternalLink } from '../utils/articleUtils';

class BlogPostTemplate extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const post = data.markdownRemark;
    const { previous, next } = this.props.pageContext;
    const tagList = post.frontmatter.tags
      ? post.frontmatter.tags.map((tag, index) => (
          <Link to={`/#${encodeURI(tag)}`} key={index}>
            {tag}
          </Link>
        ))
      : '';
    //サンプルファイル
    const exercisesListBlock = ((exercises) => {
      if (!exercises || exercises.length === 0) return;
      const _exercises = exercises.filter((ex) => {
        return ex.file && ex.title;
      });
      if (_exercises.length === 0) return;
      return (
        <div className="p-post-examples">
          <p>実習ファイル</p>
          {_exercises.map((exercise, index) => {
            return (
              <a href={`/exercises/${exercise.file}`} key={index}>
                {exercise.title}
              </a>
            );
          })}
        </div>
      );
    })(post.frontmatter.exercises);
    return (
      <Layout location={this.props.location} title={siteTitle} current={post}>
        <SEO title={post.frontmatter.title} description={post.frontmatter.excerpt} lang="ja" />
        <article>
          <header className="p-article__header">
            <h1 className="p-article__title">{post.frontmatter.title}</h1>
            <p className="p-article__tags c-tag-list">{tagList}</p>
          </header>
          {exercisesListBlock}
          <div
            className="p-article__body"
            dangerouslySetInnerHTML={{ __html: post.html }}
            ref={(articleBody) => {
              fixExternalLink(articleBody);
            }}
          />
          <ul className="p-post__nav">
            <li className="p-post__nav-item is-prev">
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li className="p-post__nav-item is-next">
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </article>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        excerpt
        exercises {
          file
          title
        }
      }
    }
  }
`;
