import { types, Container, Component } from 'globals'
import { List } from 'semantic-ui-react'

const industryOptions = [
  { key:  '4512', value:  'art', text:  'Art, Books and Music NAICS 4512'}, 
{ key:  '441', value:  'NAICS 441', text:  'Motor Vehicle and Parts Dealers NAICS 441'}, 
{ key:  '442', value:  'NAICS 442', text:  'Furniture and Furnishings Stores NAICS 442'}, 
{ key:  '443', value:  'NAICS 443', text:  'Electronics and Appliance Stores NAICS 443'}, 
{ key:  '444', value:  'NAICS 444', text:  'Building Material and Supplies Dealers NAICS 444'}, 
{ key:  '445', value:  'NAICS 445', text:  'Food and Beverage NAICS 445'}, 
{ key:  '4461', value:  'NAICS 4461', text:  'Health and Personal Products NAICS 4461'}, 
{ key:  '4471', value:  'NAICS 4471', text:  'Gas and Food Stores NAICS 4471'}, 
{ key:  '448', value:  'NAICS 448', text:  'Clothing and Accessories Stores NAICS 448'}, 
{ key:  '4511', value:  'NAICS 4511', text:  'Sporting Goods and Hobby Stores NAICS 4511'}, 
{ key:  '4531', value:  'NAICS 4531', text:  'Florists & Nursery NAICS 4531'}, 
{ key:  '4532', value:  'NAICS 4532', text:  'Office Supplies, Stationery, and Gift Stores NAICS 4532'}, 
{ key:  '4532', value:  'NAICS 4532', text:  'Pet Supply & Services NAICS 4532'}, 
{ key:  '4539', value:  'NAICS 4539', text:  'Other Products NAICS 4539'}, 
{ key:  '812', value:  'NAICS 812', text:  'Personal Care Services NAICS 812'}, 
{ key:  '44', value:  'NAICS 44', text:  'Financial Services NAICS 521-525'}, 
{ key:  '44', value:  'NAICS 44', text:  'Lodging NAICS 7211'}, 
{ key:  '44', value:  'NAICS 44', text:  'Entertainment Facilities NAICS 3121'}, 
{ key:  '881', value:  'NAICS 881', text:  'Repair Services NAICS 811'}, 
{ key:  '441', value:  'NAICS 441', text:  'Automotive Services NAICS 441'}, 
{ key:  '493', value:  'NAICS 493', text:  'Parking or Storage Facility NAICS 493'}, 
{ key:  '2389', value:  'NAICS 2389', text:  'Contractors Services NAICS 2389'}, 
{ key:  '31-32-33', value:  'NAICS 31-32-33', text:  'Manufacturing & Production NAICS 31-32-33'}, 
{ key:  '493', value:  'NAICS 493', text:  'Warehouse & Freight NAICS 493'}, 
{ key:  '813', value:  'NAICS 813', text:  'Counseling & Education NAICS 813'}, 
{ key:  '814', value:  'NAICS 814', text:  'Child or Senior Care NAICS 814'}, 
{ key:  '44534', value:  'NAICS 44534', text:  'Other Services NAICS 453'}
]

const unitedStates = [
{value:'AR', text:'Arkansas', key:'AR'},
{value:'CA', text:'California', key:'CA'},
{value:'CO', text:'Colorado', key:'CO'},
{value:'CT', text:'Connecticut', key:'CT'},
{value:'DE', text:'Delaware', key:'DE'},
{value:'DC', text:'District', key:'DC'},
{value:'FL', text:'Florida', key:'FL'},
{value:'GA', text:'Georgia', key:'GA'},
{value:'ID', text:'Idaho', key:'ID'},
{value:'IL', text:'Illinois', key:'IL'},
{value:'IN', text:'Indiana', key:'IN'},
{value:'IA', text:'Iowa', key:'IA'},
{value:'KS', text:'Kansas', key:'KS'},
{value:'KY', text:'Kentucky', key:'KY'},
{value:'LA', text:'Louisiana', key:'LA'},
{value:'ME', text:'Maine', key:'ME'},
{value:'MD', text:'Maryland', key:'MD'},
{value:'MA', text:'Massachusetts', key:'MA'},
{value:'MI', text:'Michigan', key:'MI'},
{value:'MN', text:'Minnesota', key:'MN'},
{value:'MS', text:'Mississippi', key:'MS'},
{value:'MO', text:'Missouri', key:'MO'},
{value:'MT', text:'Montana', key:'MT'},
{value:'NE', text:'Nebraska', key:'NE'},
{value:'NV', text:'Nevada', key:'NV'},
{value:'NH', text:'New', key:'NH'},
{value:'NJ', text:'New', key:'NJ'},
{value:'NM', text:'New', key:'NM'},
{value:'NY', text:'New', key:'NY'},
{value:'NC', text:'North', key:'NC'},
{value:'ND', text:'North', key:'ND'},
{value:'OH', text:'Ohio', key:'OH'},
{value:'OK', text:'Oklahoma', key:'OK'},
{value:'OR', text:'Oregon', key:'OR'},
{value:'PA', text:'Pennsylvania', key:'PA'},
{value:'RI', text:'Rhode', key:'RI'},
{value:'SC', text:'South', key:'SC'},
{value:'SD', text:'South', key:'SD'},
{value:'TN', text:'Tennessee', key:'TN'},
{value:'TX', text:'Texas', key:'TX'},
{value:'UT', text:'Utah', key:'UT'},
{value:'VT', text:'Vermont', key:'VT'},
{value:'VA', text:'Virginia', key:'VA'},
{value:'WA', text:'Washington', key:'WA'},
{value:'WV', text:'West', key:'WV'},
{value:'WI', text:'Wisconsin', key:'WI'},
{value:'WY', text:'Wyoming', key:'WY'}]

