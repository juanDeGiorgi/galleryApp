const getHome = async (req, res, next) => {
  try {
    res.status(200).render('index', { title: 'express' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getHome,
};
