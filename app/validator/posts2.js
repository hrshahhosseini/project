const Validator = require('fastest-validator')

const v = new Validator()

const reqValidator = (schema) => {
    return (req, res, next) => {
        console.log("reqValidator -> req", req.body)

        // const ReqBodyProps = Object.keys(req.body);

        // if (!ReqBodyProps || ReqBodyProps.length < 0) {
        //     return res.send({ message: 'Booooo' });
        // }




        const check = v.compile(schema)
        const ReqBody = check(req.body);
        console.log("reqValidator -> ReqBody", ReqBody)
        if (ReqBody !== true) {
            return res.send({ message: 'Boooo' })
        }
        next()
    }

}



//     schema = {
//         body: {
//             type: 'object',
//             title: { type: 'string', empty: false }
//         }
//     }

//     const checker = v.compile(schema)

module.exports = reqValidator