const Sizes = {
  mobileS: "320px",
  iPhones: "414px",
  mobileL: "375px",
  mobileM: "360px",
  galaxsiTabS4: "1138",
  laptop: "1024px",
  tablet: "768px",
  medium: "800px",
};

export const device = {
  mobileS: `(min-width: ${Sizes.mobileS})`,
  iPhones: `(min-width: ${Sizes.iPhones})`,
  mobileL: `(min-width: ${Sizes.mobileL})`,
  tablet: `(min-width: ${Sizes.tablet})`,
  laptop: `(min-width: ${Sizes.laptop})`,
  mobileM: `(min-width: ${Sizes.mobileM})`,
  galaxsiTabS4:`(min-width: ${Sizes.mobileM})`,
  medium:`(min-width: ${Sizes.medium})`,

  

};
