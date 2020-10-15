const express = require("express");
const postRouter = express.Router();

const validator = require("../../validator/posts");

const postsController = require("../../controller/admin/postsController");

postRouter.get("/", postsController.posts);
postRouter.get("/create", postsController.create);
postRouter.post("/store", validator.createPost, postsController.store);
postRouter.get("/delete/:postID", postsController.remove);
postRouter.get('/edit/:postID' , postsController.edit)
module.exports = postRouter;
