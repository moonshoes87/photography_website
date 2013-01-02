class Photo < ActiveRecord::Base
  attr_accessible :description, :id, :title, :price, :url, :type, :tag_ids, :image_type, :color_type

  scope :black_and_white, where(color_type: "black and white")  
    
  default_scope order('created_at DESC')

  validates :title, :url, presence: true, uniqueness: true

  has_and_belongs_to_many :tags, uniq: true


end
