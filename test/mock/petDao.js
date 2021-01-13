const getAllPetMock = {
    PositiveMockData: () => {
        return [
            {
                "_id": "5ffe14a62747760ba087b418",
                "name": "Tommy7",
                "age": 2,
                "color": "white",
                "__v": 0
            }
        ]
    },
    PositiveMockResponse: () => {
        return [
            {
                "_id": "5ffe14a62747760ba087b418",
                "name": "Tommy7",
                "age": 2,
                "color": "white",
                "__v": 0
            }
        ]
    },
    NegativeError: () => {
        throw new Error('Connection Timeout');
    },
    NegativeMockResponse: () => {
        return { error: 'Connection Timeout' }
    },
};

const getPetByIdMock = {
    PositiveMockData: () => {
        return {
            "_id": "5ffe14a62747760ba087b418",
            "name": "Tommy7",
            "age": 2,
            "color": "white",
            "__v": 0
        }
    },
    PositiveMockResponse: () => {
        return {
            "_id": "5ffe14a62747760ba087b418",
            "name": "Tommy7",
            "age": 2,
            "color": "white",
            "__v": 0
        }

    },
    NegativeError: () => {
        throw new Error('Connection Timeout');
    },
    NegativeMockResponse: () => {
        return { error: 'Connection Timeout' }
    },
};

const savePetMock = {
    PositiveMockData: () => {
        return {
            "_id": "5ffe14a62747760ba087b418",
            "name": "Tommy7",
            "age": 2,
            "color": "white",
            "__v": 0
        }
    },
    PositiveMockResponse: () => {
        return {
            "_id": "5ffe14a62747760ba087b418",
            "name": "Tommy7",
            "age": 2,
            "color": "white",
            "__v": 0
        }

    },
    NegativeError: () => {
        throw new Error('Connection Timeout');
    },
    NegativeMockResponse: () => {
        return { error: 'Connection Timeout' }
    },
    NegativeInvalidNameInputMockResponse: () => {
        return { error: '"name" must be a string' }
    },
    NegativeInvalidAgeInputMockResponse: () => {
        return { error: '"age" must be a number' }
    },
    NegativeInvalidColorInputMockResponse: () => {
        return { error: '"color" must be a string' }
    },
};

const updatePetMock = {
    PositiveMockData: () => {
        return {
            "_id": "5ffe14a62747760ba087b418",
            "name": "Tommy7",
            "age": 2,
            "color": "white",
            "__v": 0
        }
    },
    PositiveMockResponse: () => {
        return {
            "_id": "5ffe14a62747760ba087b418",
            "name": "Tommy7",
            "age": 2,
            "color": "white",
            "__v": 0
        }

    },
    NegativeError: () => {
        throw new Error('Connection Timeout');
    },
    NegativeMockResponse: () => {
        return { error: 'Connection Timeout' }
    },
    NegativePetNotFoundError: () => {
        return null;
    },
    NegativePetNotFoundMockResponse: () => {
        return { error: 'Pet not found' }
    },
    NegativeInvalidNameInputMockResponse: () => {
        return { error: '"name" must be a string' }
    },
    NegativeInvalidAgeInputMockResponse: () => {
        return { error: '"age" must be a number' }
    },
    NegativeInvalidColorInputMockResponse: () => {
        return { error: '"color" must be a string' }
    },
};

const deletePetMock = {
    PositiveMockData: () => {
        return {
            "message": "Pet deleted successfully"
        }
    },
    PositiveMockResponse: () => {
        return {
            "message": "Pet deleted successfully"
        }

    },
    NegativeError: () => {
        throw new Error('Connection Timeout');
    },
    NegativeMockResponse: () => {
        return { error: 'Connection Timeout' }
    },
};

module.exports = {
    getAllPetMock,
    getPetByIdMock,
    savePetMock,
    updatePetMock,
    deletePetMock
};