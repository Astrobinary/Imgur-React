import React, {Component} from 'react';
import style from './app.scss';
import Header from '../header';
import Container from '../container';
import actions from '../../Redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Container fetchImages={this.props.actions.fetchImages} images={this.props.images}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
	return state;
}

function mapDispatchToPros(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToPros) (Main);
