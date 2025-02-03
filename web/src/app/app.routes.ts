import { Routes } from '@angular/router';
import { ProductDataComponent } from './components/product-data/product-data.component';
import { KeywordsComponent } from './components/keywords/keywords.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { TitlesDescriptionsComponent } from './components/titles-descriptions/titles-descriptions.component';

export const routes: Routes = [
    { path: '', redirectTo: 'product-data', pathMatch: 'full' },
    { path: 'product-data', component: ProductDataComponent },
    { path: 'keywords', component: KeywordsComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'titles-descriptions', component: TitlesDescriptionsComponent }
];
