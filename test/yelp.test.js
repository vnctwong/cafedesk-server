const yelp = require('../api/yelp');
const mockAxios = require('jest-mock-axios');

afterEach(() => {
  mockAxios.reset();
});

test('search for buro via yelp', () => {
  let catchFn = jest.fn(),
    thenFn = jest.fn();

  const clientMessage = 'buro';

  yelp.search(clientMessage)
    .then(thenFn)
    .catch(catchFn);

  // since `post` method is a spy, we can check if the server request was correct
  // a) the correct method was used (post)
  // b) went to the correct web service URL ('/web-service-url/')
  // c) if the payload was correct ('client is saying hello!')
  expect(mockAxios.get).toHaveBeenCalledWith('/web-service-url/', {
    data: clientMessage
  });

  // simulating a server response
  let responseObj = {
    data: 'buro'
  };
  mockAxios.mockResponse(responseObj);

  // checking the `then` spy has been called and if the
  // response from the server was converted to upper case
  expect(thenFn).toHaveBeenCalledWith('SERVER SAYS HELLO!');

  // catch should not have been called
  expect(catchFn).not.toHaveBeenCalled();
});
