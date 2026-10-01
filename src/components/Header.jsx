export default function Header({ tongPhan }) {
  return (
    <header className="header">
      <h1>Quán Ăn ngon Huế</h1>
      <div className="gio-hang-thong-tin">
        Giỏ hàng: <span>{tongPhan || 0}</span> phần
      </div>
    </header>
  );
}