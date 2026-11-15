export default function Button({
  children,
  type = "button",
  disabled = false,
  ...rest
}) {
  return (
    <button type={type} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
