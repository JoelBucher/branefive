import { createStyles, rem } from '@mantine/core';

export const useMusicStyle = createStyles((theme) => ({
    progressBar: {
      '&:not(:first-of-type)': {
        borderLeft: `${rem(3)} solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
        }`,
      },
    },
  }));