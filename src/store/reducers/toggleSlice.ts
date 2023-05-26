import { createSlice} from "@reduxjs/toolkit";

interface ToggleState {
  isActive: boolean;
}

const initialState: ToggleState = {
  isActive: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleActive(state) {
      state.isActive = !state.isActive;
    },
  },
});

export const { toggleActive } = toggleSlice.actions;

export default toggleSlice.reducer;
