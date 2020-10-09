import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@Angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DroppdownDirective } from './shared/droppdown.directive';
import { ShoppingListService } from './shopping-list/shoppingList.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DroppdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}

/**
 * Hierearchical service injection
 *
 * services can be created for passing data amoung components
 *
 * there are 3 different method that we can follow:
 *  - application-wide --> we provide it in the app.module
 *  - we provide it in the app.component --> this way the appcoomponent does not have an instance,
 *    but its every children will have it.
 *  - we provide it in components, that have no children
 *    this way every component that provides it, has completely seperate instance from it
 *
 *
 * service can also be injected into a service, but in this case it needs to have metadata that is received
 *  by Injectable. Furthermore, the service that we would like to inject into another HAS TO BE PROVIDED
 *  in the app.module
 * in the case of injecting it in a component, it already has its metadata by the Component directive
 *
 * in the newer versions of Angular it is suggested to use Injectable in every case since later
 * it will probably have side effects
 */
