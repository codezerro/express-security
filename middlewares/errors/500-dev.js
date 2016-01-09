'use strict';

module.exports = function handle500dev(err, req, res) {
  res.status(err.status || 500);
  // will print stacktrace
  res.render('error', {
    message: err.message,
    error: err
  });
};
