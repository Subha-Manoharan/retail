import ItemsRepo from './../repositories/itemsRepo'
export default {
  get: (req, res) => ItemsRepo.getAll().then((result) => res.json(result))
}
