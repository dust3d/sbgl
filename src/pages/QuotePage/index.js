import { types, Container, Component, Form, Segment } from 'globals'
import { List } from 'semantic-ui-react'
import { 
  grossIncomeOptions
  , payrollOptions
  , yearsIndustryOptions
  , unitedStates
  , industryOptionsMultiplier
  , industryOptions
  , footTrafficQuoteWeighting
  , footTrafficOptions
  , numberOfEmployeesOptions
  , grossAnnualRevenueOptions
  , unitedStatesMultiplier
  , yearsIndustryMultiplier
  , payrollMultiplier
  , grossIncomeMultiplier
} from './multipliers.js'

export class QuotePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      industry: '',
      yearsIndustry: '',
      stateOfOperation: '',
      ownerIncome: '',
      totalPayroll: '',
      grossAnnualRevenue: '',
      numberOfEmployees: '',
      footTraffic: '',
      existingPolicy: '',
      alcoholTobaccoOrFirearms: '',
      claim5Years: '',
      refused: '',
      deductible: '',
      maxBenefit: '',
      aggMaxBenefit: '',
      quote: 0,
      error: false,
      errorMessage: undefined
    };
        this.calculateQuote = this.calculateQuote.bind(this);

  }


  static contextTypes = {
    runtime: types.object
  }

  handleFieldChange(e, { name, value } = {}) {
    this.setState({ error: false, errorMessage: undefined, [name]: value });
  }

  calculateQuote(state) {
    console.log('this is here', state.totalPayroll);
    let quote = 500*industryOptionsMultiplier[state.industry]
    *footTrafficQuoteWeighting[state.footTraffic]
    *unitedStatesMultiplier[state.stateOfOperation]
    *yearsIndustryMultiplier[state.yearsIndustry]
    *payrollMultiplier[state.totalPayroll]
    *grossIncomeMultiplier[state.ownerIncome]
    console.log('hey quote', quote);
    return quote;
  }

  handleSubmit(e) {
    console.log("submitted State", this.state);
    this.setState({quote: this.calculateQuote(this.state)});
  }

  render() {
    const {
      yearsIndustry,
      stateOfOperation,
      industry, 
      payroll,
      submittedIndustry,
      submittedPayroll,
      quote,
      error = false, 
      errorMessage 
    } = this.state

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
                <Container>
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
                <Form 
                onSubmit={this.handleSubmit.bind(this)}
                error={error} 
                >
                {error && (
                  <Message error header="Login Error" content={errorMessage} />
                  )}

                  <Form.Select 
                  options={industryOptions} 
                  label='Select your Industry' 
                  placeholder='Select one'
                  name='industry'
                  onChange={this.handleFieldChange.bind(this)} 
                  /> 
                  <Form.Select 
                  options={yearsIndustryOptions} 
                  label='Number of Years in your Industry'
                  name='yearsIndustry'
                  onChange={this.handleFieldChange.bind(this)} 
                  />

                  <Form.Select 
                  options={unitedStates} 
                  placeholder='Select Your State' 
                  label='State You Operate In or Your Business Location' 
                  placeholder='Please select your state'
                  name='stateOfOperation'
                  onChange={this.handleFieldChange.bind(this)} 
                  />

                  <Form.Select 
                  label='Gross Annual Income (Owner Only)' 
                  placeholder='Select Owner Income' 
                  options={grossIncomeOptions}
                  onChange={this.handleFieldChange.bind(this)} 
                  name='ownerIncome'
                  />

                  <Form.Select 
                  label='Gross Annual Payroll (Including Owner)' 
                  options={payrollOptions} 
                  placeholder='Select one' 
                  onChange={this.handleFieldChange.bind(this)}
                  name='totalPayroll'
                  />

                  <Form.Select 
                  label='Gross Annual Business Revenue' 
                  placeholder='Select Annual Gross Revenue' 
                  options={grossAnnualRevenueOptions}
                  onChange={this.handleFieldChange.bind(this)} 
                  name='grossAnnualRevenue'
                  />

                  <Form.Select 
                  label='Total Number Of Employees (Including Owner)' 
                  placeholder='Select Number of Employees' 
                  options={numberOfEmployeesOptions}
                  onChange={this.handleFieldChange.bind(this)}
                  name='numberOfEmployees'
                  />

                  <Form.Select 
                  label='Amount Of Foot Traffic In Your Business per Week' 
                  placeholder='Select' 
                  options={footTrafficOptions} 
                  onChange={this.handleFieldChange.bind(this)}
                  name='footTraffic'
                  />

                  <Form.Group grouped>
                  <label>Do You Currently Have A General Liability Policy?</label>
                  <Form.Field 
                  label='Yes' 
                  control='input'
                  type='radio'
                  name='existingPolicy'
                  value='yes'
                  onChange={this.handleFieldChange.bind(this)}
                  />

                  <Form.Field 
                  label='No' 
                  control='input' type='radio' 
                  name='existingPolicy'
                  value="no"
                  onChange={this.handleFieldChange.bind(this)}
                  />
                  </Form.Group>
                  <Form.Group grouped>
                  <label>Does your Business Sell Alcohol, Tobacco, Or Firearms?</label>
                  <Form.Field label='Yes' control='input' type='radio' name='alcoholTobaccoOrFirearms' 
                  onChange={this.handleFieldChange.bind(this)}
                  />
                  <Form.Field label='No' control='input' type='radio' name='alcoholTobaccoOrFirearms' 
                  onChange={this.handleFieldChange.bind(this)}
                  />
                  </Form.Group>
                  <Form.Group grouped>
                  <label>Have You Had A General Liability Claim Within 5 Years?</label>
                  <Form.Field label='Yes' control='input' type='radio' name='claim5Years'
                  onChange={this.handleFieldChange.bind(this)}
                  />
                  <Form.Field label='No' control='input' type='radio' name='claim5Years' 
                  onChange={this.handleFieldChange.bind(this)}
                  />
                  </Form.Group>
                  <Form.Group grouped>
                  <label>Have You Been Cancelled, Declined, Or Refused Coverage Within 5 Years?</label>
                  <Form.Field label='Yes' control='input' type='radio' name='refused' 
                  onChange={this.handleFieldChange.bind(this)}
                  />
                  <Form.Field label='No' control='input' type='radio' name='refused' 
                  onChange={this.handleFieldChange.bind(this)}
                  />
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
                  <strong>onSubmit:</strong>
                  <pre>{JSON.stringify(this.state.quote)}</pre>
                  <Message
                  success
                  size='large'
                  header={'Quote Calculated'}
                  content={"Here is your annual quote: " + this.state.quote }
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
