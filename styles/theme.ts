export type IThemeInterface = typeof theme;

const theme = {
    color: {
        background: "white",
        achromatic: "#efefef",

        main: "#e45d4c",
        main40: "#ffa8a8",
        main30: "#ffc9c9",
        main20: "#ffe3e3",
        main10: "#fff5f5",
        sub: "#ff8787",

        white: "#ffffff",

        black: "#000000",
        black99: "#212529",
        black90: "#343a40",
        black80: "#495057",
        black70: "#868e96",
        black60: "#adb5bd",
        black10: "#f1f3f5",

        gradient: "linear-gradient(160deg ,#ff8787, #e45d4c)"
    },

    zIndex: {
        modal01: 10000,
        navigation: 1000
    },

    smallPoint: "420px",
    mediumPoint: "764px",
    widePoint: "1260px",

    BORDER_RADIUS: "6px"
};

export default theme;
