import * as React from 'react'
import {graphql, Link} from 'gatsby'
import {Container} from "./Container";
import * as styles from '../styles/posttable.module.css'
import {ContentLayout} from "./ContentLayout";
import {ContentWrapper} from "../elements";

const PostsList = (props) => {

    console.log("POSTS", props)
    return (
        <ContentLayout>
            <ContentWrapper>
                <table>
                    <tbody>
                    {props.posts.map((node) => (
                        <tr key={node.slug} className={styles.postRow}>
                            <td className={styles.linkCol}>
                                <Link className={styles.linkText} to={`/posts/${node.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            </td>
                            <td className={styles.dateCol}>{node.frontmatter.date}</td>
                            <td className={styles.postCol}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                        </tr>

                    ))}

                    </tbody>
                </table>
            </ContentWrapper>


        </ContentLayout>

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