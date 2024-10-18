import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/user';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  constructor(private userDTO: UserService, private router: Router) {}

  userDetail: IUser[] = [];
  error: string = '';

  ngOnInit() {
    this.userDTO.getUser(1, 10).subscribe({
      next: (response: any) => {
        this.userDetail = response.data;
        console.log(response.data);
      },
      error: (err) => {
        if (err.status == 400) {
          this.error = 'errore nella chiamata ';
        }
      },
    });
  }

  goToDetail(id: number) {
    this.router.navigate(['/dettagli', id]);
  }
}
