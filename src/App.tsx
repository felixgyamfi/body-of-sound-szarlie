import "./App.css";
import QuadrantButton from "./components/QuadrantButton";
import testSound from "./assets/sounds/placeholders/salamisound-1020014-fussgaenger-auf-dem-buergersteig.mp3";

const soundList = [
  "./assets/sounds/placeholders/salamisound-2302766-huhn-faengt-an-zu-gackern.mp3",
  "./assets/sounds/placeholders/salamisound-1020014-fussgaenger-auf-dem-buergersteig.mp3",
  "./assets/sounds/placeholders/salamisound-1078590-rechenmaschine.mp3",
  "./assets/sounds/placeholders/salamisound-4635592-ka-ching-registerkasse-cha.mp3",
  "./assets/sounds/placeholders/salamisound-4818292-knarzen-knarren.mp3",
  "./assets/sounds/placeholders/salamisound-6677624-belebte-fussgaengerzone.mp3",
  "./assets/sounds/placeholders/salamisound-6684821-nespresso-espresso.mp3",
  "./assets/sounds/placeholders/salamisound-7140129-abnehmende-rotation-einer.mp3",
  "./assets/sounds/placeholders/salamisound-7495796-frauenstimme-ohhhhh-und.mp3",
  "./assets/sounds/placeholders/salamisound-7989463-doppelkammer-luftpumpe.mp3",
];

const quadrantNumber = soundList.length * 2;
const data = Array.from({ length: quadrantNumber }, (_, index) => index);

function App() {
  return (
    <>
      <div className="grid-container">
        {data.map((item) => (
          <QuadrantButton key={item} sound={testSound} />
        ))}
      </div>
    </>
  );
}

export default App;
