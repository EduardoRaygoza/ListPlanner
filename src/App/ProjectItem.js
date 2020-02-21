import {DOMHelper} from '../Utility/DOMHelper';
//import {Tooltip} from './Tooltip.js';

export class ProjectItem {
  
  constructor(id, updateProjectListHandler, type) {
    this.hasActiveToolTip = false;
    this.id = id;
    this.updateProjectListHandler = updateProjectListHandler;
    this.connectInfoBtn();
    this.connectSwitchBtn(type);
    this.connectDrag();
  }

  connectDrag() {
    document.getElementById(this.id).addEventListener('dragstart', event => {
      event.dataTransfer.setData('text/plain', this.id);
      event.dataTransfer.effectAllowed = 'move';
    });
  }

  connectSwitchBtn(type) {
    const element = document.getElementById(this.id);
    let btn = element.querySelector('button:last-of-type');
    btn = DOMHelper.clearEventListeners(btn);
    btn.textContent = type === 'active' ? 'Finish' : 'Activate';
    btn.addEventListener(
      'click',
      this.updateProjectListHandler.bind(null, this.id)
    );
  }

  showMoreInfoHandler() {
    if (this.hasActiveToolTip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    const toolTipText = projectElement.dataset.extraInfo;
    import('./Tooltip').then(module => {
      const toolTip = new module.Tooltip(
        () => {
          this.hasActiveToolTip = false;
        },
        toolTipText,
        this.id
      );
      toolTip.attach();
    });
    this.hasActiveToolTip = true;
  }

  connectInfoBtn() {
    const element = document.getElementById(this.id);
    const infoBtn = element.querySelector('button:first-of-type');
    infoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
  }

  update(switchHandler, type) {
    this.updateProjectListHandler = switchHandler;
    this.connectSwitchBtn(type);
  }
}
