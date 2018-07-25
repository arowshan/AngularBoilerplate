import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(text: string, args: string[]): string {
    // Check if limit is provided, parse to base 10, if not, set limit to 20
    const limit = args.length > 0 ? parseInt(args[0], 10) : 20;

    // Check if there is a trail provided, if not use ...
    const trail = args.length > 1 ? args[1] : '...';

    return text.length > limit ? text.substring(0, limit) + trail : text;
  }
}
