import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { Value } from '../interfaces/value';
import { Subscription } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-value',
  standalone: true,
  imports: [HttpClientModule, NgFor],
  templateUrl: './value.component.html',
  styleUrl: './value.component.css',
  providers: [ApiService],
})
export class ValueComponent implements OnInit, OnDestroy {
  values: Value[] = [];
  private subscription?: Subscription;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.subscription = this.apiService.getValues().subscribe({
      next: values => this.values = values,
      error: err => console.log(err),
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
