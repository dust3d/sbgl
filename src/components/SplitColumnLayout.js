import { types, Container, Component } from 'globals'

export class SplitColumnLayout extends Component {
  static contextTypes = { runtime: types.object }
  state = {}

  componentWillMount() {
    const { runtime } = this.context
  }

  render() {
    const { menuItems = [] } = this.props

    return (
      <Grid>
        <Column width={4}>
          <Menu vertical inverted items={menuItems} />
        </Column>
        <Column width={12}>{this.props.children}</Column>
      </Grid>
    )
  }
}

export default SplitColumnLayout
