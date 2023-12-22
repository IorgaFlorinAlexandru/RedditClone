import { Pipe, PipeTransform } from '@angular/core';
import { NavigationGroup } from 'src/app/core/common/models/navigation.models';

@Pipe({
  name: 'filterEmptyNavGroups'
})
export class FilterEmptyNavGroupsPipe implements PipeTransform {

  transform(groups: NavigationGroup[]): NavigationGroup[] {
    return groups.filter(g => g.routes.length > 0);
  }

}
