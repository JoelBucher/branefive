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
      padding: `${rem(8)} ${rem(12)}`,
      borderRadius: theme.radius.sm,
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,
  
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      },
  
      [theme.fn.smallerThan('sm')]: {
        borderRadius: 0,
        padding: theme.spacing.md,
      },
    },
  
    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.colors.red[5] }).background,
        color: theme.fn.variant({ variant: 'light', color: theme.colors.red[5] }).color,
      },
    },
  }));
  