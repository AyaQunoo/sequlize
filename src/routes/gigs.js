const router = require('express').Router();
const db = require('../Database/connection')
const Gig = require('../Database/models');
const sequelize =require('sequelize')
const Op = sequelize.Op;
router.get('/', (req, res) => {
    Gig.findAll().then(gigs => res.send(gigs)).catch(err => console.log(err))
})
router.post('/add', (req, res) => {
    const { title, technologies, email, budget, description } = req.body;
    Gig.create({
        title,
        description,
        email,
        technologies,
        budget,
    }).then(gig => res.send('added successfully')).catch(err => console.log(err))

})
router.get('/search',(req,res)=>{
      const {term}=req.query;
      Gig.findAll({where:{technologies:{[Op.like]: '%'+term+ '%'}}}).then(gigs=>
        res.send(gigs)
      ).catch(err=>console.log(err))

})
module.exports = router;