import React, { useState } from 'react'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircleMenu, CircleMenuItem} from "react-circular-menu";

import "./CircularMenu.css"



export default function CircularMenu() {

  const [isActive, setActive] = useState(false);

return (
  <>

    <div className="container" style={{ width: "100%", height: "90vh" }}>
      <CircleMenu
        startAngle={-90}
        rotationAngle={360}
        itemSize={2}
        radius={5}
        rotationAngleInclusive={false}
        tooltip="Open Menu"
        className='circular_menu'
        menuToggleClassName='circular_menu-toggle'
        onMenuToggle={() => { setActive(!isActive) }}>
        <CircleMenuItem target="_black" link="https://github.com/Abhilashgupta2706" className='circular_menu_item' tooltip="Github">
          <FontAwesomeIcon icon={faGithub} />
        </CircleMenuItem>

        <CircleMenuItem target="_black" link="https://www.linkedin.com/in/abhilash-gupta-8599b0203" className='circular_menu_item' tooltip="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </CircleMenuItem>

        <CircleMenuItem target="_black" link="https://twitter.com/abhilashgupta27" className='circular_menu_item' tooltip="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </CircleMenuItem>

        <CircleMenuItem target="_black" link="https://twitter.com/abhilashgupta27" className='circular_menu_item' tooltip="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </CircleMenuItem>

        <CircleMenuItem target="_black" link="https://twitter.com/abhilashgupta27" className='circular_menu_item' tooltip="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </CircleMenuItem>

      </CircleMenu>
    </div>

  </>
)
}
