const express = require('express');
const router = express.Router();

router.get('/api/calendar', (req, res) => {
  const { hostUserId } = req.query;

  res.json({
    name: 'Eng Test User',
    timeslotLengthMin: 60,
    // This is mock data that you should remove and replace with `db.calendar.findEventsForUser`.
    // See the README for more details.
    timeslots: [
      '2021-11-24T14:00:00.000',
      '2021-11-24T15:00:00.000',
      '2021-11-24T16:00:00.000',
      '2021-11-24T19:00:00.000',
      '2021-11-24T20:00:00.000',
      '2021-11-24T21:00:00.000',
      '2021-11-25T14:00:00.000',
      '2021-11-25T18:00:00.000',
      '2021-11-25T19:00:00.000',
      '2021-11-25T20:00:00.000',
      '2021-11-25T21:00:00.000',
      '2021-11-26T14:00:00.000',
      '2021-11-26T15:00:00.000',
      '2021-11-26T16:00:00.000',
      '2021-11-26T19:00:00.000',
      '2021-11-26T20:00:00.000',
      '2021-11-26T21:00:00.000',
      '2021-11-27T14:00:00.000',
      '2021-11-27T15:00:00.000',
      '2021-11-27T16:00:00.000',
      '2021-11-27T17:00:00.000',
      '2021-11-27T18:00:00.000',
      '2021-11-27T19:00:00.000',
      '2021-11-27T20:00:00.000',
      '2021-11-27T21:00:00.000',
      '2021-11-28T14:00:00.000',
      '2021-11-28T20:00:00.000',
      '2021-11-28T21:00:00.000',
      '2021-11-29T14:00:00.000',
      '2021-11-29T15:00:00.000',
      '2021-11-29T16:00:00.000',
      '2021-11-29T17:00:00.000',
      '2021-11-29T18:00:00.000',
      '2021-11-29T19:00:00.000',
      '2021-11-29T20:00:00.000',
      '2021-11-29T21:00:00.000',
      '2021-11-30T14:00:00.000',
      '2021-11-30T15:00:00.000',
      '2021-11-30T16:00:00.000',
      '2021-11-30T17:00:00.000',
      '2021-11-30T18:00:00.000',
      '2021-11-30T19:00:00.000',
      '2021-11-30T20:00:00.000',
      '2021-11-30T21:00:00.000',
    ],
  });
});

module.exports = router;
