import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  Grid,
} from '@mantine/core';
import { IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import { useContactUsStyle } from '../hooks/useContactUsStyle';

export function ContactUs() {
    const { classes } = useContactUsStyle();
  
    return (
      <Grid justify="center">
      <Grid.Col md={10} lg={7}>
      <Paper shadow="md" radius="lg">
        <div className={classes.wrapper}>
          <div className={classes.contacts}>
            <Text fz="lg" fw={700} className={classes.title} c="#fff">
              Contact information
            </Text>

            <table>
              <tr className={classes.contactIconElement}>
                <td><IconAt size={30}></IconAt></td>
                <td>
                  <p className={classes.iconListText}>Email</p>
                  <p className={classes.iconListText}><b>info[at]branefive.com</b></p>
                </td>
              </tr>
              <tr className={classes.contactIconElement}>
                <td><IconPhone size={30}></IconPhone></td>
                <td>
                  <p className={classes.iconListText}>Phone</p>
                  <p className={classes.iconListText}><b>041 917 01 18</b></p>
                </td>
              </tr>
              <tr className={classes.contactIconElement}>
                <td><IconMapPin size={30}></IconMapPin></td>
                <td>
                  <p className={classes.iconListText}>Address</p>
                  <p className={classes.iconListText}><b>Branefive <br></br> Rankstrasse 4 <br></br>6294 Ermensee</b></p>
                </td>
              </tr>
            </table>
          </div>
  
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
        </div>
      </Paper>
      </Grid.Col>
    </Grid>
    );
}