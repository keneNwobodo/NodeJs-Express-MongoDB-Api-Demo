const express = require('express')
const router = express.Router()
const Tweep = require('../models/Tweeps')


router.get('/', (request, response) =>{
    response.send("testing testing testing")
})

router.post('/signup',  (request, response) =>{
    const tweep = new Tweep({
        userName:request.body.userName,
        email:request.body.email,
        password:request.body.password
    })
    tweep.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router