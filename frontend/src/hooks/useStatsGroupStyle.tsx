import { createStyles, rem } from '@mantine/core';

export const useStatsGroupStyle = createStyles((theme) => ({
    root: {
      display: 'flex',
      backgroundImage: `linear-gradient(-60deg, ${theme.colors.red[5]} 0%, ${
        theme.colors.red[7]
      } 100%)`,
      padding: `calc(${theme.spacing.xl} * 1.5)`,
      borderRadius: theme.radius.md,
  
      [theme.fn.smallerThan('sm')]: {
        flexDirection: 'column',
      },
    },
  
    title: {
      color: theme.white,
      textTransform: 'uppercase',
      fontWeight: 700,
      fontSize: theme.fontSizes.sm,
    },
  
    count: {
      color: theme.white,
      fontSize: rem(32),
      lineHeight: 1,
      fontWeight: 700,
      marginBottom: theme.spacing.md,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  
    description: {
      color: theme.colors[theme.primaryColor][0],
      fontSize: theme.fontSizes.sm,
      marginTop: rem(5),
    },
  
    stat: {
      flex: 1,
  
      '& + &': {
        paddingLeft: theme.spacing.xl,
        marginLeft: theme.spacing.xl,
        borderLeft: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,
  
        [theme.fn.smallerThan('sm')]: {
          paddingLeft: 0,
          marginLeft: 0,
          borderLeft: 0,
          paddingTop: theme.spacing.xl,
          marginTop: theme.spacing.xl,
          borderTop: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,
        },
      },
    },
  }));