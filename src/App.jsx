import "./App.css";
import CountBox from "./components/CountBox";
import EmotionCounter from "./components/EmotionCounter";
import counterStore from "./stores/counterStore";
import emotionStore from "./stores/emotionStore";
const App = () => {
  const {  change } = counterStore();
 const {count} = emotionStore();

  return (
    <div>
      <div >
        <div>
          {/* <CountBox /> */}
        <EmotionCounter />
        </div>
        <div>


        </div>
        {/* <button onClick={() => change("increase")}>증가하기</button>
        <button onClick={() => increaseBy(10)}>10씩증가</button>
        <button onClick={() => change("decrease")}>decrease</button>
        <button onClick={() => decreaseBy(10)}>10씩 감소</button> */}
      </div>
    </div>
  );
};

export default App;
