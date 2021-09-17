import * as React from 'react'
import PostsList from '../components/PostsList'
import {PostWrapper} from "../elements/PostElements";

const AboutPage = () => {
    return (
        <PostWrapper pageTitle="About Me">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </PostWrapper>
    )
}

export default AboutPage