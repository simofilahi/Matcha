// COLORS
const color = {
  bayOfMany: "#273B80",
  mercury: "#E5E5E5",
  neonCarrot: "#FF8C34",
  azureRadiance: "#0076FF",
  white: "#ffffff",
  black: "#000000",
  hitGray: "#AAB3B8",
  havelockBlue: "#3D93D3",
  indigo: "#4562C7",
  crusta: "#fb7627",
  tundora: "#4A4A4A",
  curiousBlue: "#3498DB",
  paleSky: "#6D7C85",
  electricViolet: "#7839F9",
  wildSand: "#F6F6F6",
  Boulder: "#767676",
  Alto: "#D6D6D6",
  mountainMeadow: "#15CC79",
  lavenderRose: "#F99DF0",
};

// ICON CLASS NAME
const icon = {
  // CHAT PAGE ICONS
  keyboard: "fas fa-keyboard",
  emotion: "far fa-grin",
  image: "far fa-image",
  send: "far fa-paper-plane",
  search: "fas fa-search",
  ellipsis: "fas fa-ellipsis-v",
  // SEARCH PAGE ICONS,
  camera: "fas fa-camera",
  heart: "fas fa-heart",
  message: "fas fa-comment-dots",
  // EXPLORE PAGE
  dislike: "far fa-times-circle",
  // LOGIN PAGE
  facebook: "fab fa-facebook",
  twiter: "fab fa-twitter",
  instagram: "fab fa-instagram",
  // SETTING PAGE
  gear: "fas fa-cog",
  galary: "fas fa-th-large",
  fire: "fas fa-fire-alt",
};

// ICON SIZE
const iconSize = {
  small: "16px",
  medium: "24px",
  large: "32px",
};

//  FONT SIZE
const fontSize = {
  small: "12px",
  medium: "24px",
  large: "32px",
};

// Custom  Size
const CustomSize = (fontSize, size = 0) => {
  fontSize = fontSize.replace(/\D/g, "");

  return `${parseInt(fontSize) + size}px`;
};

//  PLACEHOLDERS
const placeholder = {
  search: "Search",
  email: "e.g example@example.com",
  password: "At least 8 characters",
  username: "User name",
  firstname: "First name",
  lastname: "Last name",
  searchForMore: "Search for more",
  // BIRTHDAY SELECT
  day: "Day",
  month: "Month",
  year: "Year",
};

//  SCREEN SIZE
// const screenSize = {
//   mobileS: "320px",
//   mobileM: "375px",
//   mobileL: "425px",
//   tablet: "768px",
//   laptop: "1024px",
//   desktop: "2560px",
// };

// SCREEN SIZE
const screenSize = {
  mobile: "600px",
  tablet: "768px",
  desktop: "1024px",
};

// MEDIA QUERRIES
// const device = {
//   mobileS: `(min-width: ${screenSize.mobileS})`,
//   mobileM: `(min-width: ${screenSize.mobileM})`,
//   mobileL: `(min-width: ${screenSize.mobileL})`,
//   tablet: `(min-width: ${screenSize.tablet})`,
//   laptop: `(min-width: ${screenSize.laptop})`,
//   desktop: `(min-width: ${screenSize.desktop})`,
// };

// DEVICE SIZE
const device = {
  mobile: `min-width: ${screenSize.mobile}`,
  tablet: `min-width: ${screenSize.tablet}`,
  desktop: `min-width: ${screenSize.desktop}`,
};

export {
  color,
  icon,
  placeholder,
  iconSize,
  fontSize,
  device,
  screenSize,
  CustomSize,
};
