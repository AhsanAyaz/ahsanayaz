export const DISQUS_CONFIG = ({location, title}) => {
  console.log(location.href, location.key, title);
  return {
    url: location.href,
    identifier: location.key,
    title: title,
  };
}