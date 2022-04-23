import React from "react";
import InfoCard from "../../../components/infoCard/InfoCard";
import "./HomeInfoCardWrapper.css";
import girlBuy from "../../../assets/icon/girl-buy.svg";
import howItWorks from "../../../assets/icon/how-it-works-1.svg";
import howItWorks2 from "../../../assets/icon/how-it-works-2.svg";
const infoCardData = [
  {
    icon: howItWorks,
    title: "Find your second-hand bike",
    text: "Search bikes near you, by height type or any bike attribute. You find your bike, you reserve your bike, you test your bike, you take your bike with you!",
  },
  {
    icon: howItWorks2,
    title: "Maximum transparency and comfort",
    text: "On BikeNGo you can correctly described bikes, meaningful photos, fixed prices. Buy or sell without complications.",
  },
  {
    icon: girlBuy,
    title: "Make an appointment with the seller",
    text: "Pay a deposit to reserve the bike & meet up for a test drive. Or if you want, get it delivered straight away.",
  },
];

const HomeInfoCardWrapper = () => {
  return (
    <span className="info">
      {infoCardData.map((card, index) => (
        <InfoCard
          key={index}
          icon={card.icon}
          title={card.title}
          text={card.text}
        />
      ))}
    </span>
  );
};

export default HomeInfoCardWrapper;
