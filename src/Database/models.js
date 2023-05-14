const { Sequelize } = require('sequelize');
const db =require('./connection');

const Gig =db.define('gig',{
    
    title:{
        type: Sequelize.STRING
    },
    technologies:{
        type: Sequelize.STRING
    },
    description:{
        type: Sequelize.STRING
    },
    budget:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING,
        validate:{
            isEmail: true,                                         
        }
    },

    
},{
    timestamps: false
  })
module.exports =Gig;