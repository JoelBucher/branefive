import {createStyles, rem } from '@mantine/core';
import { THEME_COLOR } from '../../../utils/constants';

export const useTourcardStyle = createStyles((theme) => ({
    card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },
  
    section: {
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : "white"
      }`,
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      paddingBottom: theme.spacing.md,
    },
  
    like: {
      color: THEME_COLOR, //6
    },
  
    label: {
      textTransform: 'uppercase',
      fontSize: theme.fontSizes.xs,
      fontWeight: 700,
    },
  }));