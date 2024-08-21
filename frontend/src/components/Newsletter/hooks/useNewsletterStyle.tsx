import { createStyles, rem } from '@mantine/core';
import { THEME_COLOR } from '../../../utils/constants';

export const useNewsletterStyle = createStyles((theme) => ({
    wrapper: {
      position: 'relative',
      boxSizing: 'border-box',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },
  
    inner: {
      position: 'relative',
      paddingTop: rem(200),
      paddingBottom: rem(120),
  
      [theme.fn.smallerThan('sm')]: {
        paddingBottom: rem(80),
        paddingTop: rem(80),
      },
    },
  
    description: {
      marginTop: theme.spacing.xl,
      fontSize: rem(24),
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(18),
      },
    },
  
    controls: {
      marginTop: `calc(${theme.spacing.xl} * 2)`,
  
      [theme.fn.smallerThan('sm')]: {
        marginTop: theme.spacing.xl,
      },
    },
  
    control: {
      height: rem(54),
      paddingLeft: rem(38),
      paddingRight: rem(38),
      background: THEME_COLOR, //6
  
      '&:hover': {
        background: THEME_COLOR
      }
    },
  }));
  