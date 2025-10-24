const express = require('express');
const router = express.Router();
const models = require('../database/models'); // models.YourModel
const logger = require('../logger');
const yup = require('yup');

// ==== Your routes goes here ====

router.get('/', async (req, res) => {
    try {
        const things = await models.Thing.findAll();
        return res.render('index', {
            things: things
        });
    } catch (error) {
        logger.error(`Encounterd error processing request ${req.method} ${req.originalUrl}. Error: ${error}`);
        return res.status(500).send('Server error');
    }
});

router.post('/create', async (req, res) => {
    try {
        // TODO: Validate req.body.name using Yup
        await models.Thing.create({ name: req.body.name });
        return res.redirect('/');
    } catch (error) {
        logger.error(`Encounterd error processing request ${req.method} ${req.originalUrl}. Error: ${error}`);
        return res.status(500).send('Server error');
    }
});

router.get('/delete', async (req, res) => {
    try {
        // TODO: Validate req.query.uuid using Yup
        await models.Thing.destroy({
            where: {
                uuid: req.query.uuid
            }
        });
        return res.redirect('/');
    } catch (error) {
        logger.error(`Encounterd error processing request ${req.method} ${req.originalUrl}. Error: ${error}`);
        return res.status(500).send('Server error');
    }
});

module.exports = router;