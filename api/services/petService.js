const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const petDao = require('../dao/petDao');

const save = async (req, res) => {
    await petDao.save(req.body, res);
};

const get = async (req, res) => {
    await petDao.get(res);
};

const getById = async (req, res) => {
    await petDao.getById(res, ObjectId(req.params.id));
};

const update = async (req, res) => {
    await petDao.update(ObjectId(req.params.id), req.body, res);
};

const deleteOne = async (req, res) => {
    await petDao.deleteOne(ObjectId(req.params.id), res);
};

module.exports = {
    save,
    get,
    getById,
    update,
    delete: deleteOne
};