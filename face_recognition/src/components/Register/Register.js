import React from 'react';

const Register = ({onRouteChange}) =>{

	return(

		<div style={{height:'100vh',display:'flex', alignItems:'center'}}>
		<article style={{padding:'30px'}} className="mw6 center bg-white br3 pa3 pa1-ns mv3 ba b--black-10 ">
			<main className="pa4 black-80">
			  <form className="measure ">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f2 fw6 ph0 mh0">Register</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="name">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
			      </div>
			     {/* <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label> */}  
			    </fieldset>
			    <div className="">
			      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" 
			      	onClick={() => onRouteChange('signin')}/>
			    </div>
			    {/*<div className='1h-copy mt3'>
			    	<p onClick={ () => onRouteChange('register')} className='f6 link dim black db' >Register</p>
			    </div>
				*/}
				

			   {/* <div className="lh-copy mt3">
			      <a href="#0" className="f6 link dim black db">Sign up</a>
			      <a href="#0" className="f6 link dim black db">Forgot your password?</a>
			    </div>*/}


			  </form>
			</main>
		</article>
		</div>

	);

}

export default Register;