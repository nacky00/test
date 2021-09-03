const Theme = {
    color: {
        black: "#000000",
        white: "#FFFFFF",
        grey200: "#EEEEEE",
        grey400: "#BDBDBD",
        grey700: "#616161",
        grey900: "#212121",
        goldDark: "#302814"
    },
    font: {
        xxlarge: "2.5rem", // 16px * 2.5 = 40px
        xlarge: "2rem", // 16px * 2 = 24px
        large: "1.25rem", // 16px * 1.25 = 20px
        medium: "1rem", // 16px * 1 = 16px
        small: "0.75rem", // 16px * 0.75 = 12px
        tiny: "0.625rem" // 16px * 0.625 = 10px
    },
    weight: {
        bold: 700,
        medium: 600,
        normal: 400
    },
    letterSpacing: {
        mediumWide: "1.5px"
    },
    space: {
        xlarge: "24rem",
        large: "12rem",
        medium: "6rem",
        small: "4rem",
        tiny: "2rem",
        micro: "1rem"
    },
    mediaQuery: {
        mobile: "@media(max-width: 960px)",
        desktop: "@media(min-width: 961px)"
    }
}

export default Theme