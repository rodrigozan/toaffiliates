import { Component, OnInit } from '@angular/core';
import { KeywordService } from '../../services/keywords/keywords.service';

@Component({
  selector: 'app-keywords',
  standalone: true,
  imports: [],
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent implements OnInit {
  lowKeywords: string[] = [];
  highKeywords: string[] = [];

  constructor(private keywordService: KeywordService) {}

  ngOnInit(): void {
    const author = 'Gabriel Becker';
    const product = 'A Jornada do Autodidata';

    const keywords = this.keywordService.generateKeywords(author, product);
    this.lowKeywords = keywords.low;
    this.highKeywords = keywords.high;
  }
}
