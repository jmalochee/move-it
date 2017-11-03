import React from 'react';
import Experience from './Experience';

const Pitch = props => {
  let moverBlurb = "I'm a moving company that values my customer's time but still want to be able to provide them with an accurate quote."
  let userBlurb = "I'm getting ready to move and don't have time to apply for a quote more than once."

  return(
    <div className="pitch row">
      <Experience modifier="user" blurb={userBlurb} regLink="/auth/google_oauth2"/>
      <Experience modifier="mover" blurb={moverBlurb} regLink="/auth/google_oauth2"/>
    </div>
  )
}

export default Pitch;
