const apiResponse = require('../helpers/apiResponses');
const mockService = require('../services/generate-mock.service')
const generateRandomMockData = function (req, res) {
    const request = req.params;
    return apiResponse.successResponseWithData(res, '', mockService.generateMockData(request.keyword, request.noOfRows, request.noOfColumns))
    // res.send(mockService.generateMockData(request.keyword, request.noOfRows, request.noOfColumns));
}
const generateMockDataWithInput = function (req, res) {
    return apiResponse.successResponseWithData(res, '', mockService.generateMockDataBasedOnInput(req.body));
}

module.exports = {
    generateRandomMockData,
    generateMockDataWithInput
}
