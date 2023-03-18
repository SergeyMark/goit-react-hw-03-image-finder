import { Component } from "react";

export class Searchbar extends Component{
    state = {
        inputValue: '',
    }

    handleChange = (event) => {
        this.setState({inputValue: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSearch(this.state.inputValue)
    }

    render(){
        const { inputValue } = this.state;
        return(
                <header className="">
                    <form className="form" onSubmit={this.handleSubmit} role='search'>
                        <button type="submit" className="button">
                            <span className="button-label">Search</span>
                        </button>

                        <input
                            className="input"
                            type="search"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            value={inputValue}
                            onChange={this.handleChange}
                        />
                    </form>
                </header>
        )
    }
}