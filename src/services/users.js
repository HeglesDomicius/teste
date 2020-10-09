import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/users';
/**
 * O Service é responsavel por buscar os usuarios
 * e tratar os dados, daria para separar a parte da busca
 * de dados criando uma classe somente para chamar a API externa
 * eu acho descenssario.
 */
class UsersService {
  /**
   * aqui a classe usa por padrão o axios
   * mas é possivel subtituir ele facilmente passando
   * qualquer outra coisa por parametro
   */
  constructor(request = axios) {
    this.request = request;
  }

  async getWebsites() {
    const response = await axios(url);

    const data = await response.data;

    response.json(data);
  }

  async getAll() {
    const response = await this.request(url);

    const data = await response.data;

    const allUsers = data.map((users) => {
      const { name, email, company } = users;

      return {
        name,
        email,
        company: company.name,
      };
    });

    allUsers.sort(function (a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;

      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;

      return 0;
    });

    return allUsers;
  }

  async getSuite() {
    const response = await axios.get(url);
    const data = await response.data;

    const suites = data.filter((user) => {
      return user.addres.suite.includes('Suite');
    });

    return response.json(suites);
  }
}

module.exports = UsersService;
