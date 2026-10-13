import {groups,pages} from './data';
import {Header,Footer} from './components';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ServicePage from './pages/ServicePage';
export function resolvePage(path){const filename=path.split('/').filter(Boolean).pop()||'index.html';const candidate=filename.includes('.')?filename:filename+'.html';return pages.some(p=>p.file===candidate)?candidate:'index.html';}
export default function App({page='index.html'}){const group=groups.find(g=>g.file===page);return <><a className="skip-link" href="#main">Skip to content</a><Header page={page}/><main id="main">{group?<ServicePage group={group}/>:page==='about.html'?<About/>:page==='contact.html'?<Contact/>:<Home/>}</main><Footer/></>;}
