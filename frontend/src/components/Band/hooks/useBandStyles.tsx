import { createStyles, rem } from "@mantine/core";
import { THEME_COLOR } from "../../../utils/constants";

export const useBandStyles = createStyles((theme) => ({
  
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
      background: THEME_COLOR, // 6

      ":hover" : {
        background: THEME_COLOR,
      }
    },
  }));
  