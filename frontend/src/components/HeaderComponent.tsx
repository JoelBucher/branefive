import React from 'react'
import { useState } from 'react';
import {
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import { HEADER_HEIGHT } from '../utils/constants';
import { useHeaderStyles } from '../hooks/useHeaderStyles';
import { DataService } from '../services/DataService';
import { translate } from '../services/LanguageService';

export function HeaderResponsive() {
  const links = DataService.getHeaderData().links;
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useHeaderStyles();

  const items = links.map((link) => (
    <a
      key={link.label.en}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {translate(link.label)}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <MantineLogo size={28} />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}