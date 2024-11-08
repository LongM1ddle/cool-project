const Notification = () => {
  const messages = {
    success: "Операция успешна",
    error: "Операция неуспешна",
    warning: "Предупреждение",
  };
  const types = ["success", "error", "warning"];
  const randomResult = types[Math.floor(Math.random() * types.length)];
  const styles = {
    success: { color: "green" },
    error: { color: "red" },
    warning: { color: "orange" },
  };
  return <p style={styles[randomResult]}>{messages[randomResult]}</p>;
};
export default Notification;
