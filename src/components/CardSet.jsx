import React from "react";
import Card from "./Card";

export default function CardSet({ cards, toggle, del, done }) {
  return cards.map((card) => {
    if (card.done === done && card.topic !== "" && card.desc !== "") {
      return <Card key={card.id} info={card} toggle={toggle} del={del} />;
    }
  });
}
