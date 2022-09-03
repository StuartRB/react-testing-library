
const mockedResponse = {
    data: {
        results: [{
            name: {
                first: "Stu",
                last: "Burnside",
            },
            picture: {
                large: ""
            },
            login: {
                username: "sbu"
            }
        }]
    }
};

export default {
    get: jest.fn().mockResolvedValue(mockedResponse)
};