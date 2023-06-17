import { Text, Container, ActionIcon, Group } from '@mantine/core';
import { useFooterStyle } from './hooks/useFooterStyle'
import { FooterData } from './types/FooterData';
import { DataService } from '../../services/DataService';
import { Link } from 'react-router-dom';
import { FooterLinkGroup } from './types/FooterLinkGroup';
import logo from '../../assets/branefive_logo.svg';
import { SocialLinkType } from './types/SocialLinkType';
import { IconService } from '../../services/IconService';
import { RenderLanguageText } from '../../services/useLanguage';

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
        <RenderLanguageText text = {link.label}/>
      </Link>
      <br></br>
    </div>
  );
      return <>{links}</>
    }
  
function FooterGroup(props : {groups : FooterLinkGroup[]}){
  const { classes } = useFooterStyle();
  
  const groups = props.groups.map((group, index) =>
    <div className={classes.wrapper} key={index}>
      <Text className={classes.title}>{group.title}</Text>
      <FooterLink group = {group}/>
    </div>
  );

  return <>{groups}</>;
}

function Socials(props : {socials : SocialLinkType[]}){
  const socials = props.socials.map((social, index) => {
    const Icon = IconService.get(social.iconAssetId);
    
    if(Icon !== undefined){
      return(
        <ActionIcon size={30} component={'a'} href={social.link} mr={10} key={index}>
          <Icon size="2rem" stroke={1.2} />
        </ActionIcon>
      )}
      return(<></>);
    }
  );

  return <>{socials}</>
}

export function FooterResponsive() {
  const data : FooterData = DataService.getFooterData();
  const { classes } = useFooterStyle();
    return (
      <footer className={classes.footer}>
        <Container className={classes.inner}>
          <div className={classes.logo}>
            <Link to={"/"}>
              <img src={logo} height={45} alt='logo'/>
            </Link>

            <Text size="xs" color="dimmed" className={classes.description}>
              <RenderLanguageText text = {data.slogan}/>
            </Text>
          </div>
          <div className={classes.groups}>
            <FooterGroup groups = {data.linkGroups}/>
          </div>
        </Container>
        <Container className={classes.afterFooter}>
          <Text color="dimmed" size="sm">
            <RenderLanguageText text = {data.copyright}/>
          </Text>
  
          <Group spacing={0} className={classes.social} position="right" noWrap>
            <Socials socials = {data.socials}/>
          </Group>
        </Container>
      </footer>
    );
  }
