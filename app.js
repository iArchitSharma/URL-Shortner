const express = require('express');
const mongoose = require('mongoose');
const shortUrl = require('./models/url');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/urlShortner')
.then(()=>console.log('MongoDB connected'))
.catch(()=>console.log('Unable to connect to Mongoose'));

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

app.get('/', async (req,res)=>{
    const shortUrls = await shortUrl.find();
    res.render('index', {shortUrls: shortUrls});
})

app.post('/shortUrls', async (req,res)=>{
    await shortUrl.create({full: req.body.fullUrl});
    res.redirect('/');
})

app.get('/:shortUrl', async (req,res) => {
    const url = await shortUrl.findOne({short: req.params.shortUrl});
    if (!url) return res.sendStatus(404);

    url.clicks++;
    url.save();

    res.redirect(url.full);
})

const port = process.env.port || 5000;

app.listen(port, ()=>{
    console.log('Server running on 5000');
});