export const industryOptions = [
{ key:  '1', value:  '1', text:  'Art, Books and Music NAICS 4512'}, 
{ key:  '2', value:  '2', text:  'Motor Vehicle and Parts Dealers NAICS 441'}, 
{ key:  '3', value:  '3', text:  'Furniture and Furnishings Stores NAICS 442'}, 
{ key:  '4', value:  '4', text:  'Electronics and Appliance Stores NAICS 443'}, 
{ key:  '5', value:  '5', text:  'Building Material and Supplies Dealers NAICS 444'}, 
{ key:  '6', value:  '6', text:  'Food and Beverage NAICS 445'}, 
{ key:  '7', value:  '7', text:  'Health and Personal Products NAICS 4461'}, 
{ key:  '8', value:  '8', text:  'Gas and Food Stores NAICS 4471'}, 
{ key:  '9', value:  '9', text:  'Clothing and Accessories Stores NAICS 448'}, 
{ key:  '10', value: '10', text:  'Sporting Goods and Hobby Stores NAICS 4511'}, 
{ key:  '11', value: '11', text:  'Florists & Nursery NAICS 4531'}, 
{ key:  '12', value: '12', text:  'Office Supplies, Stationery, and Gift Stores NAICS 4532'}, 
{ key:  '13', value: '13', text:  'Pet Supply & Services NAICS 4532'}, 
{ key:  '14', value: '14', text:  'Other Products NAICS 4539'}, 
{ key:  '15', value: '15', text:  'Personal Care Services NAICS 812'}, 
{ key:  '16', value: '16', text:  'Financial Services NAICS 521-525'}, 
{ key:  '17', value: '17', text:  'Lodging NAICS 7211'}, 
{ key:  '18', value: '18', text:  'Entertainment Facilities NAICS 3121'}, 
{ key:  '19', value: '19', text:  'Repair Services NAICS 811'}, 
{ key:  '20', value: '20', text:  'Automotive Services NAICS 441'}, 
{ key:  '21', value: '21', text:  'Parking or Storage Facility NAICS 493'}, 
{ key:  '22', value: '22', text:  'Contractors Services NAICS 2389'}, 
{ key:  '23', value: '23', text:  'Manufacturing & Production NAICS 31-32-33'}, 
{ key:  '24', value: '24', text:  'Warehouse & Freight NAICS 493'}, 
{ key:  '25', value: '25', text:  'Counseling & Education NAICS 813'}, 
{ key:  '26', value: '26', text:  'Child or Senior Care NAICS 814'}, 
{ key:  '27', value: '27', text:  'Other Services NAICS 453'}
];

export const industryOptionsMultiplier = {
  '1': 0.7,
  '2': 0.85,
  '3': 0.75,
  '4': 0.9,
  '5': 1.15,
  '6': 1.25,
  '7': 0.85,
  '8': 1.35,
  '9': 0.8,
  '10': 0.9,
  '11': 0.85,
  '12': 0.85,
  '13': 1.05,
  '14': 0,
  '15': 1.1,
  '16': 1.4,
  '17': 1.1,
  '18': 1.35,
  '19': 0.9,
  '20': 1.15,
  '21': 0.7,
  '22': 1.05,
  '23': 1,
  '24': 0.8,
  '25': 0.95,
  '26': 1.25,
  '27': 0
};

export const unitedStates = [
{value:'AR', text:'Arkansas', key:'AR'},
{value:'CA', text:'California', key:'CA', name: 'state'},
{value:'CO', text:'Colorado', key:'CO'},
{value:'CT', text:'Connecticut', key:'CT'},
{value:'DE', text:'Delaware', key:'DE'},
{value:'DC', text:'District of Columbia', key:'DC'},
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
{value:'NH', text:'New Hampshire', key:'NH'},
{value:'NJ', text:'New Jersey', key:'NJ'},
{value:'NM', text:'New Mexico', key:'NM'},
{value:'NY', text:'New York', key:'NY'},
{value:'NC', text:'North Carolina', key:'NC'},
{value:'ND', text:'North Dakota', key:'ND'},
{value:'OH', text:'Ohio', key:'OH'},
{value:'OK', text:'Oklahoma', key:'OK'},
{value:'OR', text:'Oregon', key:'OR'},
{value:'PA', text:'Pennsylvania', key:'PA'},
{value:'RI', text:'Rhode Island', key:'RI'},
{value:'SC', text:'South Carolina', key:'SC'},
{value:'SD', text:'South Dakota', key:'SD'},
{value:'TN', text:'Tennessee', key:'TN'},
{value:'TX', text:'Texas', key:'TX'},
{value:'UT', text:'Utah', key:'UT'},
{value:'VT', text:'Vermont', key:'VT'},
{value:'VA', text:'Virginia', key:'VA'},
{value:'WA', text:'Washington', key:'WA'},
{value:'WV', text:'West Virginia', key:'WV'},
{value:'WI', text:'Wisconsin', key:'WI'},
{value:'WY', text:'Wyoming', key:'WY'}];

