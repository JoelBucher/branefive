import { createStyles, rem } from '@mantine/core';
import { HEADER_HEIGHT } from '../../../utils/constants';

export const useHeaderStyles = createStyles((theme) => ({
    root: {
      position: 'relative',
      zIndex: 1,
    },
  
    dropdown: {
      position: 'absolute',
      top: HEADER_HEIGHT,
      left: 0,
      right: 0,
      zIndex: 2,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      borderTopWidth: 0,
      overflow: 'hidden',
  
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
    },
  
    links: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    burger: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  
    link: {
      display: 'block',
      lineHeight: 1,
      borderRadius: theme.radius.sm,
      textDecoration: 'none',
      color: "white",
      fontSize: 15,
      fontWeight: 500,
      padding: 10,

  
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : "white",
      },
  
      [theme.fn.smallerThan('sm')]: {
        borderRadius: 0,
        padding: theme.spacing.md,
      },
    },
  
    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.colors.red[6],
        color: theme.fn.variant({ variant: 'light', color: theme.colors.red[6] }).color,
      },
    },
  }));
  