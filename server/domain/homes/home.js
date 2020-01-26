import NotFound from "../exceptions/notFound";

class Home {
  constructor(Model) {
    this.Model = Model;
  }

  findOne(query) {
    return this.Model.findAsync(query)
      .get(0)
      .tap(it => this._throwIfNotFound(it));
  }

  create(entity) {
    return this.Model.createAsync(entity);
  }

  _throwIfNotFound(entity) {
    if(!entity)
      throw new NotFound();

  }
}

export default Home;