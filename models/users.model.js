const {v4: uuidv4} = require('uuid');

const users = [
    {
        id: uuidv4(),
        username: "userone",
        email: "userone@nomail.com"
    },
    {
        id: uuidv4(),
        username: "usertwo",
        email: "usertwo@nomail.com"
    },
    {
        id: uuidv4(),
        username: "userthree",
        email: "userthree@nomail.com"
    },
    {
        id: uuidv4(),
        username: "userfour",
        email: "userfour@nomail.com"
    },
    {
        id: uuidv4(),
        username: "userfive",
        email: "userfive@nomail.com"
    }
];


module.exports = users;

