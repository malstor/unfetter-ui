import { RouterModule } from '@angular/router';

import { Create3Component } from './create/create3.component';
import { BaselineLayoutComponent } from './layout/baseline-layout.component';
import { SummaryComponent } from './result/summary/summary.component';
import { FullComponent } from './result/full/full.component';
import { BaselineGuard } from './baseline.guard';

const routes = [
    {
        path: 'navigate',
        canActivate: [BaselineGuard],
    },
    {
        path: '',
        component: BaselineLayoutComponent,
        children: [
            { path: 'create', component: Create3Component },
            { path: 'wizard/new', loadChildren: 'app/baseline/wizard/wizard.module#WizardModule' },
            { path: 'wizard/edit/:baselineId', loadChildren: 'app/baseline/wizard/wizard.module#WizardModule' },
        ]
    },
    { path: 'result/summary/:baselineId', component: SummaryComponent },
];

export const routing = RouterModule.forChild(routes);
