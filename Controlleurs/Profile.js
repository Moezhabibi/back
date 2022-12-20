const Profile = require("../Model/Profile")

const ProfileRoute = require("../Routes/ProfileRoute")

exports.AddProfile = async(req,res)=>{
    try {
        const Trouve = await Profile.findOne({email:req.body.email})
        if(Trouve){
            return res.status(400).send('email deja existant choisie une autre')
        }
        const newprofile = new Profile (req.body)

        await newprofile.save()
        res.status(200).send({msg:'succes',newprofile})
    } catch (error) {
        
    }
}
exports.readProfiles = async(req,res)=>{
    try {
        const Profiles = await Profile.find()
        res.status(200).send({Msg : "list of Profiles" ,Profiles})
    } catch (error) {
        res.status(500).send('cold not find profiles')
        
    }

}
exports.deleteProfiles = async(req,res)=>{
    try {
        const {id}= req.params
        await Profile.findByIdAndDelete(id)
        res.status(200).send({Msg :'profile  delete'})
    } catch (error) {
        res.status(500).send('could is not delete Profile')
        
    }
}
exports.updateProfile = async(req,res)=>{
    try {
        const {id} = req.params
        await Profile.findByIdAndUpdate(id ,{ $set : req.body})
        res.status(200).send({Msg:"Profile update"})
    } catch (error) {
        res.status(500).send('could not Profile update')

        
    }
}
exports.readProfile = async(req,res)=>{
    try {
        const {id} = req.params
        const found = await Profile.findById(id)
        res.status(200).send({Msg:"Profile founded",found})
    } catch (error) {
        res.status(500).send('could not founded contact')
        
    }
}
