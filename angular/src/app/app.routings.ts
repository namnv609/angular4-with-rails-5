import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";
import { RegisterComponent } from "./components/register/register.component";

export const AppRoutes: Routes = [
  {
    path: "register",
    component: RegisterComponent
  }
];
export const AppRoutings: ModuleWithProviders = RouterModule.forRoot(AppRoutes, {
  useHash: true
});
