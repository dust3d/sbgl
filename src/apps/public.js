import { Switch, Route } from 'react-router-dom'
import LoginPage from 'pages/LoginPage'
import PublicHome from 'pages/PublicHome'
import AboutUs from 'pages/AboutUs'
import ContactUs from 'pages/ContactUs'
import FrequentlyAskedQuestions from 'pages/FrequentlyAskedQuestions'
import IndustriesBrowser from 'pages/IndustriesBrowser'
import IndustryDetails from 'pages/IndustryDetails'
import PurchaseAgreement from 'pages/PurchaseAgreement'
import PrivacyPolicy from 'pages/PrivacyPolicy'
import Referral from 'pages/Referral'
import RefundReturns from 'pages/RefundReturns'
import TermsOfUse from 'pages/TermsOfUse'
import Testimonials from 'pages/Testimonials'
import QuotePage from 'pages/QuotePage'

export const PublicApp = () => (
  <Switch>
    <Route path="/" exact component={PublicHome} />
    <Route path="/quote" exact component={QuotePage} />
    <Route path="/about-us" exact component={AboutUs} />
    <Route path="/contact" exact component={ContactUs} />
    <Route path="/faq" exact component={FrequentlyAskedQuestions} />
    <Route exact path="/industries" exact component={IndustriesBrowser} />
    <Route
      exact
      path="/industries/:industryId"
      exact
      component={IndustryDetails}
    />
    <Route exact path="/privacy" exact component={PrivacyPolicy} />
    <Route
      exact
      path="/purchase-agreement"
      exact
      component={PurchaseAgreement}
    />
    <Route exact path="/referral" exact component={Referral} />
    <Route exact path="/refunds-and-returns" exact component={RefundReturns} />
    <Route exact path="/terms-of-use" exact component={TermsOfUse} />
    <Route exact path="/testimonials" exact component={Testimonials} />
    <Route path="/sign-in" component={LoginPage} />
    <Route path="/sign-out" component={LoginPage} />
  </Switch>
)

export default PublicApp
