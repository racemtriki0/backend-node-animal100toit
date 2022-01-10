const Store = require('../models/store');

exports.createStore = (req, res, next) => {
  const url = req.protocol + '://' + req.get('host');
  const store = new Store({
    nom: req.body.nom,
    prix: req.body.prix,
    imagePath: url + '/images/' + req.file.filename,
    tel:req.body.tel,
    desc:req.body.desc, 

    creator: req.userData.userId
  });
  store.save().then(createdStore => {
    res.status(201).json({
      message: 'store added suscfuly',
      store: {
        ...createdStore,
        id: createdStore._id,
      }
    });

  }).catch(error => {
      res.status(500).json({
        message: 'creating a store faild!'
      })
    }
  );
}


exports.getStores = (req, res, next) => {
  Store.find().then(
    document => {
      res.status(200).json({
        massage: 'Storess fetch succesfuly',
        stores: document
      })
    }).catch(error => {
    res.status(500).json({
      message: 'Fetching store faild'
    });
  });
}

exports.getStore = (req, res, next) => {
  Store.findById(req.params.id).then(store => {
    if (store) {
      res.status(200).json(store);
    } else {
      res.status(404).json({message: 'store not found'});
    }
  }).catch(err => {
    res.status(500).json({
      message: 'Fetching store faild'
    })
  });
}

exports.deleteStore = (req, res, next) =>
{
  Store.deleteOne({_id: req.params.id, creator: req.userData.userId }).then(result => {
    console.log(result);
    if (result.n > 0) {
      res.status(200).json({meesage: 'delete was success'});
    }
    res.status(401).json({meesage: 'Nout Authorized'});
  }).catch(err => {
    res.status(500).json({
      message: 'Cannot delete the store'
    })
  });;
}
