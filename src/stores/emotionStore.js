import { create } from "zustand";

const emojiState = (emoji) => {
  if (emoji <= -10) return "😭";
  if (emoji <= -5) return "😢";
  if (emoji <= -1) return "😔";
  if (emoji === 0) return "🙂";
  if (emoji <= 3) return "🥰";
  if (emoji <= 5) return "😍";
  if (emoji <= 10) return "🥳";
  if (emoji <= 15) return "🔥";
  return "🚀";
};

const emotionStore = create((set) => ({

  count: 0,
  emoji: "🙂",
  heartFlash: null,
//   emojiPop: false,
    inputValue: "",

    inputValueState: (value) => set({ inputValue:value}),

//   emojiPop: () => {
//     set({ emojiPop: true });
//     setTimeout(() => set({ emojiPop: false }), 200);
//   },

  increase: () =>
    set((state) => ({
      count: state.count + 1,
      emoji: emojiState(state.count + 1),
    })),

  increaseBy: (value) => set((state) => ({ 
    count: state.count + value,
    emoji: emojiState(state.count + value),
   })),

  decrease: () =>
    set((state) => ({
      count: state.count - 1,
      emoji: emojiState(state.count - 1),
    })),

  decreaseBy: (value) => 
    set((state) => ({ 
        count: state.count - value,
        emoji: emojiState(state.count - value),
     })),

  reset: () =>
    set(() => ({
      count: 0,
      emoji: emojiState(0),
      inputValue: "",

    })),

  flashHeart: (color) => {
    set({ heartFlash: color });
    setTimeout(() => set({ heartFlash: null }), 200);
  },
}));

export default emotionStore;
