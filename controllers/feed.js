exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: 'Content 1', content: 'This is the first post' }],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  //Create in the database
  res.status(201).json({
    message: 'Post created successfully',
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
