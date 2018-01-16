import React from 'react';
import FlatBondList from './FlatBondList';
import SearchFilter from './SearchFilter';

const Dashboard = () => (
  <div className="content">
    <SearchFilter />
    <FlatBondList />
  </div>
);

export default Dashboard;