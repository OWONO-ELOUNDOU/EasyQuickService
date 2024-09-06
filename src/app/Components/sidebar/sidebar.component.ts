import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/Auth/auth.service';
import {user} from "@angular/fire/auth";
import { UserService } from '../../Auth/service/user.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{

  user$ = this.authService.currentUser$;
  isMenuOpen: boolean = false;
  numberTasks!: string;
  numberTransactions!: string;
  numberUsers!: string;

  @Input() pageTitle: string = '';

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
