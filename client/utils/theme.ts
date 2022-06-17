import { DefaultTheme } from "styled-components";
import colors from "tailwindcss/colors";

const theme: DefaultTheme = {
  colors: {
    primary: colors.pink["400"],
    secondary: "#fff",
    background: colors.indigo["50"],
    primaryHover: colors.pink["200"],
    secondaryHover: colors.pink["700"],
    text: colors.neutral["900"],
    textSecondary: colors.neutral["500"],
    textTertiary: colors.neutral["300"],
  },
};

export default theme;
