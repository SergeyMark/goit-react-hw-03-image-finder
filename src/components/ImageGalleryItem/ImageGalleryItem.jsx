export const ImageGalleryItem = ({img, showModal}) => {
    return (
        img.map(({id, webformatURL, tags}) => 
            <li className="gallery-item" key={id}>
                <img src={webformatURL} alt={tags} onClick={showModal}/>
            </li>
        )
    )
}