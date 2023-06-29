import { createSlice} from "@reduxjs/toolkit";

interface ToggleState {
  isActive: boolean;
  isLoaded: boolean;
}

const initialState: ToggleState = {
  isActive: false,
  isLoaded: false
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleActive(state) {
      state.isActive = !state.isActive;
    },
    toggleLoaded(state) {
      state.isLoaded = !state.isLoaded;
    },
  },
});

export const { toggleActive, toggleLoaded } = toggleSlice.actions;

export default toggleSlice.reducer;
