import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'  //use in component to call the pipe
})
export class FilterPipePipe implements PipeTransform {

  transform(tasks: [] , search: string): any[] {
    if(!tasks) return [];
    if(!search) return tasks;

    search = search.toLowerCase();
    //filteration
    return tasks.filter((tasks : string) => {
      return tasks.toLowerCase().includes(search)
    })

  }

}
