import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AttackPatternListComponent,
  AttackPatternsHomeComponent,
  AttackPatternComponent,
  AttackPatternNewComponent,
  AttackPatternEditComponent } from './attack-patterns';

import {
  CampaignsHomeComponent,
  CampaignsListComponent,
  CampaignsNewComponent,
  CampaignsEditComponent,
  CampaignComponent } from './campaigns';

import {
  CourseOfActionHomeComponent,
  CourseOfActionListComponent,
  CourseOfActionEditComponent,
  CourseOfActionComponent,
  CourseOfActionNewComponent, CourseOfActionMitigateComponent } from './course-of-actions';

  import {
    SightingHomeComponent,
    SightingListComponent,
    SightingNewComponent,
    SightingEditComponent,
    SightingComponent } from './sightings';

import { ThreatActorHomeComponent, ThreatActorListComponent , TheatActorComponent, ThreatActorNewComponent, ThreatActorEditComponent } from './threat-actors';
import { IntrusionSetHomeComponent, IntrusionSetListComponent, IntrusionSetComponent, IntrusionSetEditComponent, IntrusionSetNewComponent } from './intrusion-sets';
import { IndicatorHomeComponent , IndicatorListComponent, IndicatorEditComponent, IndicatorNewComponent, IndicatorComponent } from './indicators';
import { IdentityHomeComponent , IdentityListComponent, IdentityEditComponent, IdentityNewComponent, IdentityComponent } from './identities';

import { RelationshipsComponent, RelationshipNewComponent, RelationshipListComponent } from './relationships';
import { ReportsComponent, ReportsListComponent, ReportNewComponent, } from './reports';
import { MalwareListComponent } from './malwares/malware-list.component';

const stixRoutes: Routes = [
    { path: 'attack-patterns', component: AttackPatternsHomeComponent,
        children: [
        { path: '', component: AttackPatternListComponent },
        { path: 'new', component: AttackPatternNewComponent },
        { path: ':id', component: AttackPatternComponent },
        { path: 'edit/:id', component: AttackPatternEditComponent }
        ]
    },
    { path: 'campaigns', component: CampaignsHomeComponent,
      children: [
        { path: '', component: CampaignsListComponent },
         { path: 'new', component: CampaignsNewComponent },
         { path: ':id', component: CampaignComponent },
         { path: 'edit/:id', component: CampaignsEditComponent }
      ]
    },
     { path: 'mitigates/:id', component: CourseOfActionMitigateComponent},
    { path: 'course-of-action', component: CourseOfActionHomeComponent,
      children: [
            { path: '', component: CourseOfActionListComponent },
            { path: 'new', component: CourseOfActionNewComponent },
            { path: ':id', component: CourseOfActionComponent },
           { path: 'edit/:id', component: CourseOfActionEditComponent }
      ]
    },
    { path: 'sightings', component: SightingHomeComponent,
      children: [
            { path: '', component: SightingListComponent },
            { path: 'new', component: SightingNewComponent },
            { path: ':id', component: SightingComponent },
            { path: 'edit/:id', component: SightingEditComponent }
      ]
    },
     { path: 'reports', component: ReportsComponent,
      children: [
            { path: '', component: ReportsListComponent },
            { path: 'new', component: ReportNewComponent },

      ]
    },
    { path: 'threat-actors', component: ThreatActorHomeComponent,
      children: [
           { path: '', component: ThreatActorListComponent },
            { path: 'new', component: ThreatActorNewComponent },
            { path: ':id', component: TheatActorComponent },
            { path: 'edit/:id', component: ThreatActorEditComponent }
      ]
    },
    { path: 'intrusion-sets', component: IntrusionSetHomeComponent,
      children: [
          { path: '', component: IntrusionSetListComponent },
          { path: 'new', component: IntrusionSetNewComponent },
          { path: ':id', component: IntrusionSetComponent },
          { path: 'edit/:id', component: IntrusionSetEditComponent }
      ]
    },
    { path: 'relationships', component: RelationshipsComponent,
      children: [
          { path: '', component: RelationshipListComponent},
          { path: 'new', component: RelationshipNewComponent },
          { path: ':id', component: IntrusionSetComponent },
          { path: 'edit/:id', component: IntrusionSetEditComponent }
      ]
    },
    { path: 'indicators', component: IndicatorHomeComponent,
      children: [
          { path: '', component: IndicatorListComponent},
          { path: 'new', component: IndicatorNewComponent },
          { path: ':id', component: IndicatorComponent },
          { path: 'edit/:id', component: IndicatorEditComponent }
      ]
    },
    { path: 'identities', component: IdentityHomeComponent,
      children: [
          { path: '', component: IdentityListComponent},
          { path: 'new', component: IdentityNewComponent },
          { path: ':id', component: IdentityComponent },
          { path: 'edit/:id', component: IdentityEditComponent }
      ]
    },
     { path: 'malwares/:id', component: MalwareListComponent,
    },
];

@NgModule({
  imports: [
    RouterModule.forChild(stixRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [ ],
})
export class StixRoutingModule { }