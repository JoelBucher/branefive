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
import { BUTTON_BORDER_RADIUS, HEADER_HEIGHT } from '../../utils/constants';
import { useHeaderStyles } from './hooks/useHeaderStyles';
import { DataService } from '../../services/DataService';
import { Link } from 'react-router-dom';
import logo from '../../assets/branefive_logo.svg';
import { LanguageIcons } from './components/LanguageIcons';
import { RenderLanguageText } from '../../services/useLanguage';

export function HeaderResponsive() {
  const links = DataService.getHeaderData().links;
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useHeaderStyles();

  const items = links.map((link, index) =>
    <Link
      key={index}
      to={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={() => {
        setActive(link.link);
        close();
      }}
      style={{borderRadius: BUTTON_BORDER_RADIUS}}
    >
      <p style={{fontSize: 20}}>
      <RenderLanguageText text = {link.label}/>
      </p>
    </Link>
  );

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Link to={"/"}>
          <img src={logo} height={80} alt="logo"/>
        </Link>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        
        <LanguageIcons/>

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