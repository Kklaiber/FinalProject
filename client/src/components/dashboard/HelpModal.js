import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

const HelpModal = () => (
  
    <Popup trigger={<button className="btn that-blue-color text-white float-right"> Help </button>} modal>
    
      {close => (
        <div className="modalWrapper">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="modalStyle">
          <div className="backdropStyle">
          
          <div className="modalStyle">
            {' '}
            To find groups near you check out Communities page. Looking to create your own group?
            Go to your Profile page and click Add Group!
            <br/>
            The Dashboard displays the most recent general posts. You can also create posts that will only go to your specific community group while on that page.
            <br/>
            To see Events near you or if you'd like to create one yourself go to the Events Page!
            <br/> 
            You can also see all other users near you on the Friends Page. 
          </div>
          {/* <div className="actions">
            <Popup
              trigger={<button className="button"> Trigger </button>}
              position="top center"
              closeOnDocumentClick
            >
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                magni omnis delectus nemo, maxime molestiae dolorem numquam
                mollitia, voluptate ea, accusamus excepturi deleniti ratione
                sapiente! Laudantium, aperiam doloribus. Odit, aut.
              </span>
            </Popup> */}
            <div>
            <button
              className="modalbutton"
              onClick={() => {
                console.log('modal closed ')
                close()
              }}
            >
              Close
            </button>
          </div>
        </div>
        
        </div>
        </div>
      )}
    </Popup>
  )

export default HelpModal;