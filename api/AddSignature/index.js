const { v4: uuidv4 } = require('uuid');

module.exports = async function (context, req) {
    return {
        signature: JSON.stringify({
            id: uuidv4(),
            timestamp: new Date(),
            name: req.body.name,
            institution: req.body.institution,
            email: req.body.email,
        }),
        res: {
            body: {

            }
        }
    }
}