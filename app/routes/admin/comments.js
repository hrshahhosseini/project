const express = require("express");
const commentRouter = express.Router();

const commentsController = require("../../controller/admin/commentsController");

commentRouter.get("/", commentsController.comments);
// commentRouter.get("/create", commentsController.create);
// commentRouter.comment("/store", validator.createComment, commentsController.store);
// commentRouter.get("/delete/:commentID", commentsController.remove);
// commentRouter.get('/edit/:commentID' , commentsController.edit)
module.exports = commentRouter;
