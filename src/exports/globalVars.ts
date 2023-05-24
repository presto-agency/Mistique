//vars
import {MotionStyle} from "framer-motion";

export const mobSize: number = 567;

//interfaces
export interface Links {
  id: number,
  url: string,
  title: string
}

export interface Navigation {
  topNav: Links[],
  bottomNav: Links[]
}


