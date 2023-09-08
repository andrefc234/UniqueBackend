const MaterialList = require('../models/material')


exports.uploadMaterialList = async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  console.log(req.body)
   const material = await MaterialList.create(req.body)
   
   res.status(200).json({
    success:true,data:material
})
  };
exports.getMaterialList = (req, res)  => {
    MaterialList.find({}, function(err, data) {
      if (err) throw err;
      res.json(data);
    });
  }

  