//import "./App.css"
import Countdown from './CountDown'

const App = () =>
     <>
      <Countdown targetDate={new Date("2026-06-13T14:00:00")} />

      {/* Vasen alakulma */}
      <img 
        src={"https://media.baamboozle.com/uploads/images/318712/1620711574_1985882_gif-url.gif"} 
        alt="left gif" 
        style={{
          position: "fixed",
          bottom: 10,
          left: "25%",   // siirrä keskemmälle
          transform: "translateX(-50%)", // keskittää kuvan tuohon kohtaan
          width: "100px",
          height: "auto",
          zIndex: 1000,
        }}  
      />

      {/* Oikea alakulma */}
      <img 
        src={"https://img1.picmix.com/output/stamp/normal/1/8/0/5/485081_db2dd.gif"} 
        alt="right gif" 
        style={{
          position: "fixed",
          bottom: 10,
          left: "75%",   // siirrä keskemmälle
          transform: "translateX(-50%)", // keskittää kuvan tuohon kohtaan
          width: "100px",
          height: "auto",
          zIndex: 1000,
        }} 
      />
    </>

export default App
