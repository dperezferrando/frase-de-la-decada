
class FraseController {

  getAll({ service, query: { offset, limit, ...filter } = {} }) {
    return service.getAll(filter, offset, limit);
  }

  vote({ service, body }) {
    return service.vote(body);
  }

}

export default FraseController;