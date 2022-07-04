# ngx-card

## Installation

```sh
waw add ngx-card
```

## Usage
```
html
  <wcard [image]="'folder\\file.jpg'"  [title]="' some title'" [subtitle]="' some subtitle'" [text]="' some text'"></wcard>
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
