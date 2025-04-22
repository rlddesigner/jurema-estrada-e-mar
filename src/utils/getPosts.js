const postImports = import.meta.glob('../pages/posts/*.md', { eager: true });

const posts = Object.values(postImports).map((post) => ({
  ...post,
}));

export default posts;
