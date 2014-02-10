
/*
 * GET home page.
 */

exports.index = function(req, res) {
  res.render('index', { title: 'Express' });
};

exports.learnJade = function(req, res) {
  res.render('learn-jade');
}