import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class sustainableDevelompmentGoals extends DDDSuper(LitElement) {

  static get tag() {
    return "sustainable-develompment-goals";
  }

  constructor() {
    super();
    this.title = "";
    this.goal = "";
    this.label = "";
  }

  static get properties() {
    return {
      title: { type: String },
      goal: { type: String },
      label: { type: String},
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        font-size: var(--sustainable-develompment-goals-font-size, var(--ddd-font-size-s));
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      div {
        padding: 0;
        margin: 0;
      }
    `];
  }
  getLabel(){
    if (this.label===""){
      if (this.goal==="1"){
        return "No poverty";
      }
      else if(this.goal==="2"){
        return "Zero hunger";
      }
      else if(this.goal==="3"){
        return "Good health and well-being";
      }
      else if(this.goal==="4"){
        return "Quality education";
      }
      else if(this.goal==="5"){
        return "Gender Equality";
      }
      else if(this.goal==="6"){
        return "Clean water and sanitation";
      }
      else if(this.goal==="7"){
        return "Affordable and clean energy";
      }
      else if(this.goal==="8"){
        return "Decent work and economic growth";
      }
      else if(this.goal==="9"){
        return "Industry, innovation and infrastructure";
      }
      else if(this.goal==="10"){
        return "Reduced inequalities";
      }
      else if(this.goal==="11"){
        return "Sustainable cities and communities";
      }
      else if(this.goal==="12"){
        return "Responsible consumption and production";
      }
      else if(this.goal==="13"){
        return "Climate action";
      }
      else if(this.goal==="14"){
        return "Life below water";
      }
      else if(this.goal==="15"){
        return "Life on land";
      }
      else if(this.goal==="16"){
        return "Peace, justice and strong institutions";
      }
      else if(this.goal==="17"){
        return "Partnerships for the goals";
      }
      else if(this.goal==="all"){
        return "This is an image depicting all Sustainable Development Goals";
      }
      else if(this.goal==="circle"){
        return "This is an image depicting a logo for Sustainable Development Goals";
      }
      else {
        return this.label;
      }
    }
    else{
      return this.label;
    }
  }
  render() {
    return html`
<div class="wrapper">
  <div>${this.title}</div>
  <div><img src="/lib/goals-${this.goal}.svg" alt="${this.getLabel()}"></div>
  <slot></slot>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(sustainableDevelompmentGoals.tag, sustainableDevelompmentGoals);