import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
    colors: {
        blue_100: "#587BE0",
        blue_200: "#799CFF",
        blue_300: "#9DB7FF",
        blue_400: "#CFDCFF",
        blue_500: "#EAEFFF",
        accent: "#B072FF",
        accent_2: "#885FFF",
        accent_3: "#3BD0AC",
        text_100: "#33373B",
        text_200: "#414047",
        text_300: "#6F6E73",
        text_400: "#A0A0A1",
        text_500: "#BEBEC2",
        text_600: "#DFDFE0",
        text_700: "#F5F5F5",
        text_800: "#FCFCFC∏",
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    },
    buttons: {
        primary: {
            color: 'white',
            bg: 'red',
        },
        secondary: {
            color: 'white',
            bg: 'tomato',
        },
        disabled: {

        }
    }
};

type Props = { children: React.ReactNode };

const Theme: React.FC<Props> = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;