const apiResponse = require('../utils/apiResponse.js');

exports.getMyProfile = async (req, res) => {
    //aqui temos que meter as nossas propriedas
    const myProfile = {
        name: "Marcelo",
        age: 30,
        city: "Braga"
    }

    const response = apiResponse.createModelRes(200, 'ok', myProfile)
    return apiResponse.send(res, response);
}