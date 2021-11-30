export const withLoggerHOC = (Component) => (props) => {
  // console.log(props);
  return <Component {...props} />;
};
