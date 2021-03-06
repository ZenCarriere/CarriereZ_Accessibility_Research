const express = require('express');
const router = express.Router();

//this is where we add our middleware
const {createProxyMiddleware} = require ('http-proxy-middleware');

router.use('/api', createProxyMiddleware ({
    target: 'http://localhost:5050',
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))

router.use('/ums', createProxyMiddleware ({
    target: 'http://localhost:5050',
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))

router.get('/', (req, res) => {
    res.render('index', {message: "Hello from hbs!"});
})

router.use((req,res) => {
    res.status(404);
    res.render("error", {layout: "errorlayout.hbs", errormessage: `You lost you way! "${req.url}" doesnt exist`});
})

module.exports = router;