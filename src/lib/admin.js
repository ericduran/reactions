/**
 * Served under the /admin/* route path.
 */
const express = require('express');
const router = express.Router();

/**
 * Private Path middleware.
 *
 * This middleware forces all admin paths to be
 * authenticated. In theory ;-)
 */
router.use((req, res, next) => {
  // TBD: Probably should use passport and an oatuh provider
  // github/google/etc.. No need to manage my
  // own user for myself.
  next();
});

/**
 * List all reactions instance in our datastore.
 */
router.get('/reactions', function (req, res) {
  // table with:
  // id, tag, reaction and counts
  // TBD: Delete?
});

module.exports = router;
