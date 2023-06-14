function rutasGet(req, res) {
  res.send("Esta haciendo get");
}
function rutasPut(req, res) {
  res.send("Esta haciendo Put");
}
function rutasPost(req, res) {
  res.send("Esta haciendo Post");
}
function rutasDelete(req, res) {
  res.send("Esta haciendo Delete");
}

module.exports = {
  rutasGet,
  rutasPost,
  rutasPut,
  rutasDelete,
};
