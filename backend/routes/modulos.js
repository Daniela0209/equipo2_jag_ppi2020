const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../db/db');

router.get('/', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM USER ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

  router.get('/newUser/:id', (req, res) => {
     const {id} = req.params;
  mysqlConnection.query('SELECT * FROM USER WHERE id =? ',[id],(err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });

router.post('/newUser',(req,res)=>{

const {name, password, email, birthdate} = req.body;

let newUserArray = [name, password, email, birthdate];

let newUser = `INSERT INTO USER(name, password, email, birthdate)
                  VALUES(?,?)`;
mysqlConnection.query(newUser, newUserArray, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Registro exitoso`, })
  });
}); 

router.put('/newUser/:id', (req, res) => {
  const {name, password, email, birthdate} = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE newUser SET newUser = ?, name = ? WHERE id = ?`, 
  [name, password, email, birthdate], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Datos actualizados correctamente'});
    } else {
      console.log(err);
    }
  });
});

router.delete('/newUser/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM newUser WHERE id = ?',
   [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Cuenta eliminada correctamente!'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;