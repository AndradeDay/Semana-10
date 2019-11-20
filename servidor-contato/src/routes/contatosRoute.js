const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.get("/nome/:nome", controller.getByNome)
router.get("/id/:id", controller.getById)
router.post("/criar", bodyParser.json(), controller.add) // o bodyPasrer. json informa que está 
router.delete("/deletar/:id", controller.deleteID)
// recebendo uma importação de dados em json 

module.exports = router
