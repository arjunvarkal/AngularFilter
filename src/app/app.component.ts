import { Component } from '@angular/core' ;

@Component({
    selector: 'app-edu',
    templateUrl: './app.component.html',
    styleUrls:['./app.component.css']
})

export class AppComponent{
  title = 'My Angular Applicaton' ;
  cars : any[] = [
    {
      "id": 1,
      "brand": "Ford",
      "model": "Mustang",
      "year": 1985,
      "image": "https://tinyurl.com/squr9ak",
      "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
  },
  {
      "id": 2,
      "brand": "Benz",
      "model": "Altima",
      "year": 2017,
      "image": "https://tinyurl.com/wk2duwl",
      "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
  },
  {
      "id": 3,
      "brand": "Lamborghini",
      "model": "Armada",
      "year": 2017,
      "image": "https://tinyurl.com/yx7ybw2w",
      "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
  },

  ]
}





/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';
}
*/