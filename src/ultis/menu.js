import icons from "./icons";

const {
  BsMusicPlayer,
  BsFileMusic,
  SiYoutubemusic,
  GiMusicSpell,
  RiFolderMusicLine,
} = icons;

export const sidebarMenu = [
  {
    path: "my-music",
    text: "Cá nhân",
    icons: <BsFileMusic size={24} />,
  },
  {
    path: "",
    text: "Khám phá",
    end: true,
    icons: <SiYoutubemusic size={24} />,
  },
  {
    path: "zing-chart",
    text: "#zingchart",
    icons: <GiMusicSpell size={24} />,
  },
  {
    path: "radio",
    text: "Radio",
    icons: <BsMusicPlayer size={24} />,
  },
  {
    path: "follow",
    text: "Theo dõi",
    icons: <RiFolderMusicLine size={24} />,
  },
];
