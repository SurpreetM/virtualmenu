class HeadingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :food_items
end
