
import './App.css';
import MyBadge from './components/MyBadge';
import WarningSign from './components/WarningSign';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleBook from './components/SingleBook';
import fantasy from './data/fantasy.json'
import DisplayBooks from './components/DisplayBooks';
import CommentArea from './components/CommentArea';



function App() {
  return (
    <div className="App">
      
      <WarningSign text="What are Props again?"/>
      <MyBadge  str="MyBadge is here" color="danger"/>
      <SingleBook book={fantasy[0]}/>
      <DisplayBooks books = {fantasy}/> 
      <CommentArea/>
      
      
      
    </div>
  );
}

export default App;
