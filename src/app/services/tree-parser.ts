import { Injectable, signal } from '@angular/core';

const tree = {
  a: ['b', 'c'],
  b: ['d', 'e'],
  c: ['f', 'g'],
  e: ['h', 'i'],
  f: ['j', 'k'],
};

export type Node = keyof typeof tree;

@Injectable({
  providedIn: 'root',
})
export class TreeParserService {
  tree = signal(tree);

  getSubTreeOf(node: string) {
    return this.tree()[node as keyof typeof tree] || [];
  }
}
