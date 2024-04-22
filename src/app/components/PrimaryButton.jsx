const PrimaryButton = ({ text, className, href, transparent, targetBlank }) => {
  return (
    <a
      href={href}
      className={`primary-button ${className ? className : ""} ${
        transparent ? "primary-button--transparent" : ""
      }`}
      target={targetBlank ? "_blank" : ""}
    >
      <p>{text}</p>
    </a>
  );
};

export default PrimaryButton;
