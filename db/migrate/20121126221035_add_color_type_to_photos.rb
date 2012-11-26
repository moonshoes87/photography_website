class AddColorTypeToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :color_type, :string, default: "color"
  end
end
