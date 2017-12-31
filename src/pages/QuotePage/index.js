import { types, Container, Component } from 'globals'
import { List } from 'semantic-ui-react'

export class QuotePage extends Component {
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
      <Container page>
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
          <Form>
          <Form.Field control='select' label='Choose Your Industry'>
          <option>Select One</option>
          <option disabled>PRODUCTS</option>
          <option value='art'>Art, Books and Music NAICS 4512</option>
<option value='NAICS 441'>Motor Vehicle and Parts Dealers NAICS 441</option>
<option value='NAICS 442'>Furniture and Furnishings Stores NAICS 442</option>
<option value='NAICS 443'>Electronics and Appliance Stores NAICS 443</option>
<option value='NAICS 444'>Building Material and Supplies Dealers NAICS 444</option>
<option value='NAICS 445'>Food and Beverage NAICS 445</option>
<option value='NAICS 4461'>Health and Personal Products NAICS 4461</option>
<option value='NAICS 4471'>Gas and Food Stores NAICS 4471</option>
<option value='NAICS 448'>Clothing and Accessories Stores NAICS 448</option>
<option value='NAICS 4511'>Sporting Goods and Hobby Stores NAICS 4511</option>
<option value='NAICS 4531'>Florists & Nursery NAICS 4531</option>
<option value='NAICS 4532'>Office Supplies, Stationery, and Gift Stores NAICS 4532</option>
<option value='NAICS 4532'>Pet Supply & Services NAICS 4532</option>
<option value='NAICS 4539'>Other Products NAICS 4539</option>
<option disabled>SERVICES</option>
<option value='NAICS 812'>Personal Care Services NAICS 812</option>
<option value='NAICS 44'>Financial Services NAICS 521-525</option>
<option value='NAICS 44'>Lodging NAICS 7211</option>
<option value='NAICS 44'>Entertainment Facilities NAICS 3121</option>
<option value='NAICS 881'>Repair Services NAICS 811</option>
<option value='NAICS 441'>Automotive Services NAICS 441</option>
<option value='NAICS 44'>Parking or Storage Facility NAICS 493</option>
<option value='NAICS 44'>Contractors Services NAICS 2389</option>
<option value='NAICS 44'>Manufacturing & Production NAICS 31-32-33</option>
<option value='NAICS 44'>Warehouse & Freight NAICS 493</option>
<option value='NAICS 44'>Counseling & Education NAICS 813</option>
<option value='NAICS 44'>Child or Senior Care NAICS 814</option>
<option value='NAICS 44'>Other Services NAICS 453</option>
</Form.Field>
    
