
class FraseController {

  getAll({ service, query: { offset, limit, ...filter } = {} }) {
    return service.getAll(filter, offset, limit);
  }

  vote({ service, body }) {
    return service.vote(body);
  }

  trolo({ service }) {
    return service.trolo();
  }

  qualified({ service }) {
    return service.qualified();
  }

  mostVoted({ service }) {
    return service.mostVoted();
  }

}

export default FraseController;