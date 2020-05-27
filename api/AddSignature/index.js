const { v4: uuidv4 } = require('uuid');
const axios = require('axios');

module.exports = function (context, req) {
    var newObj = {};
    newObj[uuidv4()] = {
        timestamp: new Date(),
        name: req.body.name,
        position: req.body.position,
        department: req.body.department,
        institution: req.body.institution,
    };

    axios.patch("https://qmul-phd.firebaseio.com/signatures.json", newObj)
        .then(resp => {
            res: {
                body: {    
                }
            }
            context.done();
        })
        .catch(err => {
            res = {
                status: 400,
                body: {    
                    error: err
                }
            };
            context.done();
        });
}