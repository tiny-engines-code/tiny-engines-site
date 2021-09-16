import * as React from 'react'
import {graphql, Link} from 'gatsby'
import {PostCard, PostListWrapper} from "../elements";

const PostsList = (props) => {

    console.log("POSTS", props)
    return (
            <PostListWrapper>
                {
                    props.posts.map((node) => (
                        <PostCard key={node.slug}>
                            <Link style={{textDecoration: 'none'}} to={`/posts/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                            <div>{node.frontmatter.date}</div>
                        </PostCard>

                    ))
                }
            </PostListWrapper>

    )
}

export const query = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMdx(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id
      slug
    }
  }
}
`

export default PostsList