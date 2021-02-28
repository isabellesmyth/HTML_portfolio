
import Navbar from './Navbar.js';
import About from './About.js';
import News, {handleNewsFilter} from './News.js';
import Projects, {handleProjectFilter} from './ProjectPage.js';

export default function MainPage(data){
    document.querySelector('.container').innerHTML = `
        ${Navbar('main', Object.keys(data))}
        ${About(data.about)}
        ${News(data.news)}
        ${Projects(data.projects)}
        <footer>Copyright © 2019 Nam Wook Kim</footer>
    `
    
    handleNewsFilter(data);
    handleProjectFilter(data);
}