export const unitedStatesMultiplier = {
'WY': .96, 
'DC': .96, 
'VT': .96, 
'ND': .96, 
'SD': .96, 
'DE': .96, 
'MT': .96,
'NE': .96,
'RI': .98, 
'NH': .98, 
'ME': .98, 
'ID': .98, 
'WV': .98,
'NM': 1,
'NV': 1,
'UT': 1,
'KS': 1,
'AR': 1,
'MS': 1,
'IA': 1,
'CN': 1,
'OK': 1,
'OR': 1,
'CT': 1,
'KY': 1.02,
'LA': 1.02,
'SC': 1.02,
'AL': 1.02,
'MN': 1.02,
'WI': 1.02,
'MD': 1.02,
'MO': 1.02,
'TN': 1.02,
'AZ': 1.02,
'IN': 1.02,
'MS': 1.02,
'WA': 1.02,
'CO': 1.02,
'VA': 1.05,
'NJ': 1.05,
'NC': 1.05,
'GA': 1.05,
'OH': 1.05,
'PA': 1.05,
'IL': 1.05,
'FL': 1.1, 
'NY': 1.1, 
'CA': 1.1, 
'TX': 1.1
}

export const yearsIndustryOptions = [
{ value:'0-2', text:'0-2 Years', key:'0'}, 
{ value:'3-7', text:'3-7 Years', key:'3'},
{ value:'8+', text:'8+ Years', key:'8'}
];

export const yearsIndustryMultiplier = {
  '0-2': 1.05, 
  '3-7': 1,
  '8+': .95
};

export const grossIncomeOptions = [
{key: 'income1', value:'50K', text: '50K or Less'},
{key: 'income2', value:'51-75K', text:'51-75'},
{key: 'income3', value:'76-100K', text:'76-100'},
{key: 'income4', value:'101-200K', text:'101-200K'},
{key: 'income5', value:'201K+', text: '201K+'}
];

export const grossIncomeMultiplier = {
'50K': .95, 
'51-75K': 1, 
'76-100K': 1.05, 
'101-200K': 1.1
};

export const payrollOptions = [
{key: 'payroll1', value: '100K', text:'100K or Less', name: 'payroll'},
{key: 'payroll2', value: '101-150K', text: '101-150', name: 'payroll'},
{key: 'payroll3', value: '151-250K', text: '151-250', name: 'payroll'},
{key: 'payroll4', value: '101-200K', text: '251-500', name: 'payroll'},
{key: 'payroll5', value: '501+', text: '501+', name: 'payroll'}
];

export const payrollMultiplier = {
  '100K': .95, 
  '101-150K': 1, 
  '151-250K': 1.05, 
  '251-500K': 1.1
};

export const grossAnnualRevenueOptions = [
{key: '100K or Less', value: '100K or Less', text:'100K or Less'},
{key: '101-150K', value: '101-150K', text: '101-150'},
{key: '151-250K', value: '151-250K', text: '151-250'},
{key: '101-200K', value: '101-200K', text: '251-500'},
{key: '501+', value: '501+', text: '501-1Million'},
{key: '1MM+', value: '1MM+', text: '1 Million+'}
];

export const numberOfEmployeesOptions = [
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
];

export const footTrafficOptions = [
{key: 'foot50', value: 'foot50', text: 'under 50'},
{key: 'foot51', value: 'foot51', text: '51-200'},
{key: 'foot201', value: 'foot201', text: '201-500'},
{key: 'foot500', value: 'foot500', text: '501-1000'},
{key: 'foot1000', value: 'foot1000', text: '1000+'}
];

export const footTrafficQuoteWeighting = {
  'foot50': 1.2,
  'foot51': 1.5,
  'foot201':1.6,
  'foot500':1.8,
  'foot1000':5
};

