import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({
  name: 'norepeat',
  pure: false
})

export class NoRepeatPipe implements PipeTransform {
  transform(value: any): any{
      if(value!== undefined && value!== null){
          return _.uniqBy(value, 'name');
      }
      return value;
  }
}
