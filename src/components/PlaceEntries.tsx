import MakePlaceEntry from "./PlaceEntryItem";

function PlaceEntries(): JSX.Element {
  return (
    <section>
      <MakePlaceEntry
        entryTitle={"Sacré-Cœur de Montmartre"}
        city={"Paris"}
        country={"France"}
        mapLink={
          "https://www.google.com/maps/place/Sacr%C3%A9-C%C5%93ur/@48.8867045,2.3386196,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e4334868de3:0xcfc3870abe2b8519!8m2!3d48.8867046!4d2.3431043!16s%2Fg%2F1tdm30l7"
        }
        image={
          "https://www.thetrainline.com/cms/media/4036/sacre-coeur-paris.jpg?mode=crop&width=660&height=440&quality=70"
        }
        entryBody={
          "I love the architectural style, and how it stands gloriously above my favourite city in the world, Paris. It has also been featured in some iconic films as well as a favourite of mine, The 400 Blows."
        }
      />
      <MakePlaceEntry
        entryTitle={"Coe Fen"}
        city={"Cambridge"}
        country={"UK"}
        mapLink={
          "https://www.google.com/maps/place/Coe+Fen,+Cambridge/@52.1999898,0.114662,17z/data=!4m15!1m8!3m7!1s0x47d85d89f32a012d:0x63a320e1a35e3d21!2sCambridge!3b1!8m2!3d52.1950788!4d0.1312729!16zL20vMDk3OHI!3m5!1s0x47d870a3b0cfec13:0x511e20416a9d974a!8m2!3d52.1984739!4d0.1165978!16s%2Fm%2F07kb8w3?hl=en-GB"
        }
        image={
          "https://s0.geograph.org.uk/geophotos/03/99/67/3996781_f31f5ea8.jpg"
        }
        entryBody={
          "Just incredibly beautiful. Weeping willows, punts on the river, oh and cows roaming about everywhere!"
        }
      />
    </section>
  );
}

export default PlaceEntries;
