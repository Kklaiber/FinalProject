import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

const PopupModal = () => (
  <Popup trigger={<button className="button"> New to Collective? </button>} modal>
    {close => (
      <div>
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Welcome! </div>
        <div className="content">
          {' '}
          The Collective is designed to help you connect to other amazing people in your 
          area through shared interests, events, and community groups!<br/>
          <br/>
          To get started go ahead and create your own profile. You can link your
          Facebook, Twitter, LinkedIn, and GitHub accounts!
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
            className="button"
            onClick={() => {
              console.log('modal closed ')
              close()
            }}
          >
            Close
          </button>
        </div>
      </div>
    )}
  </Popup>
)

  export default PopupModal;