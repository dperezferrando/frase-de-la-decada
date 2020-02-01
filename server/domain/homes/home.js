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

  aggregate(pipeline) {  
    return this.Model.aggregateAsync(pipeline);
  }

  getAll(query, offset = 0, limit = 25, sort = {_id: 1}) {
    let options = {
      skip: parseInt(offset),
      sort,
      limit: parseInt(limit)
    };

    return this.Model.findAsync(query, {}, options);
  }

  _throwIfNotFound(entity) {
    if(!entity)
      throw new NotFound();

  }
}

export default Home;