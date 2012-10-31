class Photo < ActiveRecord::Base
  attr_accessible :description, :name, :price, :url

  has_and_belongs_to_many :tags, uniq: true
end
