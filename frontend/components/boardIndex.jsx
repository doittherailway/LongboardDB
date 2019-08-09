import React from 'react';
import BoardIndexItem from './boardIndexItem';

const boardsTest = {
    1: {
        name: "Tarab",
        manufacturer_id: 3,
        category: ["Dancing", "Freestyle"],
        year: "2019"
    },
    2: {
        name: "Dinghy",
        manufacturer_id: 2,
        category: ["Street", "Cruising"],
        year: 2018
    },
    3: {
        name: "Evo",
        manufacturer_id: 2,
        category: ["Downhill"],
        year: 2015
    }
};

const manufactsTest = {
    2: {
        name: "Landyachtz"
    },
    3: {
        name: "Loaded Boards"
    }
};

class BoardIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "ASC",
            year: "ASC",
            boards: boardsTest,
            shownBoards: boardsTest,
            manufactModalOpen: false,
            manufacturersSelected: []
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.sortBy = this.sortBy.bind(this);
        this.showManufactModal = this.showManufactModal.bind(this);
        this.hideManufactModal = this.hideManufactModal.bind(this);
        this.filterBy = this.filterBy.bind(this);
        this.resetFilters = this.resetFilters.bind(this);
    }

    showManufactModal() {
        this.setState({
            manufactModalOpen: true
        });
    }

    hideManufactModal() {
        this.setState({
            manufactModalOpen: false
        });
    }

    handleToggle(property) {
        switch(property) {
            case "year":
                if (this.state.year == "ASC") {
                    this.setState({
                        year: "DESC"
                    }, () => (this.sortBy("year", "DESC")));
                } else {
                    this.setState({
                        year: "ASC"
                    }, () => (this.sortBy("year", "ASC")));
                }
                break;
            case "name":
                if (this.state.name == "ASC") {
                    this.setState({
                        name: "DESC"
                    }, () => (this.sortName("DESC")));
                } else {
                    this.setState({
                        name: "ASC"
                    }, () => (this.sortName("ASC")));
                }
                break;
        }
        
    }

    sortBy(property, order) {
        let newOrderBoards;
        switch(order) {
            case "DESC":
                if (property == "name") {
                    newOrderBoards = Object.values(this.state.shownBoards).sort((a, b) => (a.name > b.name) ? 1 : -1);
                } else {
                    newOrderBoards = Object.values(this.state.shownBoards).sort((a, b) => (a.year > b.year) ? 1 : -1);
                }
                this.setState({
                    shownBoards: newOrderBoards
                });
                    break;
            case "ASC":
                if (property == "name") {
                    newOrderBoards = Object.values(this.state.shownBoards).sort((a, b) => (a.name < b.name) ? 1 : -1);
                } else {
                    newOrderBoards = Object.values(this.state.shownBoards).sort((a, b) => (a.year < b.year) ? 1 : -1);
                }
                this.setState({
                    shownBoards: newOrderBoards
                });
        }
    }

    filterBy(property, id) {
        let filteredBoards;
        switch (property) {
            case "Manufacturer":
                filteredBoards = Object.values(this.state.boards).filter(board => board.manufacturer_id == id);
                break;
            case "All":
                filteredBoards = this.state.boards;
                break;
            default:
                break;
        }
        this.setState({
            shownBoards: filteredBoards
        });
    }

    resetFilters(){
        this.setState({
            shownBoards: boardsTest
        });
    }

    render() {
        return(
            <div className="board-index-div">
                <div className="board-item-div-title">
                    <p onClick={() => (this.handleToggle("name"))}> Name </p>
                    <p onClick={() => (this.handleToggle("year"))}> Year </p>
                    <p> Manufacturer <button onClick={this.showManufactModal}>\/</button></p><ManufactModal show={this.state.manufactModalOpen} handleClose={this.hideManufactModal} manufacturers={manufactsTest} filterBy={this.filterBy}/>
                    <p onClick={this.resetFilters}>Reset All Filters</p>
                </div>
                {Object.values(this.state.shownBoards).map ((board) => {
                    return(<BoardIndexItem board={board} maker={manufactsTest[board.manufacturer_id]} key={Object.keys(boardsTest).find(key=> boardsTest[key] === board)}/>)
                })}
                
            </div>
        )
    }
}

const ManufactModal = ({ handleClose, show, children, manufacturers, filterBy }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none"

    return (
        <div className={showHideClassName}>
            <p onClick={() => (filterBy("All"))}>Show All</p>
            {Object.keys(manufacturers).map ((manufactId) => {
                return(
                    <p key={manufactId} onClick={()=> (filterBy("Manufacturer", manufactId))}>{manufacturers[manufactId].name}</p>
                )
            })}
            <button onClick={handleClose}>close</button>
        </div>
    );
};

export default BoardIndex;