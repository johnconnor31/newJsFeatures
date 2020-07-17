const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.text({
    type: function(req) {
      return 'text';
    }
  }));
app.get('/respond', (req,res) => {
        res.status(200).send('hello fren!');
});

app.post('/upload', (req, res) => {
    console.log('req is', req.body);
    res.set('content-type', 'image/jpg');
    res.set('MIME-version', '1.0');
    res.set('content-disposition', 'attachment; filename=abc.jpg;');
    res.status(200).send(req.body);
});

app.get('/submitForm', (req, res) => {
  console.log('form submit');
  setTimeout(() => res.status(200).send('Submit maybe'), 2000);
});
app.get('*', (req,res) => { 
  console.log('req',req.path);
  const file = path.resolve(__dirname,'../build/'+req.path);
  res.sendFile(file);
});

app.listen(5000, () => {
    console.log('server listening on port 5000');
});