import * as React from 'react'
import {graphql} from 'gatsby'
import Navbar from "../../components/Navbar";
import PostsList from "../../components/PostsList";
import {HeroPanel} from "../../elements";

const Posts = ({data}) => {

    console.log("DATA", data)
    return (
        <div>
            <Navbar/>
            <HeroPanel>{data.site.siteMetadata.title}</HeroPanel>
            <PostsList posts={data.allMdx.nodes}/>
        </div>
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