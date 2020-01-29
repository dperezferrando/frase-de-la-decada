
class FraseController {

  getAll({ service, query: { offset, limit, ...filter } = {} }) {
    return service.getAll(filter, offset, limit);
  }

}

export default FraseController;