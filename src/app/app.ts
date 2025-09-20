import { Component, computed, inject, input } from '@angular/core';
import { TreeParserService } from './services/tree-parser';


@Component({
  selector: 'tree-node',
  imports: [],
  host: {
    class: 'px-6 flex flex-col',
  },
  template: `
    @if (childNodes().length > 0) { @for (item of childNodes(); track $index) {
    <li class="font-bold"> - {{ item }}</li>
    <tree-node [node]="item" />
    } }
  `,
})
export class TreeNode {
  node = input.required<string>();
  private _treeParser = inject(TreeParserService);
  protected childNodes = computed(() => this._treeParser.getSubTreeOf(this.node()));
}

@Component({
  selector: 'app-root',
  imports: [TreeNode],
  template: `
    <section class="w-vw bg-red-100 h-lvh p-16">
      <h1 class="text-lg font-bold ">Tree Parser</h1>
      <ul class="w-full m-4">
        <li class="px-6 font-bold">{{ parent_node }}</li>
        <tree-node [node]="parent_node" />
      </ul>
    </section>
  `,
})
export class App {
  parent_node = 'a';
}