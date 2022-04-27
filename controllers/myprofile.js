const apiResponse = require('../utils/apiResponse.js');
const MyProfile = require('../data/entities/myprofile');

exports.getAll = async (req, res) => {
    const result = await MyProfile.findAll();

    const response = apiResponse.createModelRes(200, 'ok', result)
    return apiResponse.send(res, response);
}

exports.getById = async (req, res) => {
    const id = req.params.id;

    const result = await MyProfile.findByPk(id);

    const response = apiResponse.createModelRes(200, 'ok', result)
    return apiResponse.send(res, response);
}

exports.create = async (req, res) => {
    const name = req.body.name;
    const city = req.body.city;
    const age = req.body.age;
    const favoriteclass = req.body.favoriteclass;

    const result = await MyProfile.create({
        name: name,
        city: city,
        age: age,
        favoriteclass: favoriteclass
    });


    const response = apiResponse.createModelRes(200, 'ok', result)
    return apiResponse.send(res, response);
}

exports.update = async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const city = req.body.city;
    const age = req.body.age;
    const favoriteclass = req.body.favoriteclass;

    const result = await MyProfile.findByPk(id);

    result.name = name;
    result.city = city;
    result.age = age;
    result.favoriteclass = favoriteclass;

    await result.save();

    const response = apiResponse.createModelRes(200, 'ok', result)
    return apiResponse.send(res, response);
}

exports.delete = async (req, res) => {
    const id = req.body.id;

    await MyProfile.destroy({
        where: { 
            id: id 
        }
    });

    const response = apiResponse.createModelRes(200, 'ok')
    return apiResponse.send(res, response);
}
