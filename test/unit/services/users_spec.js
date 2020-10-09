import UsersService from '../../../src/services/users';
import sinon from 'sinon';

describe('UsersService test', () => {
  it('should get a list of users', async () => {
    const fakeAxios = sinon.stub();
    const expectedApiResponse = {
      data: [
        {
          name: 'Chelsey Dietrich',
          email: 'Lucio_Hettinger@annie.ca',
          company: { name: 'Keebler LLC' },
        },
        {
          name: 'Clementina DuBuque',
          email: 'Rey.Padberg@karina.biz',
          company: { name: 'Hoeger LLC' },
        },
      ],
    };
    const expectedFinalResponse = [
      {
        name: 'Chelsey Dietrich',
        email: 'Lucio_Hettinger@annie.ca',
        company: 'Keebler LLC',
      },
      {
        name: 'Clementina DuBuque',
        email: 'Rey.Padberg@karina.biz',
        company: 'Hoeger LLC',
      },
    ];

    fakeAxios
      .withArgs('https://jsonplaceholder.typicode.com/users')
      .resolves(expectedApiResponse);

    const usersService = new UsersService(fakeAxios);

    const users = await usersService.getAll();
    expect(users).to.be.eql(expectedFinalResponse);
  });
});
