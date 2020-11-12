const  express = require('express');
const app = express();
const routes= require('./routes/routes');
const modulos=require('./routes/modulos')

app.set('port', 3306);

app.use(express.json());

app.use('/api', routes);
app.use('/api/modulos', modulos);


app.listen(app.get('port'), ()=>{
  console.log(`servidor corriendo en el puerto ${app.get('port')}`);
})
