import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  errorMessage: string = '';
  errorCode: number = 400 ;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const code=params.get('errorCode');
      if(code != null)
      this.errorCode = parseInt(code);
      this.errorMessage = this.getErrorMessage(this.errorCode);
    });
  }

  getErrorMessage(errorCode: number): string {
    switch (errorCode) {
      case 403:
        return 'Access denied';
      case 404:
        return 'the page you are looking for not avaible!';
      default:
        return 'Erreur';
    }
  }

}
