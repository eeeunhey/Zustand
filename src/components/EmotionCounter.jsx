import emotionStore from "../stores/emotionStore";
import HeartIcon from "./HeartIcon";
import { ArrowUp, ArrowDown, RotateCcw } from "lucide-react";

const EmotionCounter = () => {
  const { count, emoji, increase, decrease, reset, heartFlash, flashHeart } =
    emotionStore();

  const getHeartState = () => {
    if (heartFlash === "red") return "heartIcon flash-red";
    if (heartFlash === "blue") return "heartIcon flash-blue";
    return "heartIcon";
  };

  return (
    <div className="card">
      <div className="emoji">{emoji}</div>
      <div class="count">{count}</div>
      <button className="heartBtn" onClick={() => flashHeart("red")}>
        <HeartIcon className={getHeartState()} />
      </button>
      <div class="controls">
        <button
          class="btn decrease"
          onClick={() => {
            decrease();
            flashHeart("blue");
          }}
        >
          <ArrowDown size={20} />
        </button>
        <button className="btn " onClick={reset}>
          <RotateCcw size={20} />
        </button>
        <button
          className="btn increase"
          onClick={() => {
            increase();
            flashHeart("red");
          }}
        >
          <ArrowUp size={20} />
        </button>
      </div>
      <div>
        <input
          type="number"
          //   value={inputValue}
          className="input"
          placeholder="입력 값만큼 증가"
        />
        <button class="btn decrease">
          <ArrowDown size={20} />
        </button>
        <button className="btn increase">
          <ArrowUp size={20} />
        </button>
      </div>

      <div className="hint">감정 단계: 😭 😢 😔 🙂 🥰 😍 🥳 🔥 🚀 </div>
    </div>
  );
};

export default EmotionCounter;
