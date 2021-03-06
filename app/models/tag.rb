class Tag < ActiveRecord::Base
  attr_accessible :description, :name, :photo_ids
  validates :name, presence: true
  has_and_belongs_to_many :photos, uniq: true
end
