//vars

export const mobSize: number = 567;

//interfaces
export interface Links {
  id: number,
  url: string,
  title: string,
  resource?: {
    webm: string,
    mp4: string,
    svg: string
  }
}

export interface LinksRes {
  id: number,
  url: string,
  title: string,
  resource: {
    webm: string,
    mp4: string,
    svg: string
  }
}


