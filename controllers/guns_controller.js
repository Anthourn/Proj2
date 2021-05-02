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
            description:'Full-auto with high accuracy',
            class:'AR',
            ammo:'Light',
            fireRate:13.5,
            damage:14,
            dps:189,
            adsSpeed:50,
            reloadTime:3.2,
            recoil:'vertical, right curve'

        },
        {
            name:'Alternator',
            description:'twin barrel full auto',
            class:'SMG',
            ammo:'Light',
            fireRate:6,
            damage:16,
            dps:160,
            adsSpeed:85,
            reloadTime:2.23,
            recoil:'vertical'
        },
        {
            name:'R-99',
            description:'Rapid-fire automatic SMG',
            class:'SMG',
            ammo:'Light',
            fireRate:18,
            damage:11,
            dps:198,
            adsSpeed:85,
            reloadTime:2.45,
            recoil:'Vertical plus right curve'

        },
        {
            name:'Volt',
            description:'Energy actuated SMG',
            class:'SMG',
            ammo:'Energy',
            fireRate: 12,
            damage:15,
            dps: 180,
            adsSpeed: 85,
            reloadTime:2.25,
            recoil: 'minor'
        },
        {
            name:'Prowler',
            description:'5-round burst SMG',
            class:'SMG',
            ammo:'Special Heavy',
            fireRate:13.25,
            damage:15,
            dps:199,
            adsSpeed: 85,
            reloadTime:2.6,
            recoil:'Kick and vertical with left curve'
        },
        {
            name:'RE-45',
            description:'full auto pistol',
            class: 'Pistol',
            ammo:'Light',
            fireRate: 13,
            damage: 12,
            dps: 150,
            adsSpeed:95,
            reloadTime:1.95,
            recoil:'Hard curve right'
        },
        {
            name:'P2020',
            description:'semi auto pistol',
            class:'Pistol',
            ammo:'Light',
            fireRate:'8.5',
            damage:15,
            dps:107,
            adsSpeed:100,
            reloadTime:1.25,
            recoil:'vertical'
        },
        {
            name:'Wingman',
            description:'High powered revolver',
            class:'Pistol',
            ammo:'Heavy',
            fireRate:2.6,
            damage:45,
            dps:117,
            adsSpeed:100,
            reloadTime:2.1,
            recoil:'vertical'

        },
        {
            name:'EVA-8 Auto',
            description:'Description',
            class:'Shotgun',
            ammo:'Shotgun',
            fireRate: 2.1,
            damage:63,
            dps: 132,
            adsSpeed:90,
            reloadTime:3,
            recoil:'N/A'
        },
        {
            name:'Mastiff',
            description:'Powerful semi-auto shotgun',
            class:'Shotgun',
            ammo:'Shotgun',
            fireRate:1.1,
            damage:88,
            dps:88,
            adsSpeed:90,
            reloadTime:6.5,
            recoil:'N/A'
        },
        {
            name:'Peacekeeper',
            description:'Lever-action shotgun',
            class:'Shotgun',
            ammo:'Special Shotgun',
            fireRate:.96,
            damage:110,
            dps:110,
            adsSpeed:90,
            reloadTime:3.35,
            recoil:'N/A'
        },
        {
            name:'Mozambique',
            description:'Triple-barrel shotgun pistol',
            class:'Shotgun',
            ammo:'Shotgun',
            fireRate:2.2,
            damage: 45,
            dps:99,
            adsSpeed:100,
            reloadTime:2.6,
            recoil:'N/A'
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
