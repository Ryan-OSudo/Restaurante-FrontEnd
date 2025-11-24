// src/app/components/dish-list/dish-list.component.ts

import { Component, OnInit } from '@angular/core';
import { DishService, Dish } from '../../services/dish.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';

interface DishWithQuantity extends Dish {
  quantity: number;
}

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
})
export class DishListComponent implements OnInit {
  dishes: DishWithQuantity[] = [];
  notificationMessage: string = '';
  showNotification: boolean = false;

  constructor(
    private dishService: DishService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadDishes();
  }

  loadDishes() {
    this.dishService.getDishes().subscribe((data: Dish[]) => {
      this.dishes = data.map((dish) => ({ ...dish, quantity: 1 }));
    });
  }

  deleteDish(id: number | undefined): void {
    if (id == null) {
      return;
    }

    this.dishService.deleteDish(id).subscribe(() => {
      this.loadDishes();
      this.showToast('Prato excluído com sucesso.', 'warning');
    });
  }

  addToCart(dish: DishWithQuantity): void {
    if (dish.id === undefined || dish.id === null) {
      console.error('Prato sem ID válido:', dish);
      this.showToast(
        `ERRO: Prato "${dish.name}" não possui ID válido.`,
        'error'
      );
      return;
    }

    if (dish.quantity < 1) {
      this.showToast(`ERRO: Quantidade deve ser 1 ou mais.`, 'error');
      return;
    }

    this.cartService.addItem({
      dishId: dish.id,
      name: dish.name,
      price: dish.price,
      quantity: dish.quantity,
    });

    dish.quantity = 1;
    this.showToast(
      `${dish.quantity}x "${dish.name}" adicionado(s) ao carrinho!`,
      'success'
    );
  }

  showToast(
    message: string,
    type: 'success' | 'error' | 'warning' = 'success'
  ): void {
    this.notificationMessage = message;
    this.showNotification = true;

    setTimeout(() => {
      this.showNotification = false;
      this.notificationMessage = '';
    }, 3000);
  }
}
