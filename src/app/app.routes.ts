import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddWordComponent } from './components/add-word/add-word.component';
import { SinglewordComponent } from './components/singleword/singleword.component';
import { AllwordsComponent } from './components/allwords/allwords.component';
import { LineanimeComponent } from './lineanime/lineanime.component';


export const routes: Routes = [
  { path: '', component: SinglewordComponent },
  { path: 'singleword/:id', component: SinglewordComponent },
  { path: 'addword', component: AddWordComponent },
  { path: 'allwords', component: AllwordsComponent },
];
