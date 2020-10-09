import UsersService from '../services/users';

class UsersController {
  constructor(usersService = new UsersService()) {
    this.usersService = usersService;
  }

  async getWebsites(req, res) {
    const sites = await this.usersService.getWebsites();
    res.json(sites);
  }

  async getAll(_, res) {
    const users = await this.usersService.getAll();
    res.json(users);
  }

  async getSuite(req, res) {
    const suite = await this.usersService.getSuite();
    res.json(suite);
  }
}
export default UsersController;
