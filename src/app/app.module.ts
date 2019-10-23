import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFormComponent } from './search-form/search-form.component';
import { BundleSizeComponent } from './bundle-size/bundle-size.component';
import { FileSizePipe } from './utils/file-size.pipe';
import { PackageHistoryComponent } from './package-history/package-history.component';
import { BarComponent } from './package-history/bar/bar.component';

@NgModule({
  declarations: [AppComponent, SearchFormComponent, BundleSizeComponent, FileSizePipe, PackageHistoryComponent, BarComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
