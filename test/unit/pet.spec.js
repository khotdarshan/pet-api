const petService = require('../../api/services/petService');
const PetModel = require('../../api/models/petModel');
const { getAllPetMock, getPetByIdMock, savePetMock, updatePetMock, deletePetMock } = require('../mock/petDao');
const { ExpressMock } = require('../mock');
let expressMock;

describe('Pet Service', () => {

    beforeEach(async () => {
        expressMock = ExpressMock();
    });

    test('Get All Pet: Positive', async () => {
        jest.spyOn(PetModel, 'find').mockImplementation(async () => {
            return await getAllPetMock.PositiveMockData();
        });
        await petService.get(expressMock.req, expressMock.res);
        expect(expressMock.res.statusCode).toBe(200);
        expect(expressMock.res.body).toEqual(getAllPetMock.PositiveMockResponse());
    });

    test('Get All Pet: Negative', async () => {
        jest.spyOn(PetModel, 'find').mockImplementation(async () => {
            return await getAllPetMock.NegativeError();
        });
        await petService.get(expressMock.req, expressMock.res);
        expect(expressMock.res.statusCode).toBe(500);
        expect(expressMock.res.body).toEqual(getAllPetMock.NegativeMockResponse());
    });

    test('Get Pet by id: Positive', async () => {
        jest.spyOn(PetModel, 'findOne').mockImplementation(async () => {
            return await getPetByIdMock.PositiveMockData();
        });
        expressMock.req = {
            params: {
                id: '5ffe14a62747760ba087b418'
            }
        };
        await petService.getById(expressMock.req, expressMock.res);
        expect(expressMock.res.statusCode).toBe(200);
        expect(expressMock.res.body).toEqual(getPetByIdMock.PositiveMockResponse());
    });

    test('Get Pet by id: Negative', async () => {
        jest.spyOn(PetModel, 'findOne').mockImplementation(async () => {
            return await getPetByIdMock.NegativeError();
        });
        expressMock.req = {
            params: {
                id: '5ffe14a62747760ba087b418'
            }
        };
        await petService.getById(expressMock.req, expressMock.res);
        expect(expressMock.res.statusCode).toBe(500);
        expect(expressMock.res.body).toEqual(getPetByIdMock.NegativeMockResponse());
    });

    test('Save Pet : Positive', async () => {
        jest.spyOn(PetModel.prototype, 'save').mockImplementation(async () => {
            return await savePetMock.PositiveMockData();
        });
        expressMock.req = {
            body: {
                "name": "Tommy7",
                "age": 2,
                "color": "white"
            }
        };
        await petService.save(expressMock.req, expressMock.res);
        expect(expressMock.res.statusCode).toBe(200);
        expect(expressMock.res.body).toEqual(savePetMock.PositiveMockResponse());
    });

    test('Save Pet : Negative', async () => {
        jest.spyOn(PetModel.prototype, 'save').mockImplementation(async () => {
            return await savePetMock.NegativeError();
        });
        expressMock.req = {
            body: {
                "name": "Tommy7",
                "age": 2,
                "color": "white"
            }
        };
        await petService.save(expressMock.req, expressMock.res);
        expect(expressMock.res.statusCode).toBe(500);
        expect(expressMock.res.body).toEqual(savePetMock.NegativeMockResponse());
    });

    test('Save Pet - Invalid Name Input: Negative', async () => {
        jest.spyOn(PetModel.prototype, 'save').mockImplementation(async () => {
            return await savePetMock.NegativeError();
        });
        expressMock.req = {
            body: {
                "name": 7,
                "age": 2,
                "color": "white"
            }
        };
        await petService.save(expressMock.req, expressMock.res);
        expect(expressMock.res.statusCode).toBe(400);
        expect(expressMock.res.body).toEqual(savePetMock.NegativeInvalidNameInputMockResponse());
    });

    test('Save Pet - Invalid Age Input: Negative', async () => {
        jest.spyOn(PetModel.prototype, 'save').mockImplementation(async () => {
            return await savePetMock.NegativeError();
        });
        expressMock.req = {
            body: {
                "name": "Tommy7",
                "age": "2",
                "color": "white"
            }
        };
        await petService.save(expressMock.req, expressMock.res);
        expect(expressMock.res.statusCode).toBe(400);
        expect(expressMock.res.body).toEqual(savePetMock.NegativeInvalidAgeInputMockResponse());
    });

    test('Save Pet - Invalid Color Input: Negative', async () => {
        jest.spyOn(PetModel.prototype, 'save').mockImplementation(async () => {
            return await savePetMock.NegativeError();
        });
        expressMock.req = {
            body: {
                "name": "Tommy7",
                "age": 2,
                "color": true
            }
        };
        await petService.save(expressMock.req, expressMock.res);
        expect(expressMock.res.statusCode).toBe(400);
        expect(expressMock.res.body).toEqual(savePetMock.NegativeInvalidColorInputMockResponse());
    });

    test('Update Pet : Positive', async () => {
        jest.spyOn(PetModel, 'findOneAndUpdate').mockImplementation(async () => {
            return await updatePetMock.PositiveMockData();
        });
        expressMock.req = {
            params: {
                id: '5ffe14a62747760ba087b418'
            },
            body: {
                "name": "Tommy77",
                "age": 7,
                "color": "white"
            }
        };
        await petService.update(expressMock.req, expressMock.res);
        expect(expressMock.res.statusCode).toBe(200);
        expect(expressMock.res.body).toEqual(updatePetMock.PositiveMockResponse());
    });

    test('Update Pet : Negative', async () => {
        jest.spyOn(PetModel, 'findOneAndUpdate').mockImplementation(async () => {
            return await updatePetMock.NegativeError();
        });
        expressMock.req = {
            params: {
                id: '5ffe14a62747760ba087b418'
            },
            body: {
                "name": "Tommy77",
                "age": 7,
                "color": "white"
            }
        };
        await petService.update(expressMock.req, expressMock.res);
        expect(expressMock.res.statusCode).toBe(500);
        expect(expressMock.res.body).toEqual(updatePetMock.NegativeMockResponse());
    });

    test('Update Pet (existing pet not found): Negative', async () => {
        jest.spyOn(PetModel, 'findOneAndUpdate').mockImplementation(async () => {
            return await updatePetMock.NegativePetNotFoundError();
        });
        expressMock.req = {
            params: {
                id: '5ffe14a62747760ba087b418'
            },
            body: {
                "name": "Tommy77",
                "age": 7,
                "color": "white"
            }
        };
        await petService.update(expressMock.req, expressMock.res);
        expect(expressMock.res.statusCode).toBe(404);
        expect(expressMock.res.body).toEqual(updatePetMock.NegativePetNotFoundMockResponse());
    });

    test('Update Pet - Invalid Name Input: Negative', async () => {
        jest.spyOn(PetModel, 'findOneAndUpdate').mockImplementation(async () => {
            return await updatePetMock.NegativeError();
        });
        expressMock.req = {
            params: {
                id: '5ffe14a62747760ba087b418'
            },
            body: {
                "name": 7,
                "age": 2,
                "color": "white"
            }
        };
        await petService.update(expressMock.req, expressMock.res);
        expect(expressMock.res.statusCode).toBe(400);
        expect(expressMock.res.body).toEqual(updatePetMock.NegativeInvalidNameInputMockResponse());
    });

    test('Update Pet - Invalid Age Input: Negative', async () => {
        jest.spyOn(PetModel, 'findOneAndUpdate').mockImplementation(async () => {
            return await updatePetMock.NegativeError();
        });
        expressMock.req = {
            params: {
                id: '5ffe14a62747760ba087b418'
            },
            body: {
                "name": "Tommy7",
                "age": "2",
                "color": "white"
            }
        };
        await petService.update(expressMock.req, expressMock.res);
        expect(expressMock.res.statusCode).toBe(400);
        expect(expressMock.res.body).toEqual(updatePetMock.NegativeInvalidAgeInputMockResponse());
    });

    test('Update Pet - Invalid Color Input: Negative', async () => {
        jest.spyOn(PetModel, 'findOneAndUpdate').mockImplementation(async () => {
            return await updatePetMock.NegativeError();
        });
        expressMock.req = {
            params: {
                id: '5ffe14a62747760ba087b418'
            },
            body: {
                "name": "Tommy7",
                "age": 2,
                "color": true
            }
        };
        await petService.update(expressMock.req, expressMock.res);
        expect(expressMock.res.statusCode).toBe(400);
        expect(expressMock.res.body).toEqual(updatePetMock.NegativeInvalidColorInputMockResponse());
    });

    test('Delete Pet by id: Positive', async () => {
        jest.spyOn(PetModel, 'findByIdAndDelete').mockImplementation(async () => {
            return await deletePetMock.PositiveMockData();
        });
        expressMock.req = {
            params: {
                id: '5ffe14a62747760ba087b418'
            }
        };
        await petService.delete(expressMock.req, expressMock.res);
        expect(expressMock.res.statusCode).toBe(200);
        expect(expressMock.res.body).toEqual(deletePetMock.PositiveMockResponse());
    });

    test('Delete Pet by id: Negative', async () => {
        jest.spyOn(PetModel, 'findByIdAndDelete').mockImplementation(async () => {
            return await deletePetMock.NegativeError();
        });
        expressMock.req = {
            params: {
                id: '5ffe14a62747760ba087b418'
            }
        };
        await petService.delete(expressMock.req, expressMock.res);
        expect(expressMock.res.statusCode).toBe(500);
        expect(expressMock.res.body).toEqual(deletePetMock.NegativeMockResponse());
    });

});