module.exports = async function (context, req) {
    var signatures = context.bindings.signatures.map(sig => ({ 
        id: sig.id, 
        name: sig.name, 
        institution: sig.institution,
        timestamp: sig.timestamp,
    }));
    context.res = {
        body: {
            signatures,
        }
    };
}