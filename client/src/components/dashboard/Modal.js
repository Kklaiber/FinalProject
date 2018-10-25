import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

const PopupModal = () => (
  
  <Popup trigger={<button className="button"> About The Collective </button>} modal>
  
    {close => (
      <div>
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="modalStyle">
        <div className="backdropStyle">
        
        <div className="modalStyle"> Welcome! </div>
        <div className="modalStyle">
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
export default PopupModal;







// import React from 'react';
// import PropTypes from 'prop-types';
// // import Popup from 'reactjs-popup';

// class PopupModal extends React.Component {
//   render() {
//     // Render nothing if the "show" prop is false
//     if(!this.props.show) {
//       return null;
//     }

//     // The gray background
//     const backdropStyle = {
//       position: 'fixed',
//       top: 0,
//       bottom: 0,
//       left: 0,
//       right: 0,
//       backgroundColor: 'rgba(0,0,0,0.3)',
//       padding: 50
//     };

//     // The modal "window"
//     const modalStyle = {
//       backgroundColor: '#fff',
//       borderRadius: 5,
//       maxWidth: 500,
//       minHeight: 300,
//       margin: '0 auto',
//       padding: 30
//     };

//     return (
//       <div className="backdrop" style={{backdropStyle}}>
//         <div className="modal" style={{modalStyle}}>
//           {this.props.children}

//           <div className="footer">
//             <button onClick={this.props.onClose}>
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// PopupModal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   show: PropTypes.bool,
//   children: PropTypes.node
// };


