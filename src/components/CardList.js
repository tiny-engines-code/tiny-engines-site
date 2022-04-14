import React from "react";
import Card from "./Card";
import {CardListWrapper} from "../elements";


class CardList extends React.Component {

    state = {
        cards: [
            {title: "documentation", topic: "/piano.jpg",  url:"https://chris-lomeli.gitbook.io/tiny-engines/",  backColor: "#1d1e21", backTitle:"documentation", backText: "documents, demos, and examples of code, designs and other related subjects"},
            {title: "code", topic: "young-frankenstein2.png",  url: "https://github.com/tiny-engines-code" , backColor: "#1d1e21", backTitle:"welcome to the lab", backText: "public github site for experiments, demos, and walk-through"},
            {title: "work/resume", topic: "mailboy.png",  linkTo: "/history" , backColor: "#1d1e21", backTitle:"resume, background", backText: "boilerplate recital mixed with occasional rebellion"},
            {title: "freeform", topic: "boy.jpg", linkTo:"/posts",  backColor: "#1d1e21", backTitle:"freeform posts", backText: "reflections, posts, and hypothesis -- and a promise not to let it get too cynical"},
            {title: "muse", topic: "clown.jpg", linkTo:"/favorites", backColor: "#1d1e21",  backTitle:"credits", backText: "acknowledgements, favorites, and sharing"},
            {title: "explore", topic: "exploration.jpg",  linkTo: "/explore" , backColor: "#1d1e21", backTitle:"work in progress", backText: "attack ships on fire off the shoulder of orion, c-beams glittering in the dark near the tannhäuser gate"}
        ]
    }

    render() {
        console.log(this.state.cards)
        const items = this.state.cards;
        return (
            <div>
                <CardListWrapper>
                    {items.map(card => (
                        <Card key={card.title} cardInfo={card}/>
                    ))}
                </CardListWrapper>
            </div>)
            ;
    }
}

export default CardList;
