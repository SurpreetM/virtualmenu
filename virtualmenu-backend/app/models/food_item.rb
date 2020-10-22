class FoodItem < ApplicationRecord
  validates :name, presence: true, uniqueness: true, format: { with: /\A[a-zA-Z'-]*\z/, message: 'should contain any special characters or numbers'}
  validates :description, presence: true, format: { with: /\A[a-zA-Z0-9'-]*\z/, message: 'should contain any special characters'}
  validates :price, presence: true, numericality: true
  validates_associated :heading
  # validates :heading, presence: true
  
  belongs_to :heading
end