    <Form.Field control='select' label='Number of Years in your Industry'>
      <option>Select</option>
      <option value='0-2' multiplier='1.05'>0-2 </option>
      <option value='3-7' multiplier='1'>3-7</option>
      <option value='8+' multiplier='0.95'>8+</option>
    </Form.Field>
    <Form.Field control='select' label="State You Operate In or Your Business Location" class='ui fluid search dropdown'>
  <option value=''>Select your State</option>
  <option value='AL'>Alabama</option>
  <option value='AZ'>Arizona</option>
  <option value='AR'>Arkansas</option>
  <option value='CA'>California</option>
  <option value='CO'>Colorado</option>
  <option value='CT'>Connecticut</option>
  <option value='DE'>Delaware</option>
  <option value='DC'>District Of Columbia</option>
  <option value='FL'>Florida</option>
  <option value='GA'>Georgia</option>
  <option value='ID'>Idaho</option>
  <option value='IL'>Illinois</option>
  <option value='IN'>Indiana</option>
  <option value='IA'>Iowa</option>
  <option value='KS'>Kansas</option>
  <option value='KY'>Kentucky</option>
  <option value='LA'>Louisiana</option>
  <option value='ME'>Maine</option>
  <option value='MD'>Maryland</option>
  <option value='MA'>Massachusetts</option>
  <option value='MI'>Michigan</option>
  <option value='MN'>Minnesota</option>
  <option value='MS'>Mississippi</option>
  <option value='MO'>Missouri</option>
  <option value='MT'>Montana</option>
  <option value='NE'>Nebraska</option>
  <option value='NV'>Nevada</option>
  <option value='NH'>New Hampshire</option>
  <option value='NJ'>New Jersey</option>
  <option value='NM'>New Mexico</option>
  <option value='NY'>New York</option>
  <option value='NC'>North Carolina</option>
  <option value='ND'>North Dakota</option>
  <option value='OH'>Ohio</option>
  <option value='OK'>Oklahoma</option>
  <option value='OR'>Oregon</option>
  <option value='PA'>Pennsylvania</option>
  <option value='RI'>Rhode Island</option>
  <option value='SC'>South Carolina</option>
  <option value='SD'>South Dakota</option>
  <option value='TN'>Tennessee</option>
  <option value='TX'>Texas</option>
  <option value='UT'>Utah</option>
  <option value='VT'>Vermont</option>
  <option value='VA'>Virginia</option>
  <option value='WA'>Washington</option>
  <option value='WV'>West Virginia</option>
  <option value='WI'>Wisconsin</option>
  <option value='WY'>Wyoming</option>
</Form.Field>
    <Form.Field control='select' label='Gross Annual Income (Owner Only)'>
    <option>Select Owners Income</option>
    <option value='50K or Less'>50K or Less</option>
    <option value='51-75K'>51-75</option>
    <option value='76-100K'>76-100</option>
    <option value='101-200K'>101-200K</option>
    <option value='201K+'>201K+</option>
    </Form.Field>
    <Form.Field control='select' label='Gross Annual Payroll (Including Owner)'>
    <option>Select Annual Payroll</option>
    <option value='100K or Less'>100K or Less</option>
    <option value='101-150K'>101-150</option>
    <option value='151-250K'>151-250</option>
    <option value='101-200K'>251-500</option>
    <option value='501+'>501+</option>
    </Form.Field>
    <Form.Field control='select' label='Gross Annual Business Revenue'>
    <option>Select Annual Gross Revenue</option>
    <option value='100K or Less'>100K or Less</option>
    <option value='101-150K'>101-150</option>
    <option value='151-250K'>151-250</option>
    <option value='101-200K'>251-500</option>
    <option value='501+'>501-1Million</option>
    <option value='1MM+'>1 Million+</option>
    </Form.Field>
    <Form.Field control='select' label='Total Number Of Employees (Including Owner)'>
    <option>Select Number of Employees</option>
    <option value='1'>1</option>
    <option value='2'>2</option>
    <option value='3'>3</option>
    <option value='4'>4</option>
    <option value='5'>5</option>
    <option value='6'>6</option>
    <option value='7'>7</option>
    <option value='8'>8</option>
    <option value='9'>9</option>
    <option value='10'>10</option>
    <option value='11+'>11+</option>
    </Form.Field>
    <Form.Field control='select' label='Amount Of Foot Traffic In Your Business per Week'>
    <option>Select</option>
    <option value='under 50'>under 50</option>
    <option value='51-200'>51-200</option>
    <option value='201-500'>201-500</option>
    <option value='501- 1000'>501-1000</option>
    <option value='1000+'>1000+</option>
    </Form.Field>
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
    <Form.Field label='$500' control='input' type='radio' name='htmlRadios' />
    <Form.Field label='$1000' control='input' type='radio' name='htmlRadios' />
    <Form.Field label='$2500' control='input' type='radio' name='htmlRadios' />
    <Form.Field label='$5000' control='input' type='radio' name='htmlRadios' />
    </Form.Group>
    <Form.Group grouped>
    <label>Incident Max Benefit</label>
    <Form.Field label='$100,000' control='input' type='radio' name='htmlRadios' />
    <Form.Field label='$500,000' control='input' type='radio' name='htmlRadios' />
    <Form.Field label='$1,000,000 ' control='input' type='radio' name='htmlRadios' />
    <Form.Field label='$2,000,000' control='input' type='radio' name='htmlRadios' />
    </Form.Group>
    <Form.Group grouped>
    <label>Aggregate Max Benefit</label>
    <Form.Field label='$100,000' control='input' type='radio' name='htmlRadios' />
    <Form.Field label='$500,000' control='input' type='radio' name='htmlRadios' />
    <Form.Field label='$1,000,000 ' control='input' type='radio' name='htmlRadios' />
    <Form.Field label='$2,000,000' control='input' type='radio' name='htmlRadios' />
    <Form.Field label='$3,000,000' control='input' type='radio' name='htmlRadios' />
    <Form.Field label='$5,000,000' control='input' type='radio' name='htmlRadios' />
    </Form.Group>
    <Button content='Click Here for Annual QUOTE' secondary />
    <br />
    <Button content='Fill Out Online APPLICATION' primary disabled/>
  </Form>
      </Container>
    )
  }
}

export default QuotePage
