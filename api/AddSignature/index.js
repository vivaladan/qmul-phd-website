const { v4: uuidv4 } = require('uuid');

module.exports = async function (context, req) {
    // context.bindings.signature = JSON.stringify({
    //     id: uuidv4(),
    //     timestamp: new Date(),
    //     name: req.body.name,
    //     institution: req.body.institution,
    //     email: req.body.email,
    // })
    context.res = {
        body: {}
    };
}