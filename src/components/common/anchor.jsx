const Anchor = ({ props }) => {
  return (
    <a href={props.href} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
};

export default Anchor;
