import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFlatBondsData, addFlatBond } from '../../actions/flatbond';


class FlatBondList extends Component {

    componentDidMount() {
        const path = require('path').join(__dirname, 'api-mock-data/');
        const API_URL = path + '/flabond-mock-list.json' // Review when env production
        this.props.fetchData(API_URL);
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the flatbond list.</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        
        return (
            <div className="row">
            <div className="col-md-10 col-md-offset-1">
                <div className="panel panel-default panel-table">
                    <div className="panel-heading">
                    <div className="row">
                        <div className="col col-xs-6">
                            <h3 className="panel-title">FlatBond List</h3>
                        </div>
                        <div className="col col-xs-6 text-right">
                            <button type="button" className="btn btn-sm btn-primary btn-create">Create New flabond</button>
                        </div>
                    </div>
                    </div>
                    <div className="panel-body">
                    <table className="table table-striped table-bordered table-list">
                        <thead>
                            <tr>
                                <th><em className="fa fa-cog"></em></th>
                                <th className="hidden-xs">ID</th>
                                <th>Address</th>
                                <th>Expiry​ ​date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                        <tr>
                                <td style={{textAlign:"center"}}>
                                <a className="btn btn-default"><em className="fa fa-pencil"></em></a>
                                <a className="btn btn-danger"><em className="fa fa-trash"></em></a>
                                </td>
                                <td className="hidden-xs">123</td>
                                <td>127.0.0.1</td>
                                <td>June, 2018</td>
                                <td>Closed</td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>
                                <a className="btn btn-default"><em className="fa fa-pencil"></em></a>
                                <a className="btn btn-danger"><em className="fa fa-trash"></em></a>
                                </td>
                                <td className="hidden-xs">123</td>
                                <td>127.0.0.1</td>
                                <td>June, 2018</td>
                                <td>Closed</td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>
                                <a className="btn btn-default"><em className="fa fa-pencil"></em></a>
                                <a className="btn btn-danger"><em className="fa fa-trash"></em></a>
                                </td>
                                <td className="hidden-xs">123</td>
                                <td>127.0.0.1</td>
                                <td>June, 2018</td>
                                <td>Closed</td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>
                                <a className="btn btn-default"><em className="fa fa-pencil"></em></a>
                                <a className="btn btn-danger"><em className="fa fa-trash"></em></a>
                                </td>
                                <td className="hidden-xs">123</td>
                                <td>127.0.0.1</td>
                                <td>June, 2018</td>
                                <td>Closed</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    flatBondList: state.FlatBond.flatBondList,
    hasErrored: state.FlatBond.someThingWentWrong,
    isLoading: state.FlatBond.isLoading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchData: (url) => dispatch(fetchFlatBondsData(url)),
    createFlatBond: (index) => dispatch(addFlatBond())
});

export default connect(mapStateToProps, mapDispatchToProps)(FlatBondList);
