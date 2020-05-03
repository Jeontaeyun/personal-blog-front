export type IThemeInterface = typeof theme;

const theme = {
    color: {
        background: "white",
        achromatic: "#efefef",

        main: "#e45d4c",
        sub: "#ff8787",

        white: "#ffffff",

        black: "#000000",
        black90: "#868e96",
        black80: "#adb5bd",
        black70: "#ced4da",

        gradient: "linear-gradient(160deg ,#ff8787, #e45d4c)"
    },
    smallPoint: "420px",
    mediumPoint: "764px",
    widePoint: "1260px",

    BORDER_RADIUS: "6px"
};

export default theme;
