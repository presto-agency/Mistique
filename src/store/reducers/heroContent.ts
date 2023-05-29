import {createSlice} from "@reduxjs/toolkit";
import {Links} from "@/exports/globalVars";

interface Navigation {
    topNav: Links[],
    bottomNav: Links[]
}

interface Nav {
  navigation : Navigation
}

const initialState: Nav = {
  navigation: {
    topNav: [
      {
        id: 1,
        url: "/",
        title: "Home"
      },
      {
        id: 2,
        url: "/TarotReading",
        title: "Tarot reading"
      },
      {
        id: 3,
        url: "/Blog",
        title: "Blog"
      },
      {
        id: 4,
        url: "/Help",
        title: "Help"
      },
      {
        id: 5,
        url: "/Privacy",
        title: "Privacy"
      },
    ],
    bottomNav: [
      {
        id: 1,
        url: "/Terms",
        title: "Terms"
      },
      {
        id: 2,
        url: "/Privacy",
        title: "Privacy"
      },
      {
        id: 3,
        url: "/Cookies",
        title: "Cookies"
      },
    ]
  }
};

const heroContent = createSlice({
  name: "navigationLinks",
  initialState,
  reducers: {
    setNavigation(state) {
      return state
    },
  },
});

export const { setNavigation } = heroContent.actions;

export default heroContent.reducer;

