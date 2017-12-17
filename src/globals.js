const { lodash, moment, axios, semanticUIReact, React } = window
const Component = (window.Component = window.React.Component)
const types = (window.types = window.PropTypes)

const sleep = (ms = 0) => new Promise(res => setTimeout(res, ms))

const toAmount = (val = 0) => {
  const { toNumber } = lodash

  const base = toNumber(
    val
      .toString()
      .replace(/\..*/, '')
      .replace(/\D+/g, '')
  ).toLocaleString()

  return `$${base}`
}

const baseContextTypes = (window.contextTypes = window.baseContextTypes = {
  runtime: types.object,
  database: types.object,
  storage: types.object,
  auth: types.object,
  firebase: types.object,
  stores: types.object,
  engine: types.object,
  currentState: types.object
})

Object.assign(window, semanticUIReact)

window.Row = semanticUIReact.Grid.Row
window.Col = window.Column = semanticUIReact.Grid.Column
window.moment = moment
const Link = (window.Link = window.ReactRouterDOM.Link)
const NavLink = (window.NavLink = window.ReactRouterDOM.NavLink)
const runtime = (window.runtime = window.runtime || require('./runtime'))

module.exports = {
  Component,
  axios,
  types,
  skypager: runtime,
  moment,
  runtime,
  React,
  Link,
  NavLink,
  Column: window.Column,
  Row: window.Row,
  Col: window.Col,
  semanticUIReact,
  baseContextTypes,
  sleep,
  toAmount,
  lodash,
  ...semanticUIReact
}
