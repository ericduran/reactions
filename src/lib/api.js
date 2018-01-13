/**
 * Served under the /a/* route path.
 */
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

// We'll be working with json.
router.use(bodyParser.json());

/**
 * Accept header middleware.
 *
 * This middleware forces all API request to have the
 * required accept headers.
 * e.g: application/json, application/vnd.ejd.reactions+json
 *
 * @see https://en.wikipedia.org/wiki/Media_type
 */
router.use((req, res, next) => {
  // Use a Set instead of trying to key check an array.
  const acceptHeaders = new Set(req.accepts());

  if (!acceptHeaders.has('application/json') || !acceptHeaders.has('application/vnd.ejd.reactions+json')) {
    res.status(406).json({ error: '406: Not Acceptable' });
    return;
  }

  next();
});

/**
 * Return a reaction set with the requested ID.
 */
router.get('/reactions/:id', function (req, res) {
  // Return json response with info on this reaction:
  // { id: 'init-love', tag: 'initial-reaction-post', type: 'item', set: {heart: 100 } }
  // { id: 'reaction-post-title', tag: 'initial-reaction-post', type: 'group', set: {heart: 0, thumbsUp: 0, thumbsDown: 0, smile: 0, confused: 0, tada: 0} }
  const id = req.params.id;

  res.json({ id: 'b-id-init-love-item', type: 'item', set: {heart: 100 } });
});

/**
 * Return all reactions with a specific tag.
 *
 * This lets us make one request for all the reactions on
 * a signle page. We automatically tag every reaction with the
 * page url.
 */
router.get('/reactions/tag/:tag', function (req, res) {
  // Return all reactions matching the tag.
  const tag = req.params.tag;

  res.json([
    { id: 'b-id-init-love-item', type: 'group', set: { heart: 100 } },
    { id: 'reaction-post-title',
      tag: 'initial-reaction-post',
      type: 'group',
      set: {
        heart: 0,
        thumbsUp: 0,
        thumbsDown: 0,
        smile: 0,
        confused: 0,
        tada: 0
      }
    }
  ]);
});

/**
 * Increment/Decrement ID.
 *
 * I might not allow decrementing on the 1st pass lol
 * Doesn't really meet MVP - :joy:
 * ex. key: "heart" || "smile"
 */
router.post('/reactions/:id', (req, res) => {
  // If the entity is of type item, we only need to increment the single
  // item in the set.
  const id = req.params.id;
  // key & action will be in the body.
  // key = [heart, thumbsUp, etc...]
  // action = increment || decrement

  // If it fails, return non 200, but our client will swallow the error,
  // no point in letting the user know but we'll log it.
  res.json({ id: 'b-id-init-love-item', type: 'item', set: {heart: 100 } });
});


module.exports = router;
