import { useState , useEffect} from 'react';
// import logo from "./logo.svg";        
import Searchbox from './components/searchbox/searchbox.jsx'
import "./App.css";
const App = ()=>{
  console.log('render');
  const [searchfield,setsearchfield] = useState('');
  const [def,setdef] = useState('');
  const [element,setelement] = useState('<div><h1>SEARCH ANY WORD</h1></div>');
  useEffect(()=>{
    console.log('useffect');
    if(searchfield === '')
    setelement('<div><h1>SEARCH ANY WORD</h1></div>');
    else 
   {fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + searchfield)
          .then((response) => response.json()).then((tit) => {
            if(tit.title==='No Definitions Found')
            setelement('<div><h1>No Definitions Found</h1></div>');
            else
            {setdef(tit[0]['meanings'][0]['definitions'][0]['definition']);
    setelement('<h3>Definition</h3>: <h4>'+def);
          }
          })
         }},[searchfield,def]);
  console.log(def);
 const onSearchChange = (event) => {
        console.log(event.target.value);
        const searchfieldstring = event.target.value.toLocaleLowerCase();
        setsearchfield(searchfieldstring);
      }
      
  return (
          <div className="App">
          <h1 className='app-title'>MYDICTIONARY.COM</h1>
            <Searchbox onSearchHandler ={onSearchChange} placeholder='search-word'/>
            <div dangerouslySetInnerHTML={{__html: element}}></div>
    
          </div>
        );

}
export default App;
