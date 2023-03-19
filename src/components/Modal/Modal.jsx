export const Modal = ({urlLarge, tags}) => {
    return (
        <div className="overlay">
            <div className="modal">
                <img src={urlLarge} alt={tags} />
            </div>
        </div>
    )
}