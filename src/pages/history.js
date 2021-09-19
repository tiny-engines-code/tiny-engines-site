import * as React from 'react'
import {ContentLayout} from "../components/ContentLayout";
import {ContentWrapper} from "../elements";
import {ContentTitle} from "../elements";
import '../styles/image.css'
import '../styles/resume.css';

const WorkHistory = () => {

    return (

        <ContentLayout>
            <ContentTitle>Work history</ContentTitle>
            <ContentWrapper>
              <p>Regrettably, this page is still in the inception phase, but here's my CV</p>

              <div>

                <a href={`Chris.Lomeli.2021.CV.pdf`} download>Download CV</a>
<hr/>
                <div style={{color: 'darkgray', fontSize: '12px'}}>flip to page 2 by hovering your mouse over this wonderful resume...</div><p/>
                <div className="cvflip">
                    <div className="cvfront"
                         style={{backgroundImage: `url(Chris.Lomeli.2021.CV1.png?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)`}}>
                    </div>
                    <div className="cvback" style={{backgroundImage: `url(Chris.Lomeli.2021.CV2.png?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)`}}>
                    </div>
                </div>
    </div>

           </ContentWrapper>
        </ContentLayout>
    )
}

export default WorkHistory