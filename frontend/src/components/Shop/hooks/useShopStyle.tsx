import { createStyles, rem } from "@mantine/core";
import { THEME_COLOR } from "../../../utils/constants";

export const useShopStyle = createStyles((theme) => ({
    card: {
      transition: 'transform 150ms ease, box-shadow 150ms ease',
  
      '&:hover': {
        transform: 'scale(1.01)',
        boxShadow: theme.shadows.md,
      },
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(62),
      fontWeight: 900,
      lineHeight: 1.1,
      margin: 0,
      padding: 0,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(42),
        lineHeight: 1.2,
      },
    },

    button: {
      marginTop: 15,
      background: THEME_COLOR, //6

      '&:hover': {
        background: THEME_COLOR
      }
    },

    available: {
      height: 10,
      width: 10,
      borderRadius: "50%",
      display: "inline-block",
      backgroundColor: theme.colors.green[6],
    },

    notAvailable: {
      height: 10,
      width: 10,
      borderRadius: "50%",
      display: "inline-block",
      backgroundColor: THEME_COLOR, //6
    },

  }));
  