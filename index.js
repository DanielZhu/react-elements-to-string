/**
 * @file The main file of ReactElementsToString
 *
 * @author Daniel<daniel.zhu@thenetcircle.com>
 * @description
 *
 * @date 2017-01-04
 */
// import { html as beautifyHtml } from 'js-beautify'
import React, { PropTypes, Component } from 'react'

class ReactElementsToString extends Component {
  // constructor (props) {
  //   super(props)
  // }
  componentWillMount () {

  }
  componentDidMount () {

  }
  stringifyReactElement (el, opts) {
    let { useFuncContent } = this.props
    let str = ''

    // Regular HTML tag s
    if (typeof el.type === 'string') {
      // Tag start now
      str += `<${el.type}`

      const children = el.props.children

      const hasChildren = children !== undefined
      // Delete children, has some issues
      // el.props.children = undefined

      // Deal with tag's properties
      if (el.props !== undefined && typeof el.props === 'object' && !(el.props instanceof Array)) {
        for (let attrKey in el.props) {
          if (el.props.hasOwnProperty(attrKey) && attrKey !== 'children') {
            str += ` ${attrKey}=`

            if (typeof el.props[attrKey] === 'string') {
              str += `'${el.props[attrKey]}'`
            } else if (el.props[attrKey] instanceof Array || typeof el.props[attrKey] === 'object') {
              str += '{'
              str += JSON.stringify(el.props[attrKey]).replace(/:"/g, ': \'').replace(/"/g, '\'')
              str += '}'
            } else if (typeof el.props[attrKey] === 'boolean') {
              str += '{'
              str += el.props[attrKey]
              str += '}'
            } else if (typeof el.props[attrKey] === 'function') {
              str += '{'
              str += useFuncContent ? el.props[attrKey] : el.props[attrKey].name
              str += '}'
            }
          }
        }
        // Close the start tag with a lot of properties
        // str += '>'
      }
      // Tag ending here
      if (hasChildren) {
        str += '>'
        if (children instanceof Array) {
          // New child tags
          children.map((item, idx) => {
            str += this.stringifyReactElement(item, opts)
          })
        } else if (typeof children === 'string' || typeof children === 'number') {
          // or just the content of the current tag
          str += children
        } else if (typeof children === 'object') {
          str += this.stringifyReactElement(children, opts)
        }
        str += `</${el.type}>`
      } else {
        str += ' />'
      }
    } else if (typeof el.type === 'function') {
      // Tag start now
      str += `<${el.type.name}`

      const children = el.props.children

      const hasChildren = children !== undefined
      // Delete children, has some issues
      // el.props.children = undefined

      // Deal with tag's properties
      if (el.props !== undefined && typeof el.props === 'object' && !(el.props instanceof Array)) {
        for (let attrKey in el.props) {
          if (el.props.hasOwnProperty(attrKey) && attrKey !== 'children') {
            str += ` ${attrKey}=`

            if (typeof el.props[attrKey] === 'string') {
              str += `'${el.props[attrKey]}'`
            } else if (el.props[attrKey] instanceof Array || typeof el.props[attrKey] === 'object') {
              str += '{'
              str += JSON.stringify(el.props[attrKey]).replace(/:"/g, ': \'').replace(/"/g, '\'')
              str += '}'
            } else if (typeof el.props[attrKey] === 'boolean') {
              str += '{'
              str += el.props[attrKey]
              str += '}'
            } else if (typeof el.props[attrKey] === 'function') {
              str += '{'
              str += useFuncContent ? el.props[attrKey] : el.props[attrKey].name
              str += '}'
            }
          }
        }
        // Close the start tag with a lot of properties
        // str += '>'
      }
      // Tag ending here
      if (hasChildren) {
      } else {
        str += ' />'
      }
    }

    return str
    // return beautifyHtml(
    //   str,
    //   {
    //     indent_size: 2
    //   }
    // )
  }
  render () {
    return <div>{this.stringifyReactElement(this.props.reactElements)}</div>
  }
}

ReactElementsToString.proptypes = {
  reactElements: PropTypes.object,
  useFuncContent: PropTypes.bool
}

export default ReactElementsToString
