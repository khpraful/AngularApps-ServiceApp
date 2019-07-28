
import{NgModule} from '@angular/core';
import { AppService } from './services/app.service';
import { SampleTestDirective } from './sample-test.directive';

@NgModule({
    imports:[],
    exports:[SampleTestDirective],
    declarations:[SampleTestDirective],
    providers:[AppService]
})

export class SampleTestModule{}
