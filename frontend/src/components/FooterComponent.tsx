import { Text, Container, ActionIcon, Group } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';
import { useFooterStyle } from '../hooks/useFooterStyle'
import { FooterData } from '../types/FooterData';
import { DataService } from '../services/DataService';
import { translate } from '../services/LanguageService';
import { Link } from 'react-router-dom';
import { FooterLinkGroup } from '../types/FooterLinkGroup';
import logo from '../assets/branefive_logo.svg';

interface FooterLinkGroupParameter {
  group: FooterLinkGroup
}

function FooterLink({group} : FooterLinkGroupParameter){
  const links = group.links.map((link, index) =>
    <div key={index}>
      <Link
        to={link.link}
        style={{ textDecoration: 'none', color: "white" }}
      >
        {translate(link.label)}
      </Link>
      <br></br>
    </div>
  );
      return <>{links}</>
    }
  
function FooterGroup(){
  const { classes } = useFooterStyle();
  const data : FooterData = DataService.getFooterData();
  const groups = data.linkGroups.map((group, index) =>
    <div className={classes.wrapper} key={index}>
      <Text className={classes.title}>{group.title}</Text>
      <FooterLink group = {group}/>
    </div>
  );

  return <>{groups}</>;
}

export function FooterResponsive() {
  const { classes } = useFooterStyle();
    return (
      <footer className={classes.footer}>
        <Container className={classes.inner}>
          <div className={classes.logo}>
            <Link to={"/"}>
              <img src={logo} alt="Your SVG" height={45}/>
            </Link>

            <Text size="xs" color="dimmed" className={classes.description}>
              Was die chönnd, chömmiir scho lang.
            </Text>
          </div>
          <div className={classes.groups}>
            <FooterGroup/>
          </div>
        </Container>
        <Container className={classes.afterFooter}>
          <Text color="dimmed" size="sm">
            © 2023 Branefive. All rights reserved.
          </Text>
  
          <Group spacing={0} className={classes.social} position="right" noWrap>
            <ActionIcon size="lg">
              <IconBrandTwitter size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandYoutube size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandInstagram size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </Group>
        </Container>
      </footer>
    );
  }
