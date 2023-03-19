import { Component } from "react";
import { getImg } from '../API/api';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button'; 

export class ImageGallery extends Component{
    state = {
        img: [],
        isLoading: false,
        isModal: false,
        button: false,
        page: 1,
    }

    onLoadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1,
        }))
    }

    showModal = () =>{
        this.setState({isModal: true})
    }

    closeModal = () =>{
        this.setState({isModal: false})
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.searchText !== this.props.searchText || 
            this.state.page !== prevState.page) {

            this.setState({ isLoading: true });

            getImg(this.props.searchText, this.state.page)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error("respons is bad");
                }
                return resp.json();
            }).then(dataImg => {
                this.setState(prevState => ({
                    img: [...prevState.img, ...dataImg.hits],
                    button: true,
                  }));
            }).catch((er) => {console.log(er)})
              .finally(()=>{
                this.setState({isLoading: false})
            })
        }
    }

    render(){
        const { img, isLoading, button } = this.state;

        return(
            <>
                {isLoading && (
                    <div className="" role='status'>
                	    Loading...
                    </div>
                )}
                <ul className="gallery">
                    {img && (<ImageGalleryItem img={img}/>)}
                    {button && (<Button onClick={this.onLoadMore}/>)}
                </ul>
           </>
        )
    }
}

