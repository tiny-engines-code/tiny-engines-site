import * as React from 'react'
import {ContentLayout} from "../components/ContentLayout";
import {ContentWrapper} from "../elements";
import {ContentTitle} from "../elements";

const WorkHistory = () => {
    return (
        <ContentLayout>
            <ContentTitle>Work history</ContentTitle>
            <ContentWrapper>
             <p>Regrettably, this is still in the inception phase, but here's my CV</p>

            <embed src="Chris.Lomeli.2021.CV.pdf" width="800px" height="2100px" />


           </ContentWrapper>
        </ContentLayout>
    )
}

export default WorkHistory