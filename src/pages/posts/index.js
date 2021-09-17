import * as React from 'react'
import {graphql} from 'gatsby'
import PostsList from "../../components/PostsList";

const Posts = ({data}) => {

    console.log("DATA", data)
    return (
            <PostsList posts={data.allMdx.nodes}/>
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

export default Posts