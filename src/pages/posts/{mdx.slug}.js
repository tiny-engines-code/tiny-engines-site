import * as React from 'react'
import {graphql, Link} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {Container} from "../../components/Container";
import '../../styles/image.css'
import {ContainerNavLeft, ContainerNavRight, ContainerWrapper, FeatureImageWrapper, HeroPanel} from "../../elements";
import {PostWrapper} from "../../elements/PostElements";
import Navbar from "../../components/Navbar";
import {navItem} from "../../styles/layout.module.css";
// ...


const BlogPost = ({data}) => {
    const image = getImage(data.mdx.frontmatter.hero_image)

    return (
        <ContainerWrapper>
            <ContainerNavLeft>chris lomeli</ContainerNavLeft>
            <ContainerNavRight>
                <Link className={navItem} to="/">home</Link>
                <a className={navItem} href="https://chris-lomeli.gitbook.io/tiny-engines/">docs</a>
                <Link className={navItem}  to="/posts">posts</Link>
                <Link className={navItem}  to="/about">about</Link>
            </ContainerNavRight>

            <FeatureImageWrapper>
                <GatsbyImage className="postimage"
                             image={image}
                             alt={data.mdx.frontmatter.hero_image_alt}
                />
            </FeatureImageWrapper>
            <PostWrapper>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </PostWrapper>
        </ContainerWrapper>
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