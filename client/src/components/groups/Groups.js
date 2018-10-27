import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from "react-fade-in";
import HelpModal from '../dashboard/HelpModal';


 class Groups extends Component {
  render() {
      
    return (
   <div>
     <FadeIn>
      <div className="row">

  
      <div className="card community-card col-md-5">
        <img className="card-img-top" src="https://images.pexels.com/photos/134062/pexels-photo-134062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card cap"/>
        <div className="card-body">
          <h5 className="card-title">Collective Community</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        
          <Link to="/feed">
          <a href="" className="btn btn-secondary">
          Collective
          </a>
          </Link>
        </div>  
    </div>

<div className="col-md-2">
</div>

    <div className="card community-card col-md-5">
        <img className="card-img-top" src="https://images.pexels.com/photos/1083628/pexels-photo-1083628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card cap"/>
        <div className="card-body">
          <h5 className="card-title">Missions Community</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        
          <Link to="/missions">
          <a href="" className="btn btn-secondary">
          Missions
          </a>
          </Link>
        </div>  
    </div>


</div>
</FadeIn>


<FadeIn>
<div className="row">
    <div className="card community-card col-md-5">
        <img className="card-img-top" src="https://images.pexels.com/photos/615471/pexels-photo-615471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card cap"/>
        <div className="card-body">
          <h5 className="card-title">Outdoors Community</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        
          <Link to="/outdoors">
          <a href="" className="btn btn-secondary">
          Outdoors
          </a>
          </Link>
        </div>  
    </div>

    <div className="col-md-2">
    </div>

    <div className="card community-card col-md-5">
        <img className="card-img-top" src="https://images.pexels.com/photos/377058/pexels-photo-377058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card cap"/>
        <div className="card-body">
          <h5 className="card-title">Special Needs Families Community</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        
          <Link to="/feed">
          <a href="" className="btn btn-secondary">
          Not Working
          </a>
          </Link>
        </div>  
    </div>

</div>
</FadeIn>

<FadeIn>
<div className="row">
    <div className="card community-card col-md-5">
        <img className="card-img-top" src="https://images.pexels.com/photos/1249158/pexels-photo-1249158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card cap"/>
        <div className="card-body">
          <h5 className="card-title">Business Community</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        
          <Link to="/feed">
          <a href="" className="btn btn-secondary">
          Not Working
          </a>
          </Link>
        </div>  
    </div>

    <div className="col-md-2">
    </div>

    <div className="card community-card col-md-5">
        <img className="card-img-top" src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card cap"/>
        <div className="card-body">
          <h5 className="card-title">Students Community</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        
          <Link to="/feed">
          <a href="" className="btn btn-secondary">
          Not Working
          </a>
          </Link>
        </div>  
    </div>

</div>
</FadeIn>
    <HelpModal />
    <div style={{ marginBottom: "50px" }} />
</div>

    )
  }
}

export default Groups;