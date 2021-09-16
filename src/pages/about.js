import * as React from 'react'
import PostsList from '../components/PostsList'

const AboutPage = () => {
    return (
        <PostsList pageTitle="About Me">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </PostsList>
    )
}

export default AboutPage