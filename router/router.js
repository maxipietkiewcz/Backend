const { Router } = require("express");
const {
  rutasGet,
  rutasPut,
  rutasPost,
  rutasDelete,
} = require("../controller/controller");

const router = Router();

router.get("/Inicio", rutasGet);

router.post("/Post", rutasPost);

router.put("/Put", rutasPut);

router.delete("/delete", rutasDelete);

module.exports = router;
