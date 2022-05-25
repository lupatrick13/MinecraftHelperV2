import {ifError} from 'assert';

export class Recipe {
  // Key is recipe ID stored in service. Value is amount needed.
  private readonly _recipePaths: Map<number, number>[] = [];

  constructor(
      public name: string,
      public craft_amt: number,
      public craftingMedium?: string,
  ) {}

  addComponent(recipePath: number, recipeId: number, amtNeeded: number): void {
    if (recipePath >= this._recipePaths.length) {
      this._recipePaths.push(new Map<number, number>());
    }

    this._recipePaths[recipePath].set(recipeId, amtNeeded);
  }

  getRecipePath(recipePath: number): Map<number, number>|undefined {
    if (recipePath >= this._recipePaths.length) {
      return undefined;
    }

    return this._recipePaths[recipePath];
  }

  isBaseIngredient(): boolean {
    return this._recipePaths.length === 0;
  }
}
