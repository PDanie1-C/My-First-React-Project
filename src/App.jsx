import './App.css';
import NavButton from './components/NavButton';
import nodkrai from './assets/nodkrai.webp'
import MainBody from './components/MainBody'

function App() {
  return (
    <> 
      <div className="bg-black/60 min-h-screen w-full">
        <div className="flex flex-wrap gap-6 p-5">
          <div className='sm:text-base'><NavButton name="Home"></NavButton></div>
          <div><NavButton name="About me"></NavButton></div>
          <div><NavButton name="Education"></NavButton></div>
          <div><NavButton name="Skills"></NavButton></div>
        </div>
        
        <MainBody/>

        <div className="fixed inset-0 -z-10">
          <img className="w-full h-screen object-cover" src={nodkrai}></img>
        </div>

        <div className="bg-yellow-400/75 flex flex-col items-center justify-center w-full h-12 fixed bottom-0">
          <p className="text-sm text-white">@Paul Daniel Castillejo</p>
          <p className="text-xs text-white/75">All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}

export default App;