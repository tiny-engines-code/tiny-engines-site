import * as React from 'react'
import PostsList from '../components/PostsList'
import { StaticImage } from 'gatsby-plugin-image'
import HeroLayout from "../components/HeroLayout";

const IndexPage = () => {
    return (
        <HeroLayout />
        // <PostsList pageTitle="Home Page">
        //      <StaticImage
        //         alt="Girls!!"
        //         src="../images/girls.jpg"
        //     />
        // </PostsList>
    )
}

export default IndexPage