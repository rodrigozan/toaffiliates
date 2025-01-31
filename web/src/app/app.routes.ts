import { Routes } from '@angular/router';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { KeywordLowComponent } from './components/keyword-low/keyword-low.component';
import { KeywordHighComponent } from './components/keyword-high/keyword-high.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { TitlesDescriptionsComponent } from './components/titles-descriptions/titles-descriptions.component';

export const routes: Routes = [
    { path: 'product', component: ProductFormComponent },
    { path: 'low-keywords', component: KeywordLowComponent },
    { path: 'high-keywords', component: KeywordHighComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'titles-descriptions', component: TitlesDescriptionsComponent },
    { path: '', redirectTo: '/product', pathMatch: 'full' }
];
