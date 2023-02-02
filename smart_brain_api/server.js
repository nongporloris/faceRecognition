const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use(cors());

const database = {
	user:[
		{	id:'123',
			name: 'John',
			email: 'john@gmail.com',
			password : 'john_13579',
			entries : '0',
			joined :new Date,

		},
		{
			id:'124',
			name: 'Nongpor',
			email: 'nongpor@gmail.com',
			password : 'por_13579',
			entries : '0',
			joined :new Date,

		}
	],

	login :[
			{
				id: '987',
				hash: '',
				email : 'john@gmail.com',
			},

		]
}




app.get('/', (req, res)=>{
	res.send(database.user);
})

app.post('/signin',(req,res)=>{


	if(req.body.email === database.user[0].email &&
		req.body.password === database.user[0].password){

		

		res.json('Success to login');
	}else{
		res.status(400).json('Error for login');
	}

	// res.send('Sign in is working');

});

app.post('/register',(req,res) => {
	
	const {email, name, password} = req.body

	bcrypt.hash(password, null, null, function(err, hash) {
    	console.log(hash);
	});


	database.user.push({

		id:'125',
		name: name,
		email: email,
		password : password,
		entries : '0',
		joined :new Date,
	})

	// res.send('The user register is working');
	res.json(database.user[database.user.length -1]);
})

// app.get('/test', (req,res) =>{

// 	const userTemp = database.user.map(mapUser =>{
// 		return mapUser;
// 	})

// 	res.json(userTemp);
// })


app.get('/profile/:id', (req,res) =>{

	const {id} = req.params;
	database.user.forEach((temp) =>{

		if(temp.id === id){
			return res.json(temp);
		}
	})

	res.status(404).json('Not found the user');
})


//PUT the image to the user
app.put('/image',(req,res) =>{

	const {id} = req.body;
	database.user.forEach((temp) =>{



		if(temp.id === id){
			temp.entries++
			return res.json(temp.entries);
		}
	})

	res.status(404).json('Not found the user');
})

// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
// });

// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//     // res = false
// });

app.listen(3001, () =>{
	console.log('app is running on port 3,001');
});

// res = this is working.
//signin => POST success of fail
//register => POST new user

//profile : userID => GET user
//image posting =>PUT user
