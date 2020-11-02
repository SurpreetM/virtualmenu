class FoodItem < ApplicationRecord
  validates :name, presence: true, uniqueness: true, format: { with: /\A[a-zA-Z\s0-9]+\z/, message: 'should not contain any special characters or numbers'}
  validates :description, presence: true, format: { with: /\A[a-zA-Z\s\.0-9\,]+\z/, message: 'should not contain any special characters'}
  validates :price, presence: true, numericality: true
  validates_associated :heading 
  belongs_to :heading
end
