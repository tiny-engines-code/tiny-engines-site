import * as React from 'react'
import {Link} from 'gatsby'
import * as styles from '../styles/posttable.module.css'
import {ContentLayout} from "./ContentLayout";
import {WideContentWrapper} from "../elements";

const PostsList = (props) => {

    return (
        <ContentLayout>
            <WideContentWrapper>
            <div style={{paddingTop: '50px', fontSize: '20px', color: '#545433'}}>I'm not entirely sure what I want to do with this section, other than having some fun with React. I'm not really interested in publishing.  I'm not going to recycle old articles.  So at least for now I'll begin to use it to explain who I am and my 'true-north</div>
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
                                <td className={styles.postCol}>My take on the Shingo model of organizational excellence</td>
                            </tr>

                        ))}

                    </tbody>
                </table>
            </WideContentWrapper >


        </ContentLayout>

    )
}

export default PostsList