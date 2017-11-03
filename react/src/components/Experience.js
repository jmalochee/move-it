import React from 'react';

const Experience = props => {
  return(
    <div className="experience experience--${props.modifier} 6 columns text-center">
      <div className="experience__blurb">
        {props.blurb}
      </div>
      <a href={props.regLink} className="experience__register-button--${props.modifier} button large">Register as a {props.modifier}</a>
    </div>
  )
}

export default Experience;
