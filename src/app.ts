import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';

// Instantiating and Rendering the input area as well as the two lists
new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
