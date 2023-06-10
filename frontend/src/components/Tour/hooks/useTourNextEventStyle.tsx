import { createStyles } from '@mantine/core';

export const useTourNextEventStyle  = createStyles((theme) => ({
    subtitle: {
        color: "white",
        marginTop: -10,
        marginBottom: -10,
    },

    subsubtitle: {
        color: "white",
        fontSize: 17,
        margin: 0,
        marginRight: 30,
    },

    icon: {
        color: "white",
        size: 5,
        margin: 8,
    },

    timeline : {
        borderRadius: 10,
        paddingBottom: 5,
        paddingTop: 5,

        '&:hover': {
            background: theme.colors.dark[6],
        },
        '&:active': {
            background: theme.colors.dark[8],
        },
    }
    })
);