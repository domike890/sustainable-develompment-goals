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
    this.height = "254px";
    this.width = "254px";
    this.colorOnly = false;
    this.imgSrc = "1";
  }

  static get properties() {
    return {
      title: { type: String },
      goal: { type: String, reflect: true },
      label: { type: String, reflect: true},
      width: { type: String},
      height: { type: String},
      colorOnly: {type: Boolean, attribute: "color-only"},
      imgSrc: {type: String, reflect: true},
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
        //these are the variables for the different colors of blocks taken from the crit in class
        --un-sdg-goal-1: rgb(235, 28, 44);
        --un-sdg-goal-2: rgb(210, 160, 42);
        --un-sdg-goal-3: rgb(44, 155, 72);
        --un-sdg-goal-4: rgb(194, 31, 51);
        --un-sdg-goal-5: rgb(239, 64, 42);
        --un-sdg-goal-6: rgb(0, 173, 216);
        --un-sdg-goal-7: rgb(253, 183, 19);
        --un-sdg-goal-8: rgb(143, 23, 55);
        --un-sdg-goal-9: rgb(243, 109, 36);
        --un-sdg-goal-10: rgb(224, 21, 131);
        --un-sdg-goal-11: rgb(249, 157, 37);
        --un-sdg-goal-12: rgb(207, 141, 42);
        --un-sdg-goal-13: rgb(72, 119, 61);
        --un-sdg-goal-14: rgb(0, 125, 187);
        --un-sdg-goal-15: rgb(63, 175, 73);
        --un-sdg-goal-16: rgb(1, 85, 138);
        --un-sdg-goal-17: rgb(25, 54, 103);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      div {
        padding: 0;
        margin: 0;
      }
      /* css to dsiplay image correctly */
      img {
        width: 254px;
        height: 254px;
      }
      //css to display block colors
      .coloronly{
        width: 254px;
        height: 254px;
        display: inline-block;
      }
    `];
  }

  //this updates the label based off of the different goal numbers changing in the html
  updated(changedProperties) {
    this.label = updateLabel();
    this.imgSrc = new URL(`../lib/goals-${this.goal}.svg`, import.meta.url).href;
  }
  //reusage of the below thing that I made before thursday class to change the default label
  updateLabel(){
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
  //This was created before the array was given in class because I did not think to make an array when developing this
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
    let imgSrc = new URL(`../lib/goals-${this.goal}.svg`, import.meta.url).href;
    //This outputs only the color of the block if the attribute is set to true
    if(this.colorOnly){
      return html`
  <div class="coloronly" style="background-color: var(--un-sdg-goal-${this.goal});"></div>
      `
    }
    //this outputs the correct number block or special block
    return html`
<div class="wrapper">
  <div>${this.title}</div>
  <div> <img loading="lazy" fetchPriority="low" src="${(imgSrc)}" alt="${this.getLabel()}"></div>
  <slot></slot>
</div>`;
  }
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`../lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(sustainableDevelompmentGoals.tag, sustainableDevelompmentGoals);