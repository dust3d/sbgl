import { types, Container, Component } from 'globals'

export class AboutUs extends Component {
  state = {}

  static contextTypes = {
    runtime: types.object
  }

  componentWillMount() {
    const { runtime } = this.context
    const { history } = this.props
    runtime.set('history', history)
  }

  render() {
    return (
      <div>
      <Container page>
        <Header as="h1" content="Title" subheader="Subtitle" />

        <Segment piled>
          This is the AboutUs Component.
        </Segment>
      </Container>
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <List link inverted>
                    <List.Item as={Link} to='/'>Home</List.Item>
                    <List.Item as={Link} to='/quote'>Instant Quote</List.Item>
                    <List.Item as={Link} to='/referral'>$50 Referral</List.Item>
                    <List.Item as={Link} to='/faq'>FAQ</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <List link inverted>
                    <List.Item as={Link} to='/testimonials'>Testimonials</List.Item>
                    <List.Item as={Link} to='/login'>Login</List.Item>
                    <List.Item as={Link} to='/signup'>Sign Up</List.Item>
                    <List.Item as={Link} to='/contact'>Contact Us</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Small Business General Liability</Header>
                  <p>Lowest rates in the industry &mdash; Guaranteed!</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        </div>
    )
  }
}

export default AboutUs
