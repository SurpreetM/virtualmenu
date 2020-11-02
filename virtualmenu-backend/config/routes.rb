Rails.application.routes.draw do
  resources :food_items, only: [:create, :destroy]
  resources :headings, only: [:index, :create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
