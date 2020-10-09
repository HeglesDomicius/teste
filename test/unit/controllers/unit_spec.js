import WebUsers from '../../../src/controllers/users';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Controllers: Users', () => {
  const defaultUsers = [
    {
      name: 'Default name',
      email: 'Default email',
      company: 'Default company',
    },
  ];

  describe('get() users', () => {
    it('should return a list od users', () => {
      const request = {};
      const response = {
        send: sinon.spy(),
      };

      const webUsers = new WebUsers();
      webUsers.get(request, response);

      expect(response.send.called).to.be.true;
      expect(response.send.calledWith(defaultUsers)).to.be.true;
    });
  });
});
