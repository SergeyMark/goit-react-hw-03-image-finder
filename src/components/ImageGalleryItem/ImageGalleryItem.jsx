export const ImageGalleryItem = ({img}) => {
    return (
        img.map(({id, webformatURL, tags}) => 
            <li className="gallery-item" key={id}>
                <img src={webformatURL} alt={tags} />
            </li>
        )
    )
}