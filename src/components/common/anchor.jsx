const Anchor = (props) => {
  return (
    <a
      href={props.href}
      className="text-decoration-none"
      target={props.isExternalLink && "_blank"}
      rel={props.isExternalLink && "noopener noreferrer"}
    >
      {" "}
      {props.children} {props.showIcon && <i className="bi bi-box-arrow-up-right"></i>}{" "}
    </a>
  );
};

Anchor.defaultProps = {
  isExternalLink: true,
  showIcon: true,
};

export default Anchor;
