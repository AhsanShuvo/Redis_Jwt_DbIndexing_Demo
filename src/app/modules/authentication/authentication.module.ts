import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthenticationRoutingModule } from "./authentication-routing.modue";
import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        AuthenticationRoutingModule,
        CommonModule
    ]
})
export class AuthenticationModule {}