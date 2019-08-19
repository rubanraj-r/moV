import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterMovies } from './../../actions/index.js';

class FilterMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilter: false,
      checkedGenres: []
    }
  }

  handleOnchecked(e) {
    console.log(e.target.value);
    var { checkedGenres } = this.state;
    var value = parseInt(e.target.value);
    if (!checkedGenres.includes(value)) {
      checkedGenres.push(parseInt(e.target.value));
    } else {
      checkedGenres = checkedGenres.filter(x => x!== value);
    }
    this.setState({checkedGenres});
  }
  
  generateCheckedGenreFilter() {
    return this.props.genres.map((genres, i) => {
      return (
        <div className='check-list' key={i}>
          <input 
            type="checkbox"
            name={genres.name}
            value={genres.id}
            checked={this.state.checkedGenres.includes(genres.id)}
            onChange={(e) => this.handleOnchecked(e)}/>
          <label>{genres.name}</label> <br />
        </div>
      );
    });
  }

  handleConfirmFilter() {
    var filteredMovies = [];
    console.log(this.props.movies.length);
    console.log('movies in state - > ', this.props.movies);
    this.props.movies.map(movie => {
      if (this.state.checkedGenres.length !== 0) {
        this.state.checkedGenres.map(x => {
          if(!movie.genre_ids.includes(x)) {
            movie.selected = false;
            filteredMovies.push(movie);
            console.log(movie);
            return;
          } else {
            movie.selected = true;
            filteredMovies.push(movie);
            return;
          }
        });
      } else {
        movie.selected = true;
        filteredMovies.push(movie);
        return;
      }
    });
    filteredMovies = filteredMovies.filter((x,i) => filteredMovies.indexOf(x) === i)
    console.log('filtered movies - > ', filteredMovies);
    this.props.filterMovies(filteredMovies);
    this.setState(() => ({showFilter: false}));
  }

  render() {
    console.log('selected filter - > ', this.state.checkedGenres);
    
    return(
      <React.Fragment>
        <center>
          <button onClick={() => this.setState(() => ({ showFilter: !this.state.showFilter }))}>
            {this.state.showFilter ? '-' : '+'}
          </button>
          <br /><br />
        </center>
        { 
          this.state.showFilter ?
            <div className='filter-menu'>
              <h3>
                Filter with Genre
              </h3>
              <br />
              <br />
              <div className='filter-list'>
                {this.generateCheckedGenreFilter()}
              </div>
              <br />
              <div>
                <button onClick={() => this.handleConfirmFilter()}>
                  <p>Filter</p>
                </button>
              </div>
              <br />
            </div> : null
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  genres: state.genres,
  movies: state.movies
});

const mapDispatchToProps = dispatch => {
 return bindActionCreators({
  filterMovies
 }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterMenu);