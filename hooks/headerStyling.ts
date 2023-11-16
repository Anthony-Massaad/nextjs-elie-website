interface HeaderStyleReturnValue {
  headerStyle: (color: string, hoverColor: string, bgColor: string) => void;
  topLeftStyle: (color: string) => void;
}

const headingStyling = (): HeaderStyleReturnValue => {
  const headerStyle = (
    color: string,
    hoverColor: string,
    bgColor: string
  ): void => {
    const header = document.querySelector("header");
    if (header) {
      header.style.setProperty("--txt-color", color);
      header.style.setProperty("--txt-hover-color", hoverColor);
      header.style.setProperty("--header-bg-color", bgColor);
    }
  };

  const topLeftStyle = (color: string): void => {
    const initals = document.getElementById("em-initials");
    const backButton = document.getElementById("nav-back");
    initals && initals.style.setProperty("--path-fill", color);
    backButton && backButton.style.setProperty("--path-fill", color);
  };

  return { headerStyle, topLeftStyle };
};

export default headingStyling;
