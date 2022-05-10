const apiResponse = require('../utils/apiResponse.js');
const Student = require('../data/entities/student');

exports.getAll = async (req, res) => {
    const students = await Student.findAll();

    const response = apiResponse.createModelRes(200, 'ok', students)
    return apiResponse.send(res, response);
}

exports.getById = async (req, res) => {
    const id = req.params.id;

    const student = await Student.findByPk(id);

    const response = apiResponse.createModelRes(200, 'ok', student)
    return apiResponse.send(res, response);
}

exports.create = async (req, res) => {
    const name = req.body.name;
    const city = req.body.city;
    const age = req.body.age;

    const student = await Student.create({
        name: name,
        city: city,
        age: age
    });


    const response = apiResponse.createModelRes(200, 'ok', student)
    return apiResponse.send(res, response);
}

exports.update = async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const city = req.body.city;
    const age = req.body.age;

    const student = await Student.findByPk(id);

    student.name = name;
    student.city = city;
    student.age = age;

    await student.save();

    const response = apiResponse.createModelRes(200, 'ok', student)
    return apiResponse.send(res, response);
}

exports.delete = async (req, res) => {
    const id = req.body.id;
    console.info(id);

    await Student.destroy({
        where: {
            id: id
        }
    });

    const response = apiResponse.createModelRes(200, 'ok')
    return apiResponse.send(res, response);
}
