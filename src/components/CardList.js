import React from "react";
import Card from "./Card";
import {CardListWrapper} from "../elements";


class CardList extends React.Component {

    state = {
        cards: [
            {title: "logbooks", topic: "piano.jpg",  url:"https://chris-lomeli.gitbook.io/tiny-engines/",  backColor: "#1d1e21", backTitle:"hope you're keeping some kind of record", backText: "documents, demos, and examples of code, designs and other related subjects"},
            {title: "rants", topic: "boy.jpg", linkTo:"/posts",  backColor: "#1d1e21", backTitle:"four legs good, two legs bad", backText: "reflections, posts, and hypothesis -- and a promise not to let it get too cynical"},
            {title: "work", topic: "history/history3Crop.png",  linkTo: "/history" , backColor: "#1d1e21", backTitle:"four legs good, two legs ...better", backText: "boilerplate recital mixed with occasional rebellion"},
            {title: "code", topic: "young-frankenstein2.png",  url: "https://github.com/tiny-engines-code" , backColor: "#1d1e21", backTitle:"welcome to the lab", backText: "public github site for experiments, demos, and walk-through"},
            {title: "muse", topic: "clown.jpg", linkTo:"/quotes", backColor: "#1d1e21",  backTitle:"I credit poetry for making this space-walk possible", backText: "acknowledgements, favorites, and sharing"},
            {title: "explore", topic: "exploration.jpg",  linkTo: "/explore" , backColor: "#1d1e21", backTitle:"i've seen things you people wouldn’t believe", backText: "attack ships on fire off the shoulder of orion, c-beams glittering in the dark near the tannhäuser gate"}
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
