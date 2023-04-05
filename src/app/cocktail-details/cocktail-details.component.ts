import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/Cocktail.interface';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent {
  cocktail: Cocktail = { id: crypto.randomUUID(), name: "Mojito", img: "https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2023/03/80255_origin-scaled-300x200.jpg", description: "Muddle lime wedges. Muddle mint lightly. Add ice, syrup, rum. Shake, fine strain into glass with more ice. Top with club soda, garnish with additional lime wedge and mint sprig." }
}
