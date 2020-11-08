exports.loginValidator = {
    content: {
        type: 'string'
        // mode: 'precise',
        // normalize: 'true',
    },
    author: {
        type: "string",
        nullable : true
    },
    title: {
        type: 'string'
        // convert: true,
        // empty: false,
    },
    slug: {
        type: 'string'
    },
    status: {
        type: 'string'
    },
    $$strict: 'remove',
}
