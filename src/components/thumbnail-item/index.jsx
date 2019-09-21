import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

export const ThumbnailItem = ({ node }) => {
  
  const dateFormat = React.useCallback(() => {
    const {frontmatter: { date }} = node;
    const dateObj = new Date(date);
    return `${dateObj.getFullYear()}/${dateObj.getMonth() + 1}/${dateObj.getDay()+1}`
  }, [ node ]);
  
  return (
    <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
      <div key={node.fields.slug}>
        <h3>
          {node.frontmatter.title || node.fields.slug}
        </h3>
        <p className={"thumbnail-date"}>{dateFormat(node)}</p>
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    </Link>
  )
}
