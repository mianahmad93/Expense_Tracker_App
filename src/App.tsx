import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/header';
import CurrentBalance from './components/CurrentBalance/CurrentBalance';
import AccountSummary from './components/AccountSummary/AccountSummary'
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import AddTransaction from './components/AddTransaction/AddTransaction';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import { BrowserRouter,Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
       <Header />
       <CurrentBalance />
       <AccountSummary />
       <TransactionHistory />
       <AddTransaction />
       </Provider>
      {/* <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={ <Header />}/>
            <Route path='/' element={<CurrentBalance />} />
            <Route path='/' element={<AccountSummary />}/>
            <Route path='/' element={  <TransactionHistory />}/>
            <Route path='/' element={ <AddTransaction />}/>        
          </Routes>
        </Provider>
      </BrowserRouter> */}
    </div>
  );
}
export default App;
