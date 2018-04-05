module.exports = {
  exportPathMap: function(defaultPathMap) {
    const pageIDs = Array.from(new Array(3), (x, i) => i);
    // transform the list of posts into a map of pages with the pathname `/post/:id`
    const pages = pageIDs.reduce(
      (pages, post) =>
        Object.assign({}, pages, {
          [`/post/${post}`]: {
            page: '/post',
            query: { id: post },
          },
        }),
      {}
    );

    // combine the map of post pages with the home
    return {
      ...pages,
      ...{ '/': { page: '/' } },
      ...{ '/about': { page: '/about' } },
    };
  },
};
