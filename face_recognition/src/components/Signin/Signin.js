import React from 'react';

const Signin = ({onRouteChange}) =>{

	return(

		<div style={{height:'100vh',display: 'flex',
    alignItems: 'center'
    }}>

		<article className="mw6 center bg-white br3 pa3 pa1-ns mv3 ba b--black-10" style={{padding:'30px'}} >
			<main className="pa4 black-80">
			  <form className="measure ">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
			      </div>
			     {/* <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label> */}  
			    </fieldset>
			    <div className="">
			      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" 
			      	onClick={() => onRouteChange('home')}/>
			    </div>
			    <div className="lh-copy mt3">
			      <a onClick={()=>onRouteChange('register')} href="#0" className="f6 link dim black db pointer">Sign up</a>
			      {/*<a href="#0" className="f6 link dim black db">Forgot your password?</a>
			   		*/}
			    </div>
			  </form>
			</main>
		</article>

		</div>

	);

}

export default Signin;