import menuModalStyles from "./menuModal.module.scss";

const MenuModal = () => {
  return (
    <div className={menuModalStyles.container}>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>
  );
};

export default MenuModal;
