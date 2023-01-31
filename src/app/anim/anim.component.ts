import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anim',
  templateUrl: './anim.component.html',
  styleUrls: ['./anim.component.css']
})
export class AnimComponent {
  constructor(private router: Router) { }

  ngOnInit() {
    // do init at here for current route.

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2500);  //5s
  }
  
  //refresh function

  refresh(): void {
    window.location.reload();
  }
}
