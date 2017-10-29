import express from 'express';
import path from 'path';
import ejs from 'ejs';
import router from './router';

const port = 3000;
const app = express();

app.set('views', path.join(__dirname, '/../public/'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

app.use(express.static(path.join(__dirname, '/../public/')));

let router_with_app = router(app);
app.use('/', router_with_app);

app.listen(port, () => console.log('listen on ' + port));