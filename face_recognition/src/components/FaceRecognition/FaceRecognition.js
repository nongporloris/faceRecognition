import React from 'react';

const FaceRecognition = ({ imageURL }) => {

	return(

		<div className ='pt5'>
			<img id='inputimage' className='br4' alt='' src={imageURL} width='500px' height='auto' />
		</div>

	);

}

export default FaceRecognition;

/*

https://media.istockphoto.com/id/805012064/photo/portrait-of-mature-hispanic-man.jpg?s=612x612&w=0&k=20&c=AfNa1ay8LPzaO-NOJZspqULvYavyhXg4rnJ9U_tvJY4=


*/