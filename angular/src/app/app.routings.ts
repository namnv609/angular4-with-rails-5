import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";
import { RegisterComponent } from "./components/register/register.component";
import { SiteLayoutComponent } from "./_layout/site-layout/site-layout.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

export const AppRoutes: Routes = [
  {
    path: "",
    component: SiteLayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent,
        pathMatch: "full"
      }
    ]
  },
  {
    path: "register",
    component: RegisterComponent
  }
];
export const AppRoutings: ModuleWithProviders = RouterModule.forRoot(AppRoutes, {
  useHash: true
});
