export default function Header ({tongPhan}){
    const tenQuan =import.meta.env.VITE_TEN_QUAN | 'Quán Huế Xưa';

    return(
        <header className="header">
            <h1>{tenQuan}</h1>
            <div className="gio-thong-tin">
                Giỏ hàng: <span data-testid="tong-phan">{tongPhan || 0}</span> phần
            </div>
        </header>
    );
}