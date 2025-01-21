import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const App = () => {
  const props = {
    name : "testName",
    location : "서울",
    //favorList : ["파스타", "빵", "떡볶이"],
  }

  return (
      <div className="App">
        <Header />
        <Body {...props} />
        <Footer />
      </div>
  );
};

export default App;
