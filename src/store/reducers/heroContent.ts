import {createSlice} from "@reduxjs/toolkit";
import {Links} from "@/exports/globalVars";

interface Navigation {
    topNav: Links[],
    bottomNav: Links[],
    tarotLinks: Links[]
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
    ],
    tarotLinks : [
      {
        id: 1,
        url: "/LatinTarot",
        title: "Latin Tarot",
        resource: {
          webm: '/animations/1.webm',
          mp4: '/animations/1_1.mp4',
          svg: '/images/home/tarot-1.svg'
        }
      },
      {
        id: 2,
        url: "/LoveTarot",
        title: "Love Tarot",
        resource: {
          webm: '/animations/3.webm',
          mp4: '/animations/3_3.mp4',
          svg: '/images/home/tarot-2.svg'
        }
      },
      {
        id: 3,
        url: "/YesNoTarot",
        title: "Yes / No Tarot",
        resource: {
          webm: '/animations/2.webm',
          mp4: '/animations/2_2.mp4',
          svg: '/images/home/tarot-3.svg'
        }
      }
    ],
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

