import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'default-community-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default-community-icon.component.html',
  styleUrls: ['./default-community-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultCommunityIconComponent {
  @Input() class: string = 'w-6 h-6';
}
