import { ProjectItem } from './ProjectItem';
import { moveElement } from '../Utility/DOMHelper';

export class ProjectList {
  
  constructor(type) {
    console.log(type);
    this.type = type;
    this.projects = [];
    const itemList = document.querySelectorAll(`#${type}-projects li`);
    for (const item of itemList) {
      this.projects.push(
        new ProjectItem(item.id, this.removeProject.bind(this), this.type)
      );
    }
    this.connectDropable();
  }

  connectDropable() {
    const list = document.querySelector(`#${this.type}-projects ul`);
    list.addEventListener('dragenter', event => {
      if (event.dataTransfer.types[0] === 'text/plain') {
        list.parentElement.classList.add('droppable');
        event.preventDefault();
      }
    });
    list.addEventListener('dragover', event => {
      if (event.dataTransfer.types[0] === 'text/plain') {
        event.preventDefault();
      }
    });
    list.addEventListener('dragleave', event => {
      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {
        list.parentElement.classList.remove('droppable');
      }
    });
    list.addEventListener('drop', event => {
      const prjId = event.dataTransfer.getData('text/plain');
      if (this.projects.find(p => p.id === prjId)) {
        return;
      }
      document
        .getElementById(prjId)
        .querySelector('button:last-of-type')
        .click();
      list.parentElement.classList.remove('droppable');
    });
  }

  setSwitchHandler(handler) {
    this.switchHandler = handler;
  }

  addProject(project) {
    this.projects.push(project);
    moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.removeProject.bind(this), this.type);
  }

  removeProject(projectId) {
    this.switchHandler(this.projects.find(p => p.id === projectId));
    this.projects = this.projects.filter(p => p.id !== projectId);
  }
}
