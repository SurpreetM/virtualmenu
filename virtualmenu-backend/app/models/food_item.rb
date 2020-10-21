class FoodItem < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :description, presence: true
  validates :price, numericality: true
  validates :heading, presence: true
  belongs_to :heading
end
