import {
  Paper,
  Grid,
  Space,
} from '@mantine/core';
import { IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import { useContactUsStyle } from './hooks/useContactUsStyle';
import { DataService } from '../../services/DataService';
import { RenderLanguageText } from '../../services/useLanguage';
/*
  <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
            <Text fz="lg" fw={700} className={classes.title}>
              Get in touch
            </Text>
  
            <div className={classes.fields}>
              <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <TextInput label="Your name" placeholder="Your name" />
                <TextInput label="Your email" placeholder="hello@mantine.dev" required />
              </SimpleGrid>
  
              <TextInput mt="md" label="Subject" placeholder="Subject" required />
  
              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
              />
  
              <Group position="right" mt="md">
                <Button type="submit" className={classes.control}>
                  Send message
                </Button>
              </Group>
            </div>
          </form>
          */
export function ContactUs() {
    const { classes } = useContactUsStyle();
    const contactData = DataService.getContactData();
  
    return (
      <>
        <Space h={50}/>
        <Grid justify="center">
        <Grid.Col md={10} lg={7}>
        <Paper shadow="md">
          <div className={classes.wrapper}>
            <div className={classes.contacts}>

              <table>
                <tbody>
                  <tr className={classes.contactIconElement}>
                    <td><IconAt size={30}></IconAt></td>
                    <td>
                      <p className={classes.iconListText}><b>{contactData.mail}</b></p>
                    </td>
                  </tr>
                  <tr className={classes.contactIconElement}>
                    <td><IconPhone size={30}></IconPhone></td>
                    <td>
                      <p className={classes.iconListText}><b>{contactData.phone}</b></p>
                    </td>
                  </tr>
                  <tr className={classes.contactIconElement}>
                    <td><IconMapPin size={30}></IconMapPin></td>
                    <td>
                      <p className={classes.iconListText}>
                        <b>
                          {contactData.address1}<br/>
                          {contactData.address2}<br/>
                          {contactData.address3}
                        </b>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{marginLeft: 20, marginTop: 20}}>
              <h2>
                <RenderLanguageText text={contactData.header}/>
              </h2>
              <p>
                <RenderLanguageText text={contactData.subtitle}/>
              </p>
            </div>
            
          </div>
        </Paper>
        </Grid.Col>
      </Grid>
    </>
    );
}