import * as React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import '../../styles/image.css'
import {ContentTitle, FeatureImageWrapper, PostWrapper} from "../../elements";
import {ContentLayout} from "../../components/ContentLayout";
// ...


const BlogPost = ({data}) => {
    const image = getImage(data.mdx.frontmatter.hero_image)

    return (

        <ContentLayout>
            <ContentTitle>{data.mdx.frontmatter.title}</ContentTitle>
            <FeatureImageWrapper>
                <GatsbyImage className="postimage"
                             image={image}
                             alt={data.mdx.frontmatter.hero_image_alt}
                />
            </FeatureImageWrapper>
            <PostWrapper>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </PostWrapper>
        </ContentLayout>

    )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default BlogPost