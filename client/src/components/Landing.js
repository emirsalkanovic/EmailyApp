import React from 'react';

const Landing = () => {
	return(
		<div style={{ textAlign: 'center'}}>
			<h1>Emaily</h1>
			<div className="divider"></div>

			 <div className="row">
			  <div className="card">
    			<div className="card-image waves-effect waves-block waves-light">
     			 <img className="activator" src="https://i.kinja-img.com/gawker-media/image/upload/s--VOCOb4Ne--/c_scale,f_auto,fl_progressive,q_80,w_800/aotfm79t2d3x917fmmbw.png"></img>
    		    </div>
    		<div className="card-content">
      		  <span className="card-title activator grey-text text-darken-4">Emaily<i class="material-icons right">more_vert</i></span>
     		  
    		</div>
    		<div className="card-reveal">
    		  <span className="card-title grey-text text-darken-4">Emaily<i class="material-icons right">close</i></span>
    		  <p>Collect feedback from your users.Find out how your clients feel about your service. Use Emaily to send your customers email and collect feedback from them.</p>
    		</div>
		  </div>

			   <div className="col l4 s12">
			     <div className="section">
    				<h5>Step 1</h5>
    				<div className="divider"></div>
    				<p>Login on Emaily</p>
  				 </div>
			   </div>

			   <div className="col l4 s12">
			     <div className="section">
    				<h5>Step 2</h5>
    				<div className="divider"></div>
    				<p>Create Survey with the question that your customers need to answer</p>
  				 </div>
			   </div>

			   <div className="col l4 s12">
			     <div className="section">
    				<h5>Step 3</h5>
    				<div className="divider"></div>
    				<p>Collect the feedback and find out how they feel about it.</p>
  				 </div>
			   </div>
			 </div>
		</div>
		);
};

export default Landing;