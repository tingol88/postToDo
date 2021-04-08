require('dotenv').config();
const express = require('express');
const { connect } = require('mongoose');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const cors = require('cors');
const FileStore = require('session-file-store')(session);
// const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user.js');
const todoRouter = require('./routes/todo.js');

const app = express();

const port = (process.env.PORT ?? 3001);

app.use(logger('dev'));
app.use(cors({
  origin: true,
  credentials: true,
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
}));

app.use(express.urlencoded({ extended: true }));
/* Подключаем middleware, которое позволяет читать переменные JavaScript,
сохранённые в формате JSON в body HTTP-запроса. */
app.use(express.json());

app.use(session({
  store: new FileStore(),
  key: 'sid',
  secret: 'heat',
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 12 },
}));

app.use(express.static(path.join(process.env.PWD, 'public')));

app.use('/user', userRouter);
app.use('/todo', todoRouter);

// Запуск сервера и подключение к бд.
app.listen(port, async () => {
  console.log('server app', port);
  await connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  console.log('Database online!');
});
