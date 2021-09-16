import React from "react";
import Card from "./Card";
import {CardListWrapper} from "../../elements";


class CardList extends React.Component {

    state = {
        cards: [
            {title: "create", topic: "piano.jpg",  url:"https://chris-lomeli.gitbook.io/tiny-engines/",  backColor: "#1d1e21", backTitle:"coding and other sorrows", backText: "collections of documents and examples i've used"},
            {title: "rant", topic: "boy.jpg", linkTo:"/posts",  backColor: "#1d1e21", backTitle:"four legs good, two legs bad", backText: "reflection and hypothesis of a laconic journeyman"},
            {title: "history", topic: "history/history1.jpg",  linkTo: "/history" , backColor: "#1d1e21", backTitle:"of what importance in the courtroom of oblivion", backText: "boilerplate recital mixed with occasional rebellion against convention"},
            {title: "explore", topic: "spaceman.png",  linkTo: "/explore" , backColor: "#1d1e21", backTitle:"i've seen things you people wouldn’t believe", backText: "attack ships on fire off the shoulder of orion, c-beams glitter in the dark near the tannhäuser gate"},
            {title: "celebration", topic: "history/history2.jpg",  linkTo: "/" , backColor: "#1d1e21", backTitle:"looking backwards", backText: "it was mostly sweet, but you were the sweetest of all (Herbert)"},
            {title: "muse", topic: "clown.jpg", linkTo:"/muse", backColor: "#1d1e21",  backTitle:"music", backText: "personal explorations and favorites"}
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
