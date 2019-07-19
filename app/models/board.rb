class Board < ApplicationRecord
    validates :name, :manufacturer_id, presence: true
    validates :year, numericality: { greater_than_or_equal_to: 1900, less_than_or_equal_to: 2025 }
end
