import {dinhDangGia} from '../utils/formatters';

export default function MonAnCard({ mon, dangChon, onChon, onDat}) {
const { id, ten, gia, moTa, daHet } = mon;  

    return(
        <article className={`mon-an-card ${daHet ? 'da-het' : ''} ${dangChon ? 'dang-chon' : ''}`} onClick={() => onChon(id)}>
            <h3>{ten}</h3>
            <p className="mo-ta">{moTa}</p>
            <div className="gia-het-mon">
                <span className="gia">{dinhDangGia(gia)}</span>
                {daHet && <span className="da-het">Đã hết</span>}
            </div>
            <button
                type="button"
                disabled={daHet}
                onClick={(e) => {
                e.stopPropagation();
                onDat(id);
                }}
            >
                Đặt món
            </button>
        </article>
    );
}