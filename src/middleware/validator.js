'use strict'
function validator() {
    return (
        (req, res, next) => {
            let regex = /^[A-Za-z]{1,29}$/i;
            if (req.query.name) {
                if (regex.test(req.query.name)) {
                    next();
                }
                else {
                    next('enter a string name ');
                }
            }
            else {
                next('name is empty');
            }
        }
    )

}

module.exports = validator()

