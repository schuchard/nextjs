const postIDS = Array.from(new Array(3), (x, i) => i);

module.exports = {
  postIDS,
  exportPathMap: (defaultPathMap) => {
    // transform the list of posts into a map of pages with the pathname `/post/:id`
    const generatedPosts = postIDS.reduce((pages, post) => {
      return {
        ...pages,
        ...{
          [`/post/${post}`]: {
            page: '/post',
            query: { id: post },
          },
        },
      };
    }, {});

    // combine the map of post pages with the home
    return {
      ...generatedPosts,
      ...{ '/': { page: '/' } },
      ...{ '/about': { page: '/about' } },
    };
  },
};
