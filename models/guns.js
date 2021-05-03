const mongoose = require('mongoose')

const gunSchema = new mongoose.Schema({
    name: {type:String, required: true},
    description:{type:String, required: true},
    class:{type:String, required: true},
    ammo: {type:String, required: true},
    fireRate:{type:Number, required: true},
    damage: {type: Number, required: true},
    dps: {type: Number, required: true},
    adsSpeed:{type: Number, required: true},
    reloadTime:{type:Number, required:true},
    recoil:{type:String, required: true},
    img:{type:String}


})

const Guns = mongoose.model('Gun', gunSchema)

module.exports = Guns
