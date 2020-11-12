const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

router.get('/usuario', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM usuario ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

router.get('/usuario/:id', (req, res) => {
    const { id } = req.params; 
    mysqlConnection.query('SELECT * FROM usuario WHERE id = ?', 
    [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });  

router.post('/usuario',(req,res)=>{

const {email, password} = req.body;

let usuario = [email, password];

let newUser = `INSERT INTO newUser(name, password, email, birthdate)
                  VALUES(?,?,?,?,?,?,?)`;
mysqlConnection.query(newUser, usuario, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Usuario registrado`, })
  });
});  

router.put('/usuario/:id', (req, res) => {
  const {email, password} = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE usuario SET email = ?,password = ?, WHERE id = ?`, 
  [email, password], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Datos actualizados'});
    } else {
      console.log(err);
    }
  });
});

router.delete('/usuario/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM usuario WHERE id = ?',
   [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Usuario eliminado!'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;