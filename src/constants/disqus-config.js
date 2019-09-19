export const DISQUS_CONFIG = ({location, title}) => {
  return {
    url: location.href,
    identifier: location.key,
    title: title,
  };
}