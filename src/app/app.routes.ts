import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponentComponent } from './component/dashboard-component/dashboard-component.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponentComponent, data: { user: null } },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}