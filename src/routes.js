import ItemController from './controllers/ItemController';

export default(app) => {
  app.get('/items', ItemController.get);
}
