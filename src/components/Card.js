import React from "react";
import '../styles/card.css';
import {Link} from "gatsby";

class Card extends React.Component {

    render () {
        const record = this.props.cardInfo;
        const link = (record.linkTo) ?  <Link className="button" to={record.linkTo}>More</Link> : <a className="button"  href={record.url}>More</a>

        return (
            <div className="flip">
                <div className="front"
                     style={{backgroundImage: `url(${record.topic}?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)`}}>
                    <h4 className="text-shadow">{record.title}</h4>
                </div>
                <div className="back" style={{backgroundColor: `${record.backColor}`}}>
                    <h3 style={{marginTop: "20px", marginBottom: "20px"}}>{record.backTitle}</h3>
                    <div  style={{marginTop: "20px", marginBottom: "20px"}}>
                        {link}
                    </div>
                    <p  style={{marginTop: "20px", marginBottom: "20px"}}/>
                        <p>{record.backText}</p>
                </div>
            </div>
    )
    }
}

export default Card;