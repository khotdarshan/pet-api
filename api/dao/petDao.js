const Pet = require('../models/petModel');
const Joi = require('joi');
const util = require('../common/util');
const { ErrorMessages, HTTP_STATUS, Messages } = require('../common/constant');

const get = async (res, filter, projection) => {
    filter = filter || {};
    projection = projection || {};
    const pets = await Pet.find(filter, projection)
        .catch(e => {
            return { error: { message: e.message, statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR } };
        });
    if (Object.prototype.hasOwnProperty.call(pets, 'error')) {
        util.responseWrapper({ error: pets.error.message }, res, pets.error.statusCode);
    } else {
        util.responseWrapper(pets, res);
    }
};

const getOne = async (res, filter, projection) => {
    filter = filter || {};
    projection = projection || {};
    const pet = await Pet.findOne(filter, projection)
        .catch(e => {
            return { error: { message: e.message, statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR } };
        });
    if (Object.prototype.hasOwnProperty.call(pet, 'error')) {
        util.responseWrapper({ error: pet.error.message }, res, pet.error.statusCode);
    } else {
        util.responseWrapper(pet, res);
    }
};

const save = async (pet, res) => {
    const { error } = validateNewPet(pet);
    if (error) {
        util.responseWrapper({ error: error.message }, res, HTTP_STATUS.BAD_REQUEST);
    } else {
        pet = await (new Pet(pet)).save()
            .catch(e => {
                return { error: { message: e.message, statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR } };
            });
        if (Object.prototype.hasOwnProperty.call(pet, 'error')) {
            util.responseWrapper({ error: pet.error.message }, res, pet.error.statusCode);
        } else {
            util.responseWrapper(pet, res);
        }
    }
};

const update = async (id, pet, res) => {
    const { error } = validateExistingPet(pet);
    if (error) {
        util.responseWrapper({ error: error.message }, res, HTTP_STATUS.BAD_REQUEST);
    } else {
        pet = await Pet.findOneAndUpdate(
            { _id: id },
            pet,
            { new: true, projection: { __v: 0 } }
        ).catch(e => {
            return { error: { message: e.message, statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR } };
        });

        if (pet === null) {
            util.responseWrapper({ error: ErrorMessages.PET_NOT_FOUND }, res, HTTP_STATUS.NOT_FOUND);
        } else if (Object.prototype.hasOwnProperty.call(pet, 'error')) {
            util.responseWrapper({ error: pet.error.message }, res, pet.error.statusCode);
        } else {
            util.responseWrapper(pet, res);
        }
    }
};

const deleteOne = async (id, res) => {
    const { error } = await Pet.findByIdAndDelete(id)
        .catch(e => {
            return { error: { message: e.message, statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR } };
        });
    if (error) {
        util.responseWrapper({ error: error.message }, res, error.statusCode);
    } else {
        util.responseWrapper({ message: Messages.PET_DELETED }, res);
    }

};

const validateNewPet = (pet) => {
    const schema = Joi.object({
        name: Joi.string().strict().required(),
        age: Joi.number().strict().required(),
        color: Joi.string().strict().required()
    });
    return schema.validate(pet);
};

const validateExistingPet = (pet) => {
    const schema = Joi.object({
        name: Joi.string().strict().required(),
        age: Joi.number().strict().required(),
        color: Joi.string().strict().required()
    });
    return schema.validate(pet);
};

module.exports = {
    save,
    get,
    getById: getOne,
    update,
    deleteOne
};