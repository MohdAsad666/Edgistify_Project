const User = require('../../../models/user');
const jsonwebtoken = require('jsonwebtoken');
const { json } = require('express');

module.exports.createSession = async function (req, res) {

    try {
        let user = await User.findOne({ email: req.body.email });

        if (!user || user.password != req.body.password) {
            return res.json(422, {
                message: "Invalid username password"
            });
        }

        return res.json(200, {
            message: ' Here is your token keep it safe',
            data: {
                token: jwtsign(user.toJSON(), 'codial', { expiresIn: '100000' })
            }
        })

    } catch (err) {

    }
}
