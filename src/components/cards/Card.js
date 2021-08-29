import React from "react";
import './Card.css';
import {Link} from "react-router-dom";

class Card extends React.Component {

    render () {
        console.log("PROPS:", this.props.cardInfo)
        const record = this.props.cardInfo;
        return (
            <div className="flip">
                <div className="front"
                     style={{backgroundImage: `url(assets/img/${record.topic}?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)`}}>
                    <h4 className="text-shadow">{record.title}</h4>
                </div>
                <div className="back" style={{backgroundColor: `${record.backColor}`}}>
                    <h2 style={{marginTop: "20px", marginBottom: "20px"}}>{record.backTitle}</h2>
                    <div  style={{marginTop: "20px", marginBottom: "20px"}}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <Link to={record.linkTo} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Go there ...
                            </Link>
                    </div>
                    <p  style={{marginTop: "20px", marginBottom: "20px"}}/>
                        <p>{record.backText}</p>
                </div>
            </div>
    )
    }
}

export default Card;