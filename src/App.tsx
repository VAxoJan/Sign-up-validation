import MainPage from "./components/Main_page/MainPage";
import desktop from './components/Images/desktopBg.png'
const App = () => {
  return (
    <div style={{ backgroundImage: `url(${desktop})` }} className="h-[100vh]">
        <MainPage />
    </div>

  )
}

export default App;