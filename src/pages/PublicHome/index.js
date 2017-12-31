import { Segment, Container, types, Component } from 'globals'
import MainHeader from 'components/MainHeader'

export class PublicHome extends Component {
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
      <Container>
        <MainHeader />
        <Menu stackable>
        <Menu.Item>
          <Link to="/" children="Home" />
        </Menu.Item>
        <Menu.Item>
          <Link to="/quote" children="QUOTE" />
        </Menu.Item>
        <Menu.Item>
          <Link to="/about-us" children="About" />
         </Menu.Item>
          <Menu.Item>
          <Link to="/contact" children="Contact" />
           </Menu.Item>
          <Menu.Item>
          <Link to="/faq" children="FAQ" />
          </Menu.Item>
          <Menu.Item>
          <Link to="/industries" children="Industries" />
          </Menu.Item>
          <Menu.Item>
          <Link to="/industries/plastics" children="Industry Page" />
          </Menu.Item>
          <Menu.Item>
          <Link to="/purchase-agreement" children="Purchase Agreement" />
          </Menu.Item>
          <Menu.Item>
          <Link to="/referral" children="Referral" />
          </Menu.Item>
          <Menu.Item>
          <Link to="/refunds-and-returns" children="Refunds" />
          </Menu.Item>
          <Menu.Item>
          <Link to="/terms-of-use" children="Terms" />
          </Menu.Item>
          <Menu.Item>
          <Link to="/testimonials" children="Testimonials" />
          </Menu.Item>
        </Menu>

          <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                    <List.Item as='a'>How To Access</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
                <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
                <p style={{ fontSize: '1.33em' }}>
                    If you have done your due diligence, then you have shopped the Internet for a quality General Liability Insurance Policy (aka Liability
Insurance Policy) determined to find a policy at a price your Small Business can afford. What you may have found is that obtaining a
General Liability Insurance Quote (aka Business Liability Insurance, Commercial General Liability Insurance,or Business Owners
Policy) for your small business can be difficult, and take an exorbitant amount of time with most insurance companies. Most General
Liability Insurance websites have their insurance companies that require you to complete a long and drawn out General Liability
Insurance Application (GL or SBGL Insurance Application) in order to determine you and your company's risk before they can calculate
and then give you a Small Business General Liability Insurance Annual Premium Quote. They may hen tdecline you General Liability
Insurance for your Small Business just because you are a start up or new in business. If they do accept you and your Small Business
for a Small Business General Liability Insurance Policy, it can be an expensive and a very complicated process that takes weeks or
even months to get your coverage started. Make sure you are getting the best Small Business General Liability Insurance Policy and
Annual Insurance Premium available to you. Compare the Coverage that SmallBusinessGeneralLiability.com (offered by ACE
Financial Group Ltd.) offers to other General Liability Insurance Quotes you may have received. You will find that our Small Business
General Liability Quote is lower that anyone in the General Liability Insurance industry. In fact, we are so committed to offer the lowest
General Liability Rate available for Small and New Businesses that we even stand behind our statement by offering a "Lowest Rate in
the Industry, Guaranteed!" promise. We will beat any Small Business General Liability Insurance Company's rate by 10%! Your
Internet shopping is over! You can get an online quote, fill out an online application, and buy a General Liability Policy for your Small
Business today from ACE Financial. Just click on the "Get A Quote" link above to get started!
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  src='/assets/images/wireframe/white-image.png'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    )
  }
}

export default PublicHome
