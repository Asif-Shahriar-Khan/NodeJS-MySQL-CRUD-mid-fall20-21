//declaration
const express 		= require('express');
const bodyParser 	= require('body-parser');
const exSession 	= require('express-session');
const cookieParser 	= require('cookie-parser');
const superadminlogin			= require('./controller/superadminlogin');
const dash			= require('./controller/dash');
const logout		= require('./controller/logout');
const shop			= require('./controller/shop');
const app 			= express();

//config
app.set('view engine', 'ejs');

//middleware
app.use('/abc', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false }));
app.use(cookieParser());

app.use('/superadminlogin', superadminlogin);
app.use('/dash', dash);
app.use('/logout', logout);
app.use('/shop', shop);

//route
app.get('/', (req, res)=>{
	res.send('Hello from express server');	
});

//server startup
app.listen(3000, (error)=>{
	console.log('express server started at 3000...');
});