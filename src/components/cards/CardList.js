import React from "react";
import Card from "./Card";

class CardList extends React.Component {

    state = {
        cards: [
            {title: "create", topic: "piano.jpg",  linkTo:"/books",  backColor: "#222", backTitle:"Coding and other Sorrows", backText: "Lorem Ipsum orem Ipsum orem Ipsum orem Ipsum orem Ipsum "},
            {title: "rant", topic: "boy.jpg", linkTo:"/rant",  backColor: "#30030e", backTitle:"Coding and other Sorrows", backText: "Lorem Ipsum orem Ipsum orem Ipsum orem Ipsum orem Ipsum "},
            {title: "muse", topic: "clown.jpg", linkTo:"/muse", backColor: "#1a3003",  backTitle:"Coding and other Sorrows", backText: "Lorem Ipsum orem Ipsum orem Ipsum orem Ipsum orem Ipsum "},
            {title: "explore", topic: "spaceman.png",  linkTo: "/explore" , backColor: "#14054d", backTitle:"Coding and other Sorrows", backText: "Lorem Ipsum orem Ipsum orem Ipsum orem Ipsum orem Ipsum "},
            {title: "recall", topic: "girls.jpg",  linkTo: "/history" , backColor: "#3d084a", backTitle:"The past and other sorrows", backText: "Lorem Ipsum orem Ipsum orem Ipsum orem Ipsum orem Ipsum "}
        ]
    }

    render() {
        console.log(this.state.cards)
        const items = this.state.cards;
        return (
            <div className="bg-white-400 flex justify-items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center ">
                    {items.map(card => (
                        <Card key={card.title} cardInfo={card}/>
                    ))}
                </div>
            </div>)
            ;
    }
}

export default CardList;
