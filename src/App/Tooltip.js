import { Component } from './Component';

export class Tooltip extends Component {
  constructor(closeNotifierFunction, text, hostElementId) {
    super(hostElementId);
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.create();
    this.closeTooltip = () => {
      this.detach();
      this.closeNotifier();
    };
  }

  

  create() {
    const toolTip = document.createElement('div');
    toolTip.className = 'card';
    const toolTipTemplate = document.getElementById('tooltip');
    const tooltipBody = document.importNode(toolTipTemplate.content, true);
    toolTip.append(tooltipBody);
    toolTip.querySelector('p').textContent = this.text;
    const hostElementPositionLeft = this.hostElement.offsetLeft;
    const hostElementPositionTop = this.hostElement.offsetTop;
    const hostElementHeight = this.hostElement.clientHeight;
    const parentElementScroll = this.hostElement.parentElement.scrollTop;

    const x = hostElementPositionLeft + 20;
    const y =
      hostElementPositionTop + hostElementHeight - 10 - parentElementScroll;

    toolTip.style.position = 'absolute';
    toolTip.style.left = `${x}px`;
    toolTip.style.top = `${y}px`;

    toolTip.addEventListener('click', this.closeTooltip);
    this.element = toolTip;
  }
}
