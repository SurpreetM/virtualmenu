class FoodItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :price, :heading
end
