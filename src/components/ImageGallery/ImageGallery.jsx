import { Component } from "react";
import { getImg } from '../API/api';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component{
    state = {
        img: [],
        isLoading: false,
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.searchText !== this.props.searchText) {
            getImg(this.props.searchText)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error("respons is bad");
                }
                return resp.json();
            }).then(dataImg => {
                this.setState({img: dataImg.hits})
            }).catch((er) => {console.log(er)})
              .finally(()=>{
                this.setState({isLoading: false})
            })
        }
    }

    render(){
        const { img } = this.state;
        const { isLoading } = this.state;
        return(
            <>
            {isLoading && (
                <div className="" role='status'>
                	Loading...
                </div>
            )}
            <ul className="gallery">
                {img && (<ImageGalleryItem img={img}/>)}
           </ul>
           </>
        )
    }
}