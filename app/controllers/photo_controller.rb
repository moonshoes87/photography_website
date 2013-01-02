class PhotoController < ApplicationController

  def sorted
  @photos = Photo.all
  @tag = Tag.find(params[:id])
  end

  def index
  @photos = Photo.all rescue []
#  @black_and_white_photos = Photo.black_and_white
 # @food_photos = Tag.find_by_name("Kitchen and food")
  end

  def new
  @photo = Photo.new
  end

  def edit
  @photo = Photo.find(params[:id])
  end

  def show
  @photo = Photo.find(params[:id])
  end

  def update

  end

  def destroy
  @photo = Photo.find(params[:id])
  @photo.destroy
  end

  def kitchen_and_food
  @photos = Tag.find_by_name("Kitchen and food").photos
  render :index
  end

  def black_and_white
  @photos = Photo.black_and_white
  render :index
  end

end
