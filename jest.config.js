module.exports = {

    collectCoverage: true,

    collectCoverageFrom: ['api/**/*.js'],

    coverageDirectory: 'coverage',

    coverageReporters: [
        'json',
        'text',
        'lcov',
        'clover'
    ],

    testEnvironment: 'node',

    modulePathIgnorePatterns: [
        "routes"
    ]

};