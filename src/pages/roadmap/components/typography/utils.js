import React from 'react'

/**
 * @param {String} linkString - must be in this format {[] ()} with no space between
 */
const parseLink = (linkString) => {
  const descriptionRegex = /\[(.*?)\]/;
  const linkRegex = /\((.*?)\)/;
  const link = linkString.match(linkRegex)[1]
  const linkText = linkString.match(descriptionRegex)[1]
  // console.log(_linkText, _link)
  return { linkText, link }
}

/**
 * @param {String} props.linkString - It is a link String like [link description] (https://anylocation.com/) 
 * @example <LinkElementTag linkString = {"The string goes here"} />
 */
const LinkElementTag = (props) => {
  const parsedLink = parseLink(props.linkString)
  return (
    <a href={parsedLink.link}
       target="_blank"  
       rel="noopener noreferrer"
    >
      {parsedLink.linkText}
      
    </a>
  )
}

const SpanElement = (props) => {
  return (
    <span>{props.text}</span>
  )
}

/**
 * TODO : Maybe implement multiple regex checkers here, like hashtags or priority tokens, maybe even a checklist manager etc.
 * It checks for [aici] (link), if finds it will return <span> and <a> tags concatenated
 * This function retrieves a multiline string and returns React Components based on what he founds
 * @param {String} textString - It takes a plain string, from api.arhitextura.ro
 * @returns {[<React.Components>]} 
 */
export default function parseString(textString) {
  const childArray = []
  let _key = 0;
  const _keyAdder = () => {
    return _key++
  }

  function recursiveParse(text) {
    const fullRegex = /\[(.*?)\]\((.*?)\)/g;
    const matchList = [...text.matchAll(fullRegex)]
    const currentMatch = matchList.shift()
    if (currentMatch) {
      if (currentMatch.index > 0) {
        childArray.push(<SpanElement key = {_keyAdder()} text={text.slice(0, currentMatch.index)} />)
        childArray.push(<LinkElementTag key = {_keyAdder()} linkString={currentMatch[0]} />)
        text = text.slice(currentMatch.index + currentMatch[0].length)
        return recursiveParse(text)
      } else {
        childArray.push(<LinkElementTag key = {_keyAdder()} linkString={currentMatch[0]} />)
        text = text.slice(currentMatch[0].length)
        return recursiveParse(text)
      }
    } else {
      childArray.push(<SpanElement key = {_keyAdder()} text={text} />)
      return
    }
  }
  recursiveParse(textString)
  return childArray
}
