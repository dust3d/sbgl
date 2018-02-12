import { types, Container, Component, Form, Segment } from 'globals'
import { List } from 'semantic-ui-react'
import { 
  grossIncomeOptions
  , payrollOptions
  , yearsIndustryOptions
  , unitedStates
  , industryOptionsMultiplier
  , industryOptions
  , footTrafficMultiplier
  , footTrafficOptions
  , numberOfEmployeesOptions
  , numberOfEmployeesMultiplier
  , grossAnnualRevenueOptions
  , grossAnnualRevenueMultiplier
  , unitedStatesMultiplier
  , yearsIndustryMultiplier
  , payrollMultiplier
  , grossIncomeMultiplier
  , deductibleMultiplier
  , aggMaxBenefitMultiplier
  , maxBenefitMultiplier
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
    console.log('yo bro', name, value)
    this.setState({ error: false, errorMessage: undefined, [name]: value });
  }

  handleRadioChange(e) {
    console.log('radio changed', e.target.name, e.target.value);
    this.setState({ error: false, errorMessage: undefined, [e.target.name]: e.target.value });
  }

  calculateQuote(state) {
    let quote = Math.round(500*industryOptionsMultiplier[state.industry]
      *footTrafficMultiplier[state.footTraffic]
      *unitedStatesMultiplier[state.stateOfOperation]
      *yearsIndustryMultiplier[state.yearsIndustry]
      *payrollMultiplier[state.totalPayroll]
      *grossIncomeMultiplier[state.ownerIncome]
      *(state.existingPolicy === 'yes' ? 0.95 : 1.1)
      *(state.alcoholTobaccoOrFirearms === 'yes' ? 1.2 : 1)
      *(state.claim5Years === 'yes' ? 0 : 1)
      *(state.refused === 'yes' ? 0 : 1)
      *(deductibleMultiplier[state.deductible])
      *(maxBenefitMultiplier[state.maxBenefit])
      *(aggMaxBenefitMultiplier[state.aggMaxBenefit])
      )
    console.log('hey quote', quote);
  //   if(quote == 0){
  //    this.setState({
  //     error: true,
  //     errorMessage: 'Please contact customerservice@sbgl.com'
  //   });
  //  }
  //  else{ 
  //   this.setState({error: false});
  // }
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

  const contactCustomerServiceMessage = "We're sorry, but due to your answers listed above, we are unable to offer you coverage at this time. Please recheck your answers or email our Customer Service for more information. Thank you.";

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

                  <Form.Group 
                  grouped 
                  onChange={this.handleRadioChange.bind(this)}
                  >
                  <label>Do You Currently Have A General Liability Policy?</label>
                  <Form.Field 
                  label='Yes' 
                  control='input'
                  type='radio'
                  name='existingPolicy'
                  value='yes'
                  />
                  <Form.Field 
                  label='No' 
                  control='input' type='radio' 
                  name='existingPolicy'
                  value='no'
                  />
                  </Form.Group>
                  
                  <Form.Group 
                  grouped
                  onChange={this.handleRadioChange.bind(this)}
                  >
                  <label>Does your Business Sell Alcohol, Tobacco, Or Firearms?</label>
                  <Form.Field 
                  label='Yes' 
                  control='input'
                  value='yes' 
                  type='radio' 
                  name='alcoholTobaccoOrFirearms' 
                  />
                  <Form.Field 
                  label='No' 
                  control='input' 
                  type='radio'
                  value='no' 
                  name='alcoholTobaccoOrFirearms' 
                  />
                  </Form.Group>

                  <Form.Group 
                  grouped
                  onChange={this.handleRadioChange.bind(this)}
                  >
                  <label>Have You Had A General Liability Claim Within 5 Years?</label>
                  <Form.Field 
                  label='Yes' 
                  control='input' 
                  type='radio' 
                  name='claim5Years'
                  value='yes'
                  />
                  <Form.Field 
                  label='No' 
                  control='input' 
                  type='radio' 
                  name='claim5Years'
                  value='no'
                  />
                  </Form.Group>

                  <Form.Group 
                  grouped
                  onChange={this.handleRadioChange.bind(this)}
                  >
                  <label>Have You Been Cancelled, Declined, Or Refused Coverage Within 5 Years?</label>
                  <Form.Field 
                  label='Yes' 
                  control='input' 
                  type='radio' 
                  name='refused' 
                  value='yes'
                  />
                  <Form.Field 
                  label='No' 
                  control='input' 
                  type='radio' 
                  name='refused' 
                  value='no'
                  />
                  </Form.Group>

                  <Form.Group 
                  grouped
                  onChange={this.handleRadioChange.bind(this)}
                  >
                  <label>Deductible</label>
                  <Form.Field value='$500'  label='$500' control='input' type='radio' name='deductible' />
                  <Form.Field value='$1000' label='$1000' control='input' type='radio' name='deductible' />
                  <Form.Field value='$2500' label='$2500' control='input' type='radio' name='deductible' />
                  <Form.Field value='$5000' label='$5000' control='input' type='radio' name='deductible' />
                  </Form.Group>
                  
                  <Form.Group 
                  grouped
                  onChange={this.handleRadioChange.bind(this)}
                  >
                  <label>Incident Max Benefit</label>
                  <Form.Field value='$100,000'  label='$100,000' control='input' type='radio' name='maxBenefit' />
                  <Form.Field value='$500,000'  label='$500,000' control='input' type='radio' name='maxBenefit' />
                  <Form.Field value='$1,000,000' label='$1,000,000' control='input' type='radio' name='maxBenefit' />
                  <Form.Field value='$2,000,000' label='$2,000,000' control='input' type='radio' name='maxBenefit' />
                  </Form.Group>
                  
                  <Form.Group 
                  grouped
                  onChange={this.handleRadioChange.bind(this)}
                  >
                  <label>Aggregate Max Benefit</label>
                  <Form.Field value='$100,000' label='$100,000' control='input' type='radio' name='aggMaxBenefit' />
                  <Form.Field value='$500,000' label='$500,000' control='input' type='radio' name='aggMaxBenefit' />
                  <Form.Field value='$1,000,000' label='$1,000,000' control='input' type='radio' name='aggMaxBenefit' />
                  <Form.Field value='$2,000,000' label='$2,000,000' control='input' type='radio' name='aggMaxBenefit' />
                  <Form.Field value='$3,000,000' label='$3,000,000' control='input' type='radio' name='aggMaxBenefit' />
                  <Form.Field value='$5,000,000' label='$5,000,000' control='input' type='radio' name='aggMaxBenefit' />
                  </Form.Group>
                  <Button content='Click Here for Annual QUOTE' primary />

                  </Form>


                  {this.state.quote > 0 ?  
                    <Message
                    success
                    size='large'
                    header={'Quote Calculated'}
                    content={"Here is your annual quote: " + this.state.quote }
                    />
                    : 
                    <Message
                    error
                    size='large'
                    content={contactCustomerServiceMessage}
                    />
                  }
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
