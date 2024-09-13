import React from "react"

const Block = ({ children }) => (
  <div className="block">
    <div className="block-interior">
      <div className="content">{children}</div>
    </div>
  </div>
)

export default Block