const yearsIndustryOptions = [
    { value:'0-2', text:'0-2 Years', key:'0'}, 
    { value:'3-7', text:'3-7 Years', key:'3'},
    { value:'8+', text:'8+ Years', key:'8'}
    ]

export class QuotePage extends Component {
  constructor() {
    super();
    this.state = {
      quote: 99
    };
  }

  static contextTypes = {
    runtime: types.object
  }

  componentWillMount() {
    const { runtime } = this.context
    const { history } = this.props
    runtime.set('history', history)
  }

  handleSubmit(e) {
    // let years = getQuote(e.state)
    // this.setState({years: getQuote()})
    alert('you did it', e);
  }

  render() {
    return (
      <div>
       <Container>
              <Menu pointing secondary size='large' className='menu-items' >
                <Menu.Item as={Link} to='/'>Home</Menu.Item>
                <Menu.Item as={Link} to='/quote' active>Quote</Menu.Item>
                <Menu.Item as={Link} to='/referral'>$50 Referral</Menu.Item>
                <Menu.Item as={Link} to='/faq'>FAQ</Menu.Item>
                <Menu.Item as={Link} to='/testimonials'>Testimonials</Menu.Item>
                <Menu.Item as={Link} to='/contact'>Contact Us</Menu.Item>
                {/*<Menu.Item position='right'>
                  <Button as='a' color='blue' >Log in</Button>
                  <Button as='a'   style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>*/}
              </Menu>
      </Container>
      <Container page>
      <br />
        <Header as="h1" content="Small Business General Liability" subheader="We Cover Start-Ups - Home Based Businesses - Retail and Commercial Locations And Many Others..." />
        <Header as="h3" content="Lowest Rates in the Industry – Guaranteed!" />
        <List>
        <List.Item>
        <List.Content>
        <List.Description>Get an Instant Online Quote Today</List.Description>
        </List.Content>
        </List.Item>
        </List>
        <Step.Group size='mini' fluid>
        <Step
        active
          icon='dollar'
          title='Quote'
        />  
        <Step
          disabled
          icon='info circle'
          title='Application'
        />
        <Step
          disabled
          icon='info circle'
          title='Confirmation'
        />
        <Step
          disabled
          icon='payment'
          title='Payment'
        />
        <Step
          disabled
          icon='dollar'
          title='Receipt'
        />
        <Step
          disabled
          icon='info circle'
          title='Certificate'
        />
      </Step.Group>
          <Form success onSubmit={this.handleSubmit}>
          
    <Form.Select options={industryOptions} label='Select your Industry' placeholder='Select one' /> 
    <Form.Select options={yearsIndustryOptions} label='Number of Years in your Industry'/>

  <Form.Select options={unitedStates} placeholder='Select Your State' label='State You Operate In or Your Business Location' placeholder='Please select your state' />

  <Form.Select label='Gross Annual Income (Owner Only)' options={[
    {value:'50K or Less', text: '50K or Less'},
     {value:'51-75K', text:'51-75'},
     {value:'76-100K', text:'76-100'},
     {value:'101-200K', text:'101-200K'},
     {value:'201K+', text: '201K+'}]} />
    
    <Form.Select label='Gross Annual Payroll (Including Owner)' options={[
    {value: '100K or Less', text:'100K or Less'},
    {value: '101-150K', text: '101-150'},
    {value: '151-250K', text: '151-250'},
    {value: '101-200K', text: '251-500'},
    {value: '501+', text: '501+'}
    ]} />

    <Form.Select label='Gross Annual Business Revenue' placeholder='Select Annual Gross Revenue' options={[
    {key: '100K or Less', value: '100K or Less', text:'100K or Less'},
    {key: '101-150K', value: '101-150K', text: '101-150'},
    {key: '151-250K', value: '151-250K', text: '151-250'},
    {key: '101-200K', value: '101-200K', text: '251-500'},
    {key: '501+', value: '501+', text: '501-1Million'},
    {key: '1MM+', value: '1MM+', text: '1 Million+'}
    ]} />
    <Form.Select label='Total Number Of Employees (Including Owner)' placeholder='Select Number of Employees' options={[
    {key: '1', value: '1', text: '1'},
    {key: '2', value: '2', text: '2'},
    {key: '3', value: '3', text: '3'},
    {key: '4', value: '4', text: '4'},
    {key: '5', value: '5', text: '5'},
    {key: '6', value: '6', text: '6'},
    {key: '7', value: '7', text: '7'},
    {key: '8', value: '8', text: '8'},
    {key: '9', value: '9', text: '9'},
    {key: '10', value: '10', text: '>10'},
    {key: '11', value: '11', text: '>11+'}
    ]} />

    <Form.Select label='Amount Of Foot Traffic In Your Business per Week' placeholder='Select' options={[
    {key: 'unde', value: 'under 50', text: 'under 50'},
    {key: '51-2', value: '51-200', text: '51-200'},
    {key: '201-', value: '201-500', text: '201-500'},
    {key: '501-', value: '501- 1000', text: '501-1000'},
    {key: '1000', value: '1000+', text: '1000+'}
    ]} />
    
    <Form.Group grouped>
      <label>Do You Currently Have A General Liability Policy?</label>
      <Form.Field label='Yes' control='input' type='radio' name='existingPolicy' />
      <Form.Field label='No' control='input' type='radio' name='existingPolicy' />
    </Form.Group>
        <Form.Group grouped>
      <label>Does your Business Sell Alcohol, Tobacco, Or Firearms?</label>
      <Form.Field label='Yes' control='input' type='radio' name='alcoholTobaccoOrFirearms' />
      <Form.Field label='No' control='input' type='radio' name='alcoholTobaccoOrFirearms' />
    </Form.Group>
    <Form.Group grouped>
    <label>Have You Had A General Liability Claim Within 5 Years?</label>
    <Form.Field label='Yes' control='input' type='radio' name='claim5Years' />
    <Form.Field label='No' control='input' type='radio' name='claim5Years' />
    </Form.Group>
    <Form.Group grouped>
    <label>Have You Been Cancelled, Declined, Or Refused Coverage Within 5 Years?</label>
    <Form.Field label='Yes' control='input' type='radio' name='refused' />
    <Form.Field label='No' control='input' type='radio' name='refused' />
    </Form.Group>
    <Form.Group grouped>
    <label>Deductible</label>
    <Form.Field label='$500' control='input' type='radio' name='deductible' />
    <Form.Field label='$1000' control='input' type='radio' name='deductible' />
    <Form.Field label='$2500' control='input' type='radio' name='deductible' />
    <Form.Field label='$5000' control='input' type='radio' name='deductible' />
    </Form.Group>
    <Form.Group grouped>
    <label>Incident Max Benefit</label>
    <Form.Field label='$100,000' control='input' type='radio' name='maxBenefit' />
    <Form.Field label='$500,000' control='input' type='radio' name='maxBenefit' />
    <Form.Field label='$1,000,000 ' control='input' type='radio' name='maxBenefit' />
    <Form.Field label='$2,000,000' control='input' type='radio' name='maxBenefit' />
    </Form.Group>
    <Form.Group grouped>
    <label>Aggregate Max Benefit</label>
    <Form.Field label='$100,000' control='input' type='radio' name='aggMaxBenefit' />
    <Form.Field label='$500,000' control='input' type='radio' name='aggMaxBenefit' />
    <Form.Field label='$1,000,000 ' control='input' type='radio' name='aggMaxBenefit' />
    <Form.Field label='$2,000,000' control='input' type='radio' name='aggMaxBenefit' />
    <Form.Field label='$3,000,000' control='input' type='radio' name='aggMaxBenefit' />
    <Form.Field label='$5,000,000' control='input' type='radio' name='aggMaxBenefit' />
    </Form.Group>
    <Button content='Click Here for Annual QUOTE' primary />

  </Form>
      <Message
      success
      size='large'
      header={'Quote Calculated'}
      content={'Here is your annual quote: ' +  this.state.quote}
    />
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

export default QuotePage
