
class AuthorController {

  getAll({ service, query: { offset, limit, ...filter } = {} }) {
    return service.getAll(filter, offset, limit);
  }

}

export default AuthorController;