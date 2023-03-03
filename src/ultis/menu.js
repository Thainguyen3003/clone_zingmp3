import icons from "./icons";

const { BsFileMusicFill, BsFileMusic } = icons;
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
    icons: <BsFileMusic size={24} />,
  },
  {
    path: "zing-chart",
    text: "#zingchart",
    icons: <BsFileMusic size={24} />,
  },
  {
    path: "radio",
    text: "Radio",
    icons: <BsFileMusic size={24} />,
  },
  {
    path: "follow",
    text: "Theo dõi",
    icons: <BsFileMusic size={24} />,
  },
];
