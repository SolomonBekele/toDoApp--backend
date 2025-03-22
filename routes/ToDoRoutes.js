const {Router} = require("express")
const { getToDo, saveToDo, updateToDo, deleteToDo, getByIdToDo } = require("../controllers/ToDoController")

const router =Router()

router.get('/',getToDo)
router.post('/save',saveToDo)
router.put('/update/:_id',updateToDo)
router.put('/delete/:_id',deleteToDo)
router.get('/:id',getByIdToDo)

module.exports = router