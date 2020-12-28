import { ProjectInput } from './components/project-input.js';
import { ProjectList } from './components/project-list.js';

// Instantiating and Rendering the input area as well as the two lists
new ProjectInput();
new ProjectList('active');
new ProjectList('finished');
