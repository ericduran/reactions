/**
 * Served under the /api/* route path.
 */
const express = require('express');
const router = express.Router();

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

module.exports = router;
