class Photo < ActiveRecord::Base
  attr_accessible :description, :title, :price, :url, :tag_ids

  validates :title, :url, presence: true

  has_and_belongs_to_many :tags, uniq: true


end




# Tag.find_by_id(1).photos
# Photo.where( ????
#