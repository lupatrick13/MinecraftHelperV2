import {Observable, of} from 'rxjs';

export class Recipe {
  private readonly recipePaths: Map<Recipe, number>[] = [];
  constructor(
      public name: string,
      public craftAmount: number,
      public craftingMedium?: string,
  ) {}

  addRecipeToPath(pathId: number, recipe: Recipe, amountNeeded: number): void {
    if (!this.pathIdExists(pathId)) {
      this.recipePaths.push(new Map<Recipe, number>());
      pathId = this.recipePaths.length - 1;
    }

    this.recipePaths[pathId].set(recipe, amountNeeded);
  }

  getRecipePath(pathId: number) {
    if (!this.pathIdExists(pathId)) {
      this.recipePaths.push(new Map<Recipe, number>());
      pathId = this.recipePaths.length - 1;
    }

    return of(this.recipePaths[0])
  }

  listRecipePaths(): Observable<Map<Recipe, number>[]> {
    return of(this.recipePaths);
  }


  private pathIdExists(pathId: number): boolean {
    return pathId < this.recipePaths.length;
  }
}
