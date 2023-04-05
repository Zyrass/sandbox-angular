import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/Cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [
    { id: crypto.randomUUID(), name: "vodka gimlet", img: "https://i2.wp.com/dishesdelish.com/wp-content/uploads/2018/08/Vodka-Gimlet-Recipe-Square-1.jpg", description: "Mix and serve. Garnish with a slice of lime" },
    { id: crypto.randomUUID(), name: "claret lemonade", img: "https://thefoodxp.com/wp-content/cache/flying-press/thefoodxp.com/mMBgjOdoAzw-hqdefault.jpg", description: "Combine liquid ingredients. Pour back and forth between two halves of a cocktail shaker. Strain into a goblet over ice and garnish." },
    { id: crypto.randomUUID(), name: "juice of a few flowers", img: "https://lh4.ggpht.com/aBI6gXcR6m25-0-6oNWfV6lYrP5W766sfPdrVVT11_7A5i2dbgcBrljnUk0X95oC4XSUzHdHHrxaJs9PSaoskA=w343-h343-c-rj-v1-e365", description: "Shake and strain into a goblet with a rim moistened with lemon juice and dipped in coarse sugar." },
    { id: crypto.randomUUID(), name: "Mojito", img: "https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2023/03/80255_origin-scaled-300x200.jpg", description: "Muddle lime wedges. Muddle mint lightly. Add ice, syrup, rum. Shake, fine strain into glass with more ice. Top with club soda, garnish with additional lime wedge and mint sprig." },
  ];
}
