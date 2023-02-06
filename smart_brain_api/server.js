//Remember important library
//const express = require('express');
//const cors = require('cors');
//const bodyParser = require('body-parser');

//const app = express();
//app.use(cors());
//app.use(bodyParser.json());  **** this might not need to use becaurse the new express library ****


const express = require('express');
const bodyParser = require('body-parser');	// read the json format form the body component
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'postgres',
    password : '13579',
    database : 'smart-brain'
  }
});

// knex.select('*').from('users').then(data => {
// 	console.log(data);
// });



const app = express();

app.use(bodyParser.json());
app.use(cors());



const database = {
	user:[
		{	id:'123',
			name: 'John',
			email: 'john@gmail.com',
			password : '13579',
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




// Remember get,put,post,delete with request and response

app.get('/', (req, res)=>{
	res.send('connect to smart-brain db');
})

app.post('/signin',(req,res)=>{

	const {email, password} = req.body;

	knex.select('email','hash').from('login')
	.where({email : email})
	.then(data => {
		const isValid = bcrypt.compareSync(password, data[0].hash)
		if(isValid){
			knex.select('*').from('users').where({
				email : email
			})
			.then(user => res.json(user[0]))
			.catch(error => res.status(400).json('Error to connect the user'))
		}else{
			res.status(400).json('Wrong password');
		}
	})
	.catch(error => res.status(400).json('No user match'))

});

app.post('/register',(req,res) => {
	
	const {email, name, password} = req.body
	const hash = bcrypt.hashSync(password);

	knex.transaction(trx=>{
		trx.insert({
			hash: hash,
			email: email
		})
		.into('login')
		.returning('email')
		.then(loginEmail =>{

			trx('users').returning('*').insert({
			email: loginEmail[0].email,
			name: name,
			joined: new Date(),
		})
		.then(user=>{
			res.json(user[0]);
		})
		})
	.then(trx.commit)
	.catch(trx.rollback)
	})
	.catch(err=>{
		res.status(400).json('Unable to register');
	})

	// res.send('The user register is working');
	
})

// app.get('/test', (req,res) =>{

// 	const userTemp = database.user.map(mapUser =>{
// 		return mapUser;
// 	})

// 	res.json(userTemp);
// })


app.get('/profile/:id', (req,res) =>{

	const {id} = req.params;
	
	knex.select('*').from('users').where({
		id : id
	})
	.then(response => {
		if(response.length === 0){
			res.status(400).json('Error to find the user');
		}else{
			res.json(response[0])
		}
		
	})
	.catch(error => res.status(400).json('Error to find the user'))

	// res.status(404).json('Not found the user');
})


//PUT the imageEntries to the user and increase the count++
app.put('/image',(req,res) =>{

	const {id} = req.body;
	let entriesTemp = 0;
	
	knex('users').where({id:id})
	.increment('entries', 1)
	.returning('entries') // use to return column with delete, instert, update
	.then(response => {
		if(response.length === 0){
			res.status(400).json('Sorry, we have some problem');
			
		}else{
			res.json(response[0].entries)
		}
	})
	.catch(error=> res.status(400).json('Sorry, we have some problem'))
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
