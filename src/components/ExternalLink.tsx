import React from "react"

export const ExternalLink = ({ children, ...rest }) => {
  return (
    <a className="external-link" {...rest} target="_blank" rel="noreferrer">
      {children}
      <span>&#8599;</span>
    </a>
  )
}

export default ExternalLink
