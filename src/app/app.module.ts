import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./core/container/app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "./home/container/home/home.component";
import { PostOverviewComponent } from "./home/components/post-overview/post-overview.component";
import { EditorComponent } from "./home/components/editor/editor.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxEditorModule } from "ngx-editor";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PostOverviewComponent,
        EditorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        NgxEditorModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
