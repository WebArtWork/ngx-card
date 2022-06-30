# ngx-card

## Installation

```sh
waw add ngx-card
```

## Usage
```
html
<div class="w-card" [class._pd]="padding">
    <img src="{{image}}" alt="" class="w-card__img">
    <h1 *ngIf="title" class="w-card__title">{{title}}</h1>
    <span *ngIf="subtitle" class="w-card__subtitle">{{subtitle}}</span>
    <p *ngIf="text" class="w-card__text">{{text}}</p>
    <ng-content></ng-content>
</div>
```
```
import { CardModule } from 'src/app/modules';
@NgModule({
    imports: [
        CardModule
    ]
})
```

## Classes
```
_pd | Adds padding to a card
_align | Aligns text to the center
```

## Nested elements with predefined styles
```
img | Adds image inside card with full width 
h1 | Adds title with font-size, font-weight
span | Adds subtitle with font-size, font-weight
p | Adds text with font-size
```