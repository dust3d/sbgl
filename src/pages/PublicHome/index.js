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

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <div>
              <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
      <Segment className='homepage' inverted textAlign='center' style={{ minHeight: 700, padding: '0em 0em' }} vertical >

       <Container>
              <Menu size='large' className="homepage-menu" >
                <Menu.Item as={Link} to='/' active>Home</Menu.Item>
                <Menu.Item as={Link} to='/quote'>Quote</Menu.Item>
                <Menu.Item as={Link} to='/referral'>$50 Referral</Menu.Item>
                <Menu.Item as={Link} to='/faq'>FAQ</Menu.Item>
                <Menu.Item as={Link} to='/testimonials'>Testimonials</Menu.Item>
                <Menu.Item as={Link} to='/contact'>Contact Us</Menu.Item>
                {/*<Menu.Item position='right'>
                  <Button as='a' color='blue' >Log in</Button>
                  <Button as='a'   style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
              */}
              </Menu>
      </Container>
      <Container text className='homepage-header'>
              <Header
                
                as='h1'
                content='Small Business General Liability'
                style={{ fontSize: '3em', fontWeight: 'normal', marginBottom: 0, marginTop: '250px' }}
              />
              <Header
                as='h2'
                content='Lowest rates in the Industry &mdash; Guaranteed'
                
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button primary size='huge' as={Link} to='/quote'>
                Get a Quote
                <Icon name='right arrow' />
              </Button>
            </Container>
            </Segment>
            </Visibility>
<Segment style={{ padding: '2em 0em' }} vertical>

          <Grid container>
            <Grid.Row>
                          <Grid.Column width={8}>
<List size='large' style={{ fontSize: '1.5em'}} bulleted>
<List.Item header="Lowest Rates in the Industry Guaranteed!*" meta="applies to any policy with the same state, coverages, deductible and maximum benefit." />
<List.Item header="Quick and Easy Online Quote and Application" />
<List.Item header="We Cover New Businesses" />
<List.Item header="Prompt and Courteous Customer Service" />
<List.Item header="We Cover Most Business Types" />
<List.Item header="Innovative, Cutting Edge Company" />
<List.Item header="A+ Rated Company **" meta="rating awarded from S.A. Stewart of London" />
<List.Item header="Diminishing Deductible Program" />
<List.Item header="Referral and Renewal Programs Pay $$$ !" />
</List>

</Grid.Column>
 <Grid.Column width={8}>
               <Header as='h3' style={{ fontSize: '2em' }}>General liability insurance policies usually include:</Header>
                <List bulleted style={{ fontSize: '1.5em'}} >
                <List.Item>Bodily injury and property damage liability</List.Item>
                <List.Item>Damage to premises rented to you</List.Item>
                <List.Item>Products completed operations</List.Item>
                <List.Item>Personal and advertising injury</List.Item>
                <List.Item>Medical Payments</List.Item>
                </List>
                </Grid.Column>
             
            </Grid.Row>
            <Grid.Row>

              <Grid.Column width={8}>
                <p style={{ fontSize: '1.33em' }}>
                  Small Business General Liability Insurance is commonly referred to as: General Liability Insurance, Business Liability Insurance, or Commercial General Liability Insurance.
                </p>
                <p style={{ fontSize: '1.33em' }}>
                  General Liability Insurance (GL) is coverage that can protect you from a variety of claims including: bodily injury, property damage, personal injury and others that can arise from your business operations. It is often required by Business property owners as a condition of leasing their business storefront or property
                </p>
              </Grid.Column>
               <Grid.Column floated='right' width={6}>
                <Image
                  className="customer-service"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge' as={Link} to='/quote'>Get a Quote</Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <p style={{ fontSize: '1.05em'}} >If you have done your due diligence, then you have shopped the Internet for a quality General Liability Insurance Policy (aka Liability Insurance Policy) determined to find a policy at a price your Small Business can afford.  What you may have found is that obtaining a General Liability Insurance Quote (aka Business Liability Insurance, Commercial General Liability Insurance,or  Business Owners Policy) for your small business can be difficult, and take an exorbitant amount of time with most insurance companies. </p>
                 <p style={{ fontSize: '1.05em'}} >Most General Liability Insurance websites have their insurance companies that require you to complete a long and drawn out General Liability Insurance Application (GL or SBGL Insurance Application) in order to determine you and your company's risk before they can calculate and then give you a Small Business General Liability Insurance Annual Premium Quote.</p>
                <p style={{ fontSize: '1.05em' }} > They may then decline you General Liability Insurance for your Small Business just because you are a start up or new in business.  If they do accept you and your Small Business for a Small Business General Liability Insurance Policy, it can be an expensive and a very complicated process that takes weeks or even months to get your coverage started.  </p>
                <p style={{ fontSize: '1.05em'}} > Make sure you are getting the best Small Business General Liability Insurance Policy and Annual Insurance Premium available to you.  Compare the Coverage that SmallBusinessGeneralLiability.com (offered by ACE Financial Group Ltd.) offers to other General Liability Insurance Quotes you may have received.  </p>
                <p style={{ fontSize: '1.05em'}} >You will find that our Small Business General Liability Quote is lower that anyone in the General Liability Insurance industry.  In fact, we are so committed to offer the lowest General Liability Rate available for Small and New Businesses that we even stand behind our statement by offering a "Lowest Rate in the Industry, Guaranteed!" promise. We will beat any Small Business General Liability Insurance Company's rate by 10%!  Your Internet shopping is over!  You can get an online quote, fill out an online application, and buy a General Liability Policy for your Small Business today from ACE Financial.  Just click on the "Get A Quote" link above to get started!</p>
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
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
                    <List.Item as={Link} to='/quote'>Sign Up</List.Item>
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

export default PublicHome
