const router = require('express').Router();

const homeRouter = require('./home.routes');
const userRouter = require('./users.routes');

router.use('/', homeRouter);
router.use('/users', userRouter);

module.exports = router;
