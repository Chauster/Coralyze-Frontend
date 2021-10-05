const router = require('express').Router();
let Device = require('../models/device.model');

router.route('/').get((req, res) => {
  Device.find()
    .then((devices) => res.json(devices))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const _id = req.body._id;
  const name = req.body.name;
  const ip_add = req.body.ip_add;
  const port = req.body.port;

  const newDevice = new Device({
    _id,
    name,
    ip_add,
    port,
  });

  newDevice
    .save()
    .then(() => res.json('Device added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Device.findById(req.params.id)
    .then((device) => res.json(device))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Device.findByIdAndDelete(req.params.id)
    .then(() => res.json('Device deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Device.findById(req.params.id)
    .then((device) => {
      device._id = req.body._id;
      device.name = req.body.name;
      device.ip_add = req.body.ip_add;
      device.port = req.body.port;

      device
        .save()
        .then(() => res.json('Device updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
