class Heading < ApplicationRecord
    validates :name, presence: true, uniqueness: true 
    validates :name, format: { with: /\A[a-zA-Z\s]+\z/, message: 'should contain any special characters or numbers'}
    has_many :food_items
end
