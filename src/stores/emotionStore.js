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

const emotionStore = create((set, get) => ({
  count: 0,
  emoji: "🙂",
  heartFlash: null,
  emojiPop: false,

  emojiPop: () => {
    set({ emojiPop: true });
    setTimeout(() => set({ emojiPop: false }), 200);
  },

  increase: () =>
    set((state) => ({
      count: state.count + 1,
      emoji: emojiState(state.count + 1),
    })),

  increaseBy: (amount) => set((state) => ({ 
    count: state.count + amount,
    emoji: emojiState(state.count - amount),
   })),

  decrease: () =>
    set((state) => ({
      count: state.count - 1,
      emoji: emojiState(state.count - 1),
    })),

  decreaseBy: (amount) => 
    set((state) => ({ 
        count: state.count - amount,
        emoji: emojiState(state.count - amount),
     })),

  reset: () =>
    set(() => ({
      count: 0,
      emoji: emojiState(0),
    })),

  flashHeart: (color) => {
    set({ heartFlash: color });
    setTimeout(() => set({ heartFlash: null }), 200);
  },
}));

export default emotionStore;
