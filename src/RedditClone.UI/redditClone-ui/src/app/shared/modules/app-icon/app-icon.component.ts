import { AfterContentInit, Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.css']
})
export class AppIconComponent implements OnInit,OnDestroy {

  protected svgElement: SVGSVGElement | undefined = undefined;
  protected SVG_SOURCE = '../../../../../../assets/icons/custom-icons.svg#';

  @Input() set icon(value: string) {
    this.setSvgIcon(value);
  }

  constructor(private elementRef: ElementRef<HTMLElement>){  }

  ngOnInit(): void {
    let svgIconName = this.icon ? this.icon : this.elementRef.nativeElement.outerText;
    this.setSvgIcon(svgIconName);
  }

  ngOnDestroy(): void {
    this.svgElement?.remove();
  }
  
  private setSvgIcon(svgIconName: string): void {
    if(!svgIconName) return; 
    this.svgElement = this.createSvgElement(svgIconName);
    this.addSvgElement(this.svgElement);
  }

  private createSvgElement(iconName: string): SVGSVGElement {
    const NS = 'http://www.w3.org/2000/svg';
    const svgElement = document.createElementNS(NS,'svg');

    this.setSvgAttributes(svgElement,iconName.includes('bootstrap'));
    this.setSvgSize(svgElement);

    this.elementRef.nativeElement.classList.forEach(value => svgElement.classList.add(value));

    const useElement = document.createElementNS(NS, 'use');
    useElement.setAttribute('href',this.SVG_SOURCE + iconName);

    svgElement.appendChild(useElement);

    return svgElement;
  }

  private addSvgElement(svg: SVGSVGElement): void {
    this.clear();
    this.elementRef.nativeElement.appendChild(svg);
  }

  private clear(): void {
    this.elementRef.nativeElement.classList.value = '';
    this.elementRef.nativeElement.innerHTML = '';
  }

  private setSvgAttributes(svg: SVGSVGElement,isBootstrapIcon: boolean): void {
    let fillValue = 'none';
    let viewBoxValue = '0 0 24 24';
    let strokeWidthValue = '1.5';

    if(isBootstrapIcon) {
      fillValue = 'currentColor';
      viewBoxValue = '0 0 16 16';
      strokeWidthValue = '0';
    }

    svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
    svg.setAttribute('fill',fillValue);
    svg.setAttribute('stroke-width',strokeWidthValue);
    svg.setAttribute('stroke','currentColor');
    svg.setAttribute('viewBox',viewBoxValue);
  }

  private setSvgSize(svg: SVGSVGElement): void {
    svg.setAttribute('height','24'); // h-6
    svg.setAttribute('width','24'); // w-6
  }

}
