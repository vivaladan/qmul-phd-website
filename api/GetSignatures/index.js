const axios = require('axios');

module.exports = function (context, req) {
    axios.get("https://qmul-phd.firebaseio.com/signatures.json")
        .then(resp => {
            let signatures = [];

            for (const key in resp.data) {
                if (resp.data.hasOwnProperty(key)) {
                    const c = resp.data[key];
                    signatures.push({
                        id: c.id,
                        name: c.name,
                        institution: c.institution,
                        position: c.position,
                        department: c.department,
                        timestamp: c.timestamp,
                    })
                }
            }

            context.res = {
                body: {
                    signatures,
                }
            };

            context.done();
        })
        .catch(error => {
            console.log(error);
        });;
}