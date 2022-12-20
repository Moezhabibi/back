const express = require ('express')
const { AddProfile, readProfiles , deleteProfiles ,updateProfile ,readProfile } = require('../Controlleurs/Profile')

const ProfileRoute = express.Router()
ProfileRoute.post('/AddProfile',AddProfile)
ProfileRoute.get('/readProfiles',readProfiles)
ProfileRoute.delete('/deleteProfile/:id',deleteProfiles)
ProfileRoute.put('/updateProfile/:id',updateProfile)
ProfileRoute.get('/readProfile/:id',readProfile)
module.exports=ProfileRoute