const { body, validationResult } = require('express-validator')

const createPost = [
    body('title')
        .not().isEmpty(),
    function (req, res, next) {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            // req.session.count = 1
            return res.status(500).json({
                error: errors.errors[0]
            })
        }
        next()
    }
    // function (req, res, next) {
    //     console.log('hi')
    //     next()
    // }
]
module.exports = { createPost }
