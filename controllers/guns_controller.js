const express = require('express')
const Gun = require('../models/guns.js')
const guns = express.Router()

const isAuthenticated = (req,res, next) => {
    if (req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}
//SEED
guns.get('/setup/seed',(req,res) => {
    Gun.create([
        {
            name: 'Charge Rifle',
            description:'Charged beam sniper rifle',
            class: 'Sniper',
            ammo: 'Sniper',
            fireRate:.5,
            damage: 45,
            dps:23,
            adsSpeed:35,
            reloadTime:3.6,
            recoil:'vertical kick'
        },
        {
            name: 'Longbow DMR',
            description: 'Semi auto sniper',
            class: 'Sniper',
            ammo: 'Sniper',
            fireRate:1.3,
            damage: 55,
            dps:64,
            adsSpeed:'35%',
            reloadTime:3.66,
            recoil: 'Left curve'
        },
        {
            name: 'Sentinel',
            description:'Bolt-action sniper rifle',
            class:'Sniper',
            ammo:'Sniper',
            fireRate:.625,
            damage: 70,
            dps: 40,
            adsSpeed:35,
            reloadTime: 3.6,
            recoil: 'minor'

        },
        {
            name:'Triple Take',
            description: 'Triple-barrel sniper',
            class:'Sniper',
            ammo:'Sniper',
            fireRate: 1.2,
            damage: 69,
            dps: 101,
            adsSpeed: 35,
            reloadTime:3.4,
            recoil:'Vertical, slightly left'
        },
        {
            name: 'Kraber',
            description: ' (Care package) bolt action sniper',
            class: 'Sniper',
            ammo: 'Special',
            fireRate:.6,
            damage:145,
            dps: 87,
            adsSpeed: 35,
            reloadTime:4.3,
            recoil:'minor'
        },
        {
            name:'Devotion',
            description:'Full-auto energy LMG',
            class:'LMG',
            ammo:'Energy',
            fireRate: 15,
            damage:16,
            dps:240,
            adsSpeed: 40,
            reloadTime:3.63,
            recoil:'upward zig zag'
        },
        {
            name: 'L-Star EMG',
            description:'Plasma fueled EMG',
            class:'LMG',
            ammo:'Energy',
            fireRate:6,
            damage:18,
            dps:180,
            adsSpeed:50,
            reloadTime:2.45,
            recoil:'hard left kick then vertical'
        },
        {
            name: 'M600 Spitfire',
            description:'Full-auto LMG',
            class:'LMG',
            ammo:'Heavy',
            fireRate:9,
            damage:19,
            dps:171,
            adsSpeed:40,
            reloadTime:3.8,
            recoil:'vertical zigzag'
        },
        {
            name: 'Havoc Rifle',
            description: 'Wind-up Energy assault rifle',
            class: 'AR',
            ammo:'Energy',
            fireRate:11.2,
            damage: 18,
            dps: 202,
            adsSpeed: 50,
            reloadTime:3.2,
            recoil:' strong vertical'
        },
        {
            name: 'VK-47 Flatline',
            description:'Full-auto with a punch',
            class:'AR',
            ammo:'Heavy',
            fireRate:6,
            damage:19,
            dps:190,
            adsSpeed:50,
            reloadTime:3.1,
            recoil:'up and left'
        },
        {
            name:'G7 Scout',
            description:'Semi-auto light marksman rifle',
            class:'AR',
            ammo:'light',
            fireRate:4,
            damage:34,
            dps:136,
            adsSpeed:35,
            reloadTime:3,
            recoil:'High vertical'
        },
        {
            name:'30-30 Repeater',
            description:'Semi-auto heavy repeater',
            class:'AR',
            ammo:'Heavy',
            fireRate:2.3,
            damage: 42,
            dps:98,
            adsSpeed:35,
            reloadTime:3,
            recoil:'upwards kick',
        },
        {
            name:'Hemlock Burst AR',
            description:'3-round burst assault rifle',
            class:'AR',
            ammo:'Heavy',
            fireRate:643,
            damage:20,
            dps:214,
            adsSpeed:50,
            reloadTime:2.85,
            recoil:'vertical/left'
        },
        {
            name:'R-301 Carbine',
            description:'Full-auto with high accuracy'
        }
    ])
})

// NEW

// guns.get('/new', (req,res) => {
//     res.render('guns/new.ejs', {
//         currentUser: req.session.currentUser
//     })
// })

// EDIT

// guns.get('/:id/edit', (req,res) => {
// Gun.findById(req.params.id, (error, foundGun) => {
//     res.render('guns/edit.ejs', {
//         gun:foundGun,
//         currentUser:req.session.currentUser
//
//     })
// })
// })

/// INDEX
guns.get('/',(req,res) => {
    Gun.find({},(error, allGuns) => {
        res.render('guns/index.ejs', {
            guns: allGuns,
            // currentUser: req.session.currentUser
        })
    })
})
module.exports = guns
