require('dotenv').config()
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const next = require('next');
const nextapp = next({ dev: true });
const handle = nextapp.getRequestHandler();
const fileUpload = require('express-fileupload')


// const AppError = require('./utils/appError');
const globalErrorHandler = require('./src/controllers/errorController');
const userRouter = require('./src/routers/userRouters');
const AppError = require('./src/utils/appError');

// Start express app

nextapp.prepare().then(() => {
  const server = express();
  var http = require('http').createServer(server);
  server.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
  }));
  server.enable('trust proxy');

  server.set('view engine', 'pug');
  server.set('views', path.join(__dirname, 'views'));

  // 1) GLOBAL MIDDLEWARES
  // Implement CORS
  server.use(cors());
  // Access-Control-Allow-Origin *
  // api.natours.com, front-end natours.com
  // app.use(cors({
  //   origin: 'https://www.natours.com'
  // }))

  server.options('*', cors());
  // app.options('/api/v1/tours/:id', cors());

  // Serving static files
  server.use(express.static(path.join(__dirname, 'public')));


  // Development logging
  if (process.env.NODE_ENV === 'development') {
    server.use(morgan('dev'));
  }

  // Limit requests from same API


  // Stripe webhook, BEFORE body-parser, because stripe needs the body as stream

  // Body parser, reading data from body into req.body
  server.use(express.json({ limit: '10kb' }));
  server.use(express.urlencoded({ extended: true, limit: '10kb' }));
  server.use(cookieParser());



  // Test middleware
  server.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    // console.log(req.cookies);
    next();
  });

  // 3) ROUTES
  server.use('/api/v1/admin', userRouter);


  server.get('*', (req, res) => {
    return handle(req, res);
  });


  server.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });

  server.use(globalErrorHandler);

  const port = process.env.PORT;
  const app =  http.listen(port, () => {
  console.log(`App running on port http://localhost:${port}...`);
});


}).catch(err => console.log(err, '--'));