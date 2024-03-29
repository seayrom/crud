const Post = require("../models/post.model");

const getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.status(200).json(posts);
};

const getSinglePost = async (req, res) => {
  const postId = req.params.postId;
  const post = await Post.findById(postId);
  res.status(200).json(post);
};

const createPost = async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json(post);
};

const updatePost = async (req, res) => {
  const postId = req.params.postId;
  let post = await Post.findById(postId);
  if (!post) {
    return res.status(404).json({ msg: "Post not found" });
  }
  post = await Post.findByIdAndUpdate(postId, req.body, { new: true });
  res.status(201).json(post);
};

const deletePost = async (req, res) => {
  const postId = req.params.postId;
  let post = await Post.findById(postId);
  if (!post) {
    return res.status(404).json({ msg: "Post not found" });
  }
  await Post.findByIdAndDelete(postId);
  res.status(200).json({ msg: "Post deleted." });
};

module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
};
