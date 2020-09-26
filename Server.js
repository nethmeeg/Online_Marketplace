const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/User');
const shops = require('./routes/api/Shop');
const items = require('./routes/api/Item');
const orders = require('./routes/api/Order');
const categories = require('./routes/api/Category');
const notices = require('./routes/api/Notice');
const messages = require('./routes/api/Message');
const offers = require('./routes/api/Offer');
const profiles = require('./routes/api/Profile');
const auth = require('./routes/api/auth');
const posts = require('./routes/api/Posts');


const app = express();
app.use(express.json());


//Body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);


//Use Routes

app.use('/api/User',users);
app.use('/api/Shop',shops);
app.use('/api/Item',items);
app.use('/api/Order',orders);
app.use('/api/Category',categories);
app.use('/api/Notice',notices);
app.use('/api/auth',auth);
app.use('/api/Message',messages);
app.use('/api/Offer',offers);
app.use('/api/Profile',profiles);
app.use('/api/Posts',posts);

const port = process.env.PORT || 5000

app.listen(port,() => console.log(`Server started on port ${port}`))
