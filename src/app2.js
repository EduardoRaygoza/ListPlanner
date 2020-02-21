import { ProjectList } from './App/ProjectList';

class App {
  static init() {
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
    activeProjectsList.setSwitchHandler(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandler(
      activeProjectsList.addProject.bind(activeProjectsList)
    );
  }
}

App.init();
